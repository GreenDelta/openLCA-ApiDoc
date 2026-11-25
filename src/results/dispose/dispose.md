# Dispose result

This method should be always called when a result is not needed anymore.
It disposes the result and releases allocated resources of that result.

| Method    | Parameters | Returns |
| --------- | ---------- | ------- |
| `dispose` |            | [`ResultState`](https://greendelta.github.io/olca-schema/classes/ResultState.html) |

Via REST, it is a `POST` request: `POST result/{result-id}/dispose`.


## Examples

### Python IPC

```py
# it is important to dispose a result when it is not needed anymore
result.dispose()
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```js,run
{{#include dispose.js:2:21}}
```
