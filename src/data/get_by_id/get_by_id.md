# Get a full data set by ID

This method returns the full data set of a given type and ID.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get` | `GET data/{type}/{id}` | `@type`, `@id` | [`E > RootEntity`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_by_id.js}}
```

## Python IPC

```py
{{#include get_by_id.py}}
```

## Curl

```bash
{{#include get_by_id.sh}}
```
