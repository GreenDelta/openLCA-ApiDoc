# Delete a data set

Deletes the specified root entity from the database. This method is unavailable
when the server runs in read-only mode.

**Warning**: This method does not check whether the entity is still referenced
elsewhere. Deleting a data set that is in use can corrupt the database. Always
check its [usages](../get_usage/get_usage.md) first.

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
