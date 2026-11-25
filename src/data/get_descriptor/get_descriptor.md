# Get the descriptor of a data set

Returns a list of lightweight descriptors (`Ref`) for all data sets of a given
type—useful for browsing the contents of a database without loading full
objects. Each descriptor includes only basic metadata (such as `@id`, `name`,
and `category`) and can be passed directly as a reference in other API calls,
such as specifying a target process in a calculation setup.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/descriptor` | `GET data/{type}/{id}/info` | `@type`, `@id` | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |
| `data/get/descriptor` | – | `@type`, `name` | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Examples

### Python IPC

```py
{{#include get_descriptor.py}}
```

