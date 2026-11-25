# Get a single descriptor

Returns the descriptor (`Ref`) of a root entity for a given type and ID (or name).

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/descriptor` | `GET data/{type}/{id}/info` | `@type`, `@id` | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |
| `data/get/descriptor` | – | `@type`, `name` | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Examples

### Python IPC

```py
{{#include get_descriptor.py}}
```
