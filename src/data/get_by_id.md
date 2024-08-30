# Get a full data set by ID

This method returns the full data set of a given type and ID.

|             |                                                                                      |
| ----------- | ------------------------------------------------------------------------------------ |
| Rest API    | `GET /data/{type}/{id}`                                                              |
| JSON-RPC    | `data/get`                                                                           |
| Python/IPC  | `Client.get`                                                                         |
| Return type | [`E > RootEntity`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |


## Examples

### Python IPC

```py
{{#include get_by_id.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include get_by_id.ts:2:22}}
```

### Curl

```bash
{{#include get_by_id.sh}}
```
