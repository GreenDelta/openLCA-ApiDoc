import 'dart:io';
import 'spec.dart';

writeTables(Spec spec) {
  for (var section in spec.sections) {
    for (var method in section.methods) {
      print("\n--- ${method.id} ---\n");
      print("|             |                             |");
      print("| ----------- | --------------------------- |");
      print("| Rest API    | `GET ${restPathOf(method)}` |");
      print("| JSON-RPC    | `result/${method.id}` |");
      print("| Snake case  | `result.${method.snakeCaseName()}` |");
      print("| Camel case  | `result.${method.camelCaseName()}` |");
      print("| Return type | ${typeLinkOf(method.result)} |");
      for (int i = 0; i < method.params.length; i++) {
        var param = method.params[i];
        print("| Parameter ${i + 1} | ${typeLinkOf(param)} |");
      }
    }
  }
}

String restPathOf(Method method) {
  var path = "result/{result-id}/${method.id}";
  for (var p in method.params) {
    var variable = p.snakeCaseVariable().replaceAll("_", "-");
    path += "/{${variable}}";
  }
  return path;
}

String baseTypeOf(SchemaType type) {
  if (type.isRef) {
    return "Ref";
  }
  if (type.isList) {
    return baseTypeOf(type.unpackList());
  }
  return type.signature;
}

String typeLinkOf(SchemaType? type) {
  if (type == null) {
    return "`void`";
  }
  var url = "http://greendelta.github.io/olca-schema/classes";
  var s = "[`${type.signature}`]($url/${baseTypeOf(type)}.html)";
  return s;
}

main() {
  var spec = Spec.readFrom(File("ipc/spec/results.json"));
  writeTables(spec);
}
