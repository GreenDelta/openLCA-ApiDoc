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

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include calculate.js}}
```

## Python IPC

```py
{{#include results_ipc.py:calculate}}
```
