# Get a full data set by name

Returns the complete entity for a given root type and name. Because names in an
openLCA database are not required to be unique, this method simply returns the
first matching data set it finds.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get` | `GET data/{type}/name/{name}` | `@type`, `name` | [`E > RootEntity`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_by_name.js}}
```

## Python IPC

```py
{{#include get_by_name.py}}
```
