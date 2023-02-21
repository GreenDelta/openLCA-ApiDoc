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
}

writeProtocol(Spec spec) {
  print("// protocol\n");
  for (var section in spec.sections) {
    print("  // #region: ${section.id}\n");
    for (var m in section.methods) {
      var sig = "  ${m.camelCaseName()}(";
      for (int i = 0; i < m.params.length; i++) {
        var type = Type(m.params[i]);
        if (i > 0) {
          sig += ",";
        }
        sig += "${type.variable()}: ${type.name()}";
      }
      var result = m.result != null ? Type(m.result!).name() : "void";
      sig += "): Promise<${result}>;";
      print(sig + "\n");
    }
    print("  // #endregion\n");
  }
}

main() {
  var spec = Spec.readFrom(File("results.json"));
  writeProtocol(spec);
}
