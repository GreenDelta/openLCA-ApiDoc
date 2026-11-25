# Get state

This method returns the result state of a calculation. When a calculation is started, it is
scheduled in a calculation queue first. The calculation directly returns a result state with
a unique ID (field `@id`) of the result. Only when the state of a result is `ready`, calculation
results can be retrieved.


| Method  | Parameters | Returns |
| ------- | ---------- | ------- |
| `state` |            | [`ResultState`](https://greendelta.github.io/olca-schema/classes/ResultState.html) |

In Python, the method is `Result.get_state`. There is also the method
`Result.wait_until_ready` which polls the state until the result is ready.

## Examples

### Python IPC

```py
{{#include ../calculate/results_ipc.py:get_state}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```js,run
{{#include get_state.js:body}}
```
