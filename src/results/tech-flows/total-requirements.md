# Total requirements

This method returns the total requirements of technosphere flows that are needed
to fulfill the demand of the calculated product system. Mathematically, this is
the diagonal of the technosphere matrix \\(A\\) scaled by the scaling \\(s\\):

$$
t = diag(s) * diag(A)
$$

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-requirements`                         |
| IPC         | `result/total-requirements`                                         |
| Python IPC  | `Result.get_total_requirements`                                     |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |


It is also possible to get just the total requirements value of a single
technosphere flow \\(j\\):

$$
t_j = s_j * A[j, j]
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-requirements-of/{tech-flow}`                     |
| IPC         | `result/total-requirements-of`                                                 |
| Python IPC  | `Result.get_total_requirements_of`                                             |
| Return type | [`TechFlowValue`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |

## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include total-requirements.ts:2:24}}
```

