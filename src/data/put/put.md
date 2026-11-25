# Insert or update a data set

Inserts or updates a provided data set in the database. This method is not
available when a server runs in read-only mode.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/put` | `PUT data/{type}` | the data set, [`E > RootEntity`](https://greendelta.github.io/olca-schema/classes/RootEntity.html) | [`Ref`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

## Examples

### Python IPC

```py
{{#include put.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/). It uses the [`call`
helper](../../intro.md#running-the-javascript-examples) for the JSON-RPC calls.

```js,run
{{#include put.js}}
```
