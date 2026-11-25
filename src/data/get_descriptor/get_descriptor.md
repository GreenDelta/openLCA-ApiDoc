# Get the descriptor of a data set

Returns the descriptor of the data set with the given type and ID. Via
JSON-RPC, it is also possible to get the descriptor of a data set by name.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get/descriptor` | `GET data/{type}/{id}/info` | `@type`, `@id` | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |
| `data/get/descriptor` | – | `@type`, `name` | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Examples

### Python IPC

```py
{{#include get_descriptor.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/). It uses the [`call`
helper](../../intro.md#running-the-javascript-examples) for the JSON-RPC calls.

```js,run
{{#include get_descriptor.js}}
```
