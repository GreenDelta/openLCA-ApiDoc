# Get the descriptor of a data set

Returns the descriptor of the data set with the given type and ID.

|              |                                                                    |
| ------------ | ------------------------------------------------------------------ |
| Rest API     | `GET /data/{type}/{id}/info`                                       |
| JSON-RPC     | `data/get/descriptor`                                              |
| Python/IPC   | `Client.get_descriptor`                                            |
| Return type: | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Examples

### Python IPC

```py
{{#include get_descriptor.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include get_descriptor.ts:2:26}}
```
