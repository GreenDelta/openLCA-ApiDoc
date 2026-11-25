# Get descriptors

Returns a list of lightweight descriptors (`Ref`) for all data sets of a given
type. This is useful for browsing the contents of a database without loading
full objects. Each descriptor includes only basic metadata (such as `@id`,
`name`, and `category`) and can be passed directly as a reference in other API
calls, such as specifying a target process in a calculation setup.

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
