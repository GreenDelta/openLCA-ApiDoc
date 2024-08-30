# Calculate results

This method schedules a new calculation for a given setup. It directly returns
a state object that contains the result ID (field `@id`). With this ID the
the result state can be queried.

|                |                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- |
| REST           | `POST result/calculate`                                                                   |
| IPC            | `result/calculate`                                                                        |
| Python IPC     | `Client.calculate`                                                                        |
| Return type    | [`ResultState`](http://greendelta.github.io/olca-schema/classes/ResultState.html)         |
| Parameter type | [CalculationSetup](http://greendelta.github.io/olca-schema/classes/CalculationSetup.html) |

## Examples

### Python IPC

```py
{{#include results_ipc.py:calculate}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include calculate.ts:body}}
```
