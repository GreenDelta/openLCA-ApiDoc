# Get a full data set by name

This method returns a full data set for the given type and name. Note that the
name does not have to be unique in an openLCA database, and in this case, it
will just return the first entity from the database with the given name.

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
