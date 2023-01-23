# Direct process results

This method returns the direct intervention flows related to the production
of a product (or treatment of a waste) of a process \\(j\\) in order to
fulfill the demand of the product system. Mathematically, it is the column
\\(j\\) of the scaled intervention matrix \\(G\\):

$$
G = B * diag(s)
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/direct-flows-of/{tech-flow}`                           |
| IPC         | `result/direct-flows-of`                                                       |
| Python IPC  | `Result.get_direct_flows_of`                                                   |
| Return type | [`List[EnviFlowValue]`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |


It is also possible to get the direct result of a single flow \\(i\\):

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/direct-flow-of/{envi-flow}/{tech-flow}`                |
| IPC         | `result/direct-flow-of`                                                        |
| Python IPC  | `Result.get_direct_flow_of`                                                    |
| Return type | [`EnviFlowValue`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |
| Parameter type | [`EnviFlow`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include direct-results.ts:2:31}}
```




