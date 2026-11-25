# Get a full data set by ID

This method returns the full data set of a given type and ID.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/get` | `GET data/{type}/{id}` | `@type`, `@id` | [`E > RootEntity`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) |

## Examples

### Python IPC

```py
{{#include get_by_id.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/). It uses the [`call`
helper](../../intro.md#running-the-javascript-examples) for the JSON-RPC calls.

```js,run
{{#include get_by_id.js}}
```

### Curl

```bash
{{#include get_by_id.sh}}
```
