# Monte Carlo Simulations

Running a Monte Carlo Simulation is similar to a normal calculation. You first
call the `simulate` method with a calculation setup. This schedules a first
simulation run. When the calculation is ready, the result can be queried like
any other result. For each subsequent iteration you call the `next` method on
that result which schedules a new iteration, that again returns a result that
can be queried, and so on. Old iteration results are disposed automatically when
a new iteration is started but you should dispose the last result when it is not
needed anymore.

| Method          | Parameters | Returns |
| --------------- | ---------- | ------- |
| `simulate`      | [`CalculationSetup`](https://greendelta.github.io/olca-schema/classes/CalculationSetup.html) | [`ResultState`](https://greendelta.github.io/olca-schema/classes/ResultState.html) |
| `simulate/next` |            | [`ResultState`](https://greendelta.github.io/olca-schema/classes/ResultState.html) |

Like `calculate`, `simulate` is a method of the client: via REST, it is
`POST result/simulate` with the calculation setup as request body; in Python, it
is `Client.simulate`. `simulate/next` is called on the result:
`POST result/{result-id}/simulate/next` via REST and `Result.simulate_next`
in Python.

## Examples

### Python IPC

```py
{{#include simulate.py}}
```
