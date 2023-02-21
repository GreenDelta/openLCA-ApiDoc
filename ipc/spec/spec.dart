import 'dart:io';
import 'dart:convert';

class Spec {
  final List<Section> sections = [];

  Spec.readFrom(File file) {
    var text = file.readAsStringSync();
    var dicts = json.decode(text);
    if (dicts is List) {
      for (var dict in dicts) {
        if (dict is! Map<String, dynamic>) {
          continue;
        }
        var section = Section.fromDict(dict);
        if (section != null) {
          sections.add(section);
        }
      }
    }
  }

  void writeTo(File file) {
    var dicts = sections.map((e) => e.toDict()).toList();
    var str = json.encode(dicts);
    file.writeAsStringSync(str);
  }
}

class Section {
  final String id;
  final List<Method> methods = [];

  Section(this.id);

  Map<String, Object> toDict() {
    var map = <String, Object>{
      "section": id,
      "methods": methods.map((e) => e.toDict()).toList(),
    };
    return map;
  }

  static Section? fromDict(Map<String, dynamic> dict) {
    var id = dict["section"];
    if (id is! String) {
      return null;
    }
    var section = Section(id);
    var dicts = dict["methods"];
    if (dicts is List) {
      for (var dict in dicts) {
        if (dict is! Map<String, dynamic>) {
          continue;
        }
        var method = Method.fromDict(dict);
        if (method != null) {
          section.methods.add(method);
        }
      }
    }
    return section;
  }
}

class Method {
  final String id;
  String? result;
  final List<String> params = [];

  Method(this.id, [List<String>? params]) {
    if (params != null) {
      this.params.addAll(params);
    }
  }

  Map<String, Object> toDict() {
    var map = <String, Object>{
      "method": id,
      "params": params,
    };
    if (result != null) {
      map["result"] = result!;
    }
    return map;
  }

  static Method? fromDict(Map<String, dynamic> dict) {
    var id = dict["method"];
    if (id is! String) {
      return null;
    }
    var method = Method(id);
    var result = dict["result"];
    if (result is String) {
      method.result = result;
    }
    var params = dict["params"];
    if (params is List<String>) {
      method.params.addAll(params);
    }
    return method;
  }
}

main() {
  var spec = Spec.readFrom(File("results.json"));
  for (var section in spec.sections) {
    print("# ${section.id}");
    for (var method in section.methods) {
      print("* ${method.id}");
    }
    print("");
  }
}
