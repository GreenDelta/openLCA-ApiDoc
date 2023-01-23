# Get all data sets of a given type

Returns all data sets of a given type from a database. This is not a practical
method for all types of data sets and may is not available in a specific
context. For example, it is fine to get all unit groups but a server would
go down when you query for all processes in a large database. Typically, you
just want to query all descriptors of a data set type.

|              |                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------ |
| Rest API     | `GET /data/{type}/all`                                                                     |
| JSON-RPC     | `data/get/all`                                                                             |
| Python IPC   | `Client.get_all`                                                                           |
| Return type: | [`List[E > RootEntity]`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |


## Examples

### Python IPC

```py
{{#include get_all.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include get_all.ts:2:24}}
