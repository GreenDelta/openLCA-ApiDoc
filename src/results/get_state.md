# Get state

This method returns the result state of a calculation. When a calculation is started, it is
scheduled in a calculation queue first. The calculation directly returns a result state with
a unique ID (field `@id`) of the result. Only when the state of a result is `ready`, calculation
results can be retrieved.


| API         | Method                                                                          |
|-------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/state`                                                  |
| IPC         | `result/state`                                                                  |
| Python IPC  | `Result.get_state`                                                              |
| Return type | [`ResultState`](http://greendelta.github.io/olca-schema/classes/ResultState.html) |

## Examples

### Python IPC

```py
{{#include results_ipc.py:get_state}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include get_state.ts:body}}
```
