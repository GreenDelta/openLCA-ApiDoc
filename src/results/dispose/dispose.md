# Dispose result

This method should be always called when a result is not needed anymore.
It disposes the result and releases allocated resources of that result.

| Method    | Parameters | Returns |
| --------- | ---------- | ------- |
| `dispose` |            | [`ResultState`](https://greendelta.github.io/olca-schema/classes/ResultState.html) |

Via REST, it is a `POST` request: `POST result/{result-id}/dispose`.

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include dispose.js}}
```

## Python IPC

```py
# it is important to dispose a result when it is not needed anymore
result.dispose()
```
