# Get descriptors

This function is useful for exploring the content of a database. It returns a
list of data set descriptors for a given data set type. A descriptor contains
just a few information, like the name or category path, to understand the
content of a data set. Descriptors are valid [data set
references](https://greendelta.github.io/olca-schema/classes/Ref.html); they can
be used to reference a data set in a given context (e.g. referencing a process
as calculation target in a calculation setup).

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/descriptors` | `GET data/{type}` | `@type` | [`List[Ref]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_descriptors.js}}
```

## Python IPC

```py
{{#include get_descriptors.py}}
```
