import 'dart:io';
import 'spec.dart';

writeTables(Spec spec) {
  for (var section in spec.sections) {
    for (var method in section.methods) {
      print("\n--- ${method.id} ---");
    }
  }
}

main() {
  var spec = Spec.readFrom(File("ipc/spec/results.json"));
  writeTables(spec);
}
