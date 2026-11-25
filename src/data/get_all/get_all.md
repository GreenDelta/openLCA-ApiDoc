# Get all data sets of a given type

Returns every complete entity of a given root type from the database. Depending
on the protocol or server configuration, this method may be disabled and it is
only practical for small collections (such as unit groups). Querying all
processes or flows in a large database can overload the server; in most cases,
you should [fetch descriptors](../get_descriptors/get_descriptors.md) instead.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/all` | `GET data/{type}/all` | `@type` | [`List[E > RootEntity]`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_all.js}}
```

## Python IPC

```py
{{#include get_all.py}}
```
