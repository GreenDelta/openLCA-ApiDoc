# Get the usage of a data set

Returns references to the data sets that use a specified data set. For
example, for a flow, these are the processes that have the flow as an input or
output, the impact categories with characterization factors for that flow, etc.
For a process, these are the product systems that contain the process, and so
on. If the data set is not used anywhere, an empty list is returned. This is
the same search that openLCA runs before a data set is deleted.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/usage` | – | `@type`, `@id` | [`List[Ref]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_usage.js}}
```

## Python IPC

```py
{{#include get_usage.py}}
```
