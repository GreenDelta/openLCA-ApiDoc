# Get a full data set by name

This method returns a full data set for the given type and name. Note that the
name does not have to be unique in an openLCA database, and in this case, it
will just return the first entity from the database with the given name.

|              |                                                                                      |
| ------------ | ------------------------------------------------------------------------------------ |
| Rest API     | `GET /data/{type}/name/{name}`                                                       |
| JSON-RPC     | `data/get`                                                                           |
| Python/IPC   | `Client.get`                                                                         |
| Return type: | [`E > RootEntity`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |


## Examples

### Python IPC

```py
{{#include get_by_name.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include get_by_name.ts:2:24}}
```
