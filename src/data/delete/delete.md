# Delete a data set

Deletes the specified data set from the database. This method is not available
when the server runs in read-only mode.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/delete` | `DELETE data/{type}/{id}` | `@type`, `@id` | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include delete.js}}
```

## Python IPC

```py
{{#include delete.py}}
```
