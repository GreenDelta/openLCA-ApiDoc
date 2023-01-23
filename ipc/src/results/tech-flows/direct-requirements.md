# Direct requirements

The direct requirements of a process \\(j\\) are the scaled inputs and outputs
of the linked product and waste flows of that process related to the final
demand of the product system. Mathematically, it is the scaled column \\(j\\) of
the technology matrix \\(A\\):

$$
s_j * A[:,j]
$$

The returned values are negative for inputs and positive for outputs of the
respective flows. Also, the returned values contain the total requirements of
the technosphere flow \\(j\\) to which the other requirements are related. 

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/direct-requirements-of/{tech-flow}`                    |
| IPC         | `result/direct-requirements-of`                                                |
| Python IPC  | `Result.get_direct_requirements_of`                                            |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include direct-requirements.ts:2:33}}
```
