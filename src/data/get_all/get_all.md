# Get all data sets of a given type

Returns all data sets of a given type from a database. This is not a practical
method for all types of data sets and may is not available in a specific
context. For example, it is fine to get all unit groups but a server would
go down when you query for all processes in a large database. Typically, you
just want to query all descriptors of a data set type.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/all` | `GET data/{type}/all` | `@type` | [`List[E > RootEntity]`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_all.js}}

## Python IPC

```py
{{#include get_all.py}}
```
