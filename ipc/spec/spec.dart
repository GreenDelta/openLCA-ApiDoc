import 'dart:collection';
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
  SchemaType? result;
  final List<SchemaType> params = [];

  Method(this.id, [List<SchemaType>? params]) {
    if (params != null) {
      this.params.addAll(params);
    }
  }

  String snakeCaseName() {
    if (id == "total-impacts/normalized") {
      return "get_normalized_impacts";
    }
    if (id == "total-impacts/weighted") {
      return "get_weighted_impacts";
    }
    return "get_${id.replaceAll("-", "_")}";
  }

  String camelCaseName() {
    if (id == "total-impacts/normalized") {
      return "getNormalizedImpacts";
    }
    if (id == "total-impacts/weighted") {
      return "getWeightedImpacts";
    }
    var ccm = "get";
    var parts = id.split("-");
    for (var part in parts) {
      ccm += part[0].toUpperCase() + part.substring(1);
    }
    return ccm;
  }

  Map<String, Object> toDict() {
    var map = <String, Object>{
      "method": id,
      "params": params.map((e) => e.signature).toList(),
    };
    if (result != null) {
      map["result"] = result!.signature;
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
      method.result = SchemaType(result);
    }
    var params = dict["params"];
    if (params is List) {
      for (var param in params) {
        if (param is String) {
          method.params.add(SchemaType(param));
        }
      }
    }
    return method;
  }
}

class SchemaType {
  final String signature;

  SchemaType(this.signature);

  bool get isList => signature.startsWith("List[");

  bool get isRef => signature.startsWith("Ref[");

  SchemaType unpackList() {
    if (!isList) {
      return this;
    }
    var next = signature.substring(5, signature.length - 1);
    return SchemaType(next);
  }

  SchemaType unpackRef() {
    if (!isRef) {
      return this;
    }
    var next = signature.substring(4, signature.length - 1);
    return SchemaType(next);
  }

  String snakeCaseVariable() {
    if (isList) {
      return unpackList().snakeCaseVariable() + "s";
    }
    if (isRef) {
      return unpackRef().snakeCaseVariable();
    }
    var variable = "";
    for (var i = 0; i < signature.length; i++) {
      var char = signature[i];
      if (char.toUpperCase() == char) {
        if (variable.length > 0) {
          variable += "_";
        }
        variable += char.toLowerCase();
        continue;
      }
      variable += char;
    }
    return variable;
  }

  String camelCaseVariable() {
    if (isList) {
      return unpackList().camelCaseVariable() + "s";
    }
    if (isRef) {
      return unpackRef().camelCaseVariable();
    }
    return signature[0].toLowerCase() + signature.substring(1);
  }

  String url() {
    if (isList) {
      return unpackList().url();
    }
    var endpoint = "http://greendelta.github.io/olca-schema/classes";
    return isRef ? "$endpoint/Ref.html" : "$endpoint/${signature}.html";
  }
}
