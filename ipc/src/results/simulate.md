# Monte Carlo Simulations

Running a Monte Carlo Simulation is similar to a normal calculation. You first
call the `simulate` method with a calculation setup. This schedules a first
simulation run. When the calculation is ready, the result can be queried like
any other result. For each subsequent iteration you call the `next` method on
that result which schedules a new iteration, that again returns a result that
can be queried, and so on. Old iteration results are disposed automatically when
a new iteration is started but you should dispose the last result when it is not
needed anymore.

The API method for the first iteration is:

|                |                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- |
| REST           | `POST result/simulate`                                                                    |
| IPC            | `result/simulate`                                                                         |
| Python IPC     | `Client.simulate`                                                                         |
| Return type    | [`ResultState`](http://greendelta.github.io/olca-schema/classes/ResultState.html)         |
| Parameter type | [CalculationSetup](http://greendelta.github.io/olca-schema/classes/CalculationSetup.html) |

For each subsequent calculation, the API method is:

|                |                                                                                   |
| -------------- | --------------------------------------------------------------------------------- |
| REST           | `POST result/{result-id}/simulate/next`                                           |
| IPC            | `result/simulate/next`                                                            |
| Python IPC     | `Result.simulate_next`                                                            |
| Return type    | [`ResultState`](http://greendelta.github.io/olca-schema/classes/ResultState.html) |
| Parameter type | result id                                                                         |

## Examples

### Python IPC

```py
{{#include simulate.py}}
```
