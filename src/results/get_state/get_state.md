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

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include get_state.js}}
```

## Python IPC

```py
{{#include ../calculate/results_ipc.py:get_state}}
```
