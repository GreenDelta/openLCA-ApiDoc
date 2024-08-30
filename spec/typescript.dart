import 'dart:io';
import 'spec.dart';

class Type {
  final SchemaType schema;

  Type(this.schema);

  String name() {
    if (schema.isRef) {
      return "o.Ref";
    }
    if (schema.isList) {
      var inner = Type(schema.unpackList()).name();
      return "$inner[]";
    }
    return "o.${schema.signature}";
  }

  String variable() {
    return schema.camelCaseVariable();
  }

  bool get isList => schema.isList;

  Type unpackList() {
    return isList ? Type(schema.unpackList()) : this;
  }

  String restPathId() {
    switch (schema.signature) {
      case "TechFlow":
        return "techIdOf(${variable()})";
      case "EnviFlow":
        return "enviIdOf(${variable()})";
      default:
        return "${variable()}.id!";
    }
  }
}

writeProtocol(Spec spec) {
  print("  // protocol\n");
  for (var section in spec.sections) {
    print("  //#region ${section.id}\n");
    for (var m in section.methods) {
      print("  ${signatureOf(m)};\n");
    }
    print("  //#endregion\n");
  }
}

writeIpcStubs(Spec spec) {
  writeStubs(spec, ipcBodyOf);
}

writeRestStubs(Spec spec) {
  writeStubs(spec, restBodyOf);
}

writeStubs(Spec spec, String Function(Method) fn) {
  for (var section in spec.sections) {
    print("  //#region ${section.id}\n");
    for (var m in section.methods) {
      print("  async ${signatureOf(m)} {\n${fn(m)}  }\n");
    }
    print("  //#endregion\n");
  }
}

String signatureOf(Method m) {
  var sig = "${m.camelCaseName()}(";
  for (int i = 0; i < m.params.length; i++) {
    var type = Type(m.params[i]);
    if (i > 0) {
      sig += ",";
    }
    sig += "${type.variable()}: ${type.name()}";
  }
  var result = m.result != null ? Type(m.result!).name() : "void";
  sig += "): Promise<${result}>";
  return sig;
}

String ipcBodyOf(Method m) {
  if (m.result == null) {
    return '    await this._call("result/${m.id}", ${ipcParamsOf(m)}, (x) => x)';
  }
  var res = Type(m.result!);
  String callFn, type, alt;
  if (res.isList) {
    callFn = "this.client._callEach";
    type = res.unpackList().name();
    alt = "[]";
  } else {
    callFn = "this.client._call";
    type = res.name();
    alt = "$type.of({ amount: 0 })";
  }
  var call = '$callFn("result/${m.id}", ${ipcParamsOf(m)}, $type.fromDict)';
  return "    const resp = await $call;\n    return resp.orElse($alt);\n";
}

String restBodyOf(Method m) {
  String path;
  if (m.params.isEmpty) {
    path = 'this.path("${m.id}")';
  } else {
    path = 'this.path(["${m.id}"';
    for (var param in m.params) {
      path += ', ${Type(param).restPathId()}';
    }
    path += "])";
  }

  if (m.result == null) {
    return '    await this.call(${path}, (x) => x)';
  }
  var res = Type(m.result!);
  String callFn, type, alt;
  if (res.isList) {
    callFn = "this.client._callEach";
    type = res.unpackList().name();
    alt = "[]";
  } else {
    callFn = "this.client._call";
    type = res.name();
    alt = "$type.of({ amount: 0 })";
  }
  var call = '$callFn($path, $type.fromDict)';
  return "    const resp = await $call;\n    return resp.orElse($alt);\n";
}

String ipcParamsOf(Method m) {
  var params = '{ "@id": this.id';
  for (var param in m.params) {
    var type = Type(param);
    params += ', "${type.variable()}": ${type.variable()}.toDict()';
  }
  params += ' }';
  return params;
}

main() {
  var spec = Spec.readFrom(File("ipc/spec/results.json"));
  writeRestStubs(spec);
}
