# Insert or update a data set

Inserts or updates a provided data set in the database. This method is not
available when a server runs in read-only mode.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/put` | `PUT data/{type}` | the data set, [`E > RootEntity`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include put.js}}
```

## Python IPC

```py
{{#include put.py}}
```
