# Insert or update a data set

Inserts or updates a provided data set in the database. This method is not
available when a server runs in read-only mode.

|              |                          |
|--------------|--------------------------|
| Rest API     | `PUT /data/{type}`       |
| JSON-RPC     | `data/put`     |
| Python/IPC   | `client.put`             |
| Request body | [`E > RootEntity`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |
| Return type: | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |


## Examples

### Python IPC

```py
{{#include put.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include put.ts:2:26}}
```
