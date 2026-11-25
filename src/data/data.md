# Working with data

All API methods exchange data using the [openLCA
Schema](http://greendelta.github.io/olca-schema/) (parameter and return types
throughout this documentation link directly to its reference). Two core [schema
concepts](http://greendelta.github.io/olca-schema/#format-concepts) shape how
you work with data in the API:

* **Root vs. nested entities**: Stand-alone data sets such as processes or flows are
  [root
  entities](https://greendelta.github.io/olca-schema/classes/RootEntity.html).
  Other objects, such as a process's [inputs and
  outputs](http://greendelta.github.io/olca-schema/classes/Exchange.html), only
  exist inside a root entity.

* **Lightweight references**
  ([Ref](http://greendelta.github.io/olca-schema/classes/Ref.html)): Root
  entities are never embedded inside each other. Instead, they link via a `Ref`
  object that carries only the target's `@type`, `@id`, and optional metadata
  (such as `name`). For example, an Exchange holds a `Ref` to its `Flow` rather
  than the full flow data set. `Ref` objects are also returned as lightweight
  descriptors, for instance in search results, when loading the full data set is
  unnecessary.

Most CRUD methods work identically across all root entity types and take the
target entity's type, ID, or name as parameters. In JSON-RPC, these are passed
as fields in a parameter object; in REST, they are part of the URL path (see the
[REST API reference](../appendix/rest-api.md) for the path segments of all
types)

| Parameter | JSON-RPC                                                        | REST path segment                  |
| --------- | --------------------------------------------------------------- | ---------------------------------- |
| type      | `"@type"`: root entity type, e.g. `"Process"`   | `{type}`, e.g. `processes`         |
| ID        | `"@id"`: ID of the data set                                 | `{id}`                             |
| name      | `name`: name of the data set                                | `{name}` (URL-encoded)              |
