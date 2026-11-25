# Calculate results

This method schedules a new calculation for a given setup. It directly returns
a state object that contains the result ID (field `@id`). With this ID
the result state can be queried.

| Method      | Parameters | Returns |
| ----------- | ---------- | ------- |
| `calculate` | [`CalculationSetup`](https://greendelta.github.io/olca-schema/classes/CalculationSetup.html) | [`ResultState`](https://greendelta.github.io/olca-schema/classes/ResultState.html) |

This is a method of the client and not of a result: via REST, it is
`POST result/calculate` with the calculation setup as request body; in Python,
it is `Client.calculate`.

## Examples

### Python IPC

```py
{{#include results_ipc.py:calculate}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/). It uses the [`call`
helper](../../intro.md#running-the-javascript-examples) for the JSON-RPC calls.

```js,run
{{#include calculate.js}}
```
