# Inventory result

This method returns the inventory result \\(g\\) of the calculated product system.
This is the amount \\(g_i\\) of each intervention flow \\(i\\) that crosses the
boundary to the environment related to the final demand of product system. It can
be calculated by multiplying the intervention matrix \\(B\\) with the scaling vector
\\(s\\):

$$
g = B * s
$$

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-flows`                                |
| IPC         | `result/total-flows`                                                |
| Python IPC  | `Result.get_total_flows`                                            |
| Return type | [`List[EnviFlowValue]`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |

It is also possible to get the inventory result \\(g_i\\) of a single flow \\(i\\):

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-flow-value-of/{envi-flow}`                       |
| IPC         | `result/total-flow-value-of`                                                   |
| Python IPC  | `Result.get_total_flow_value_of`                                               |
| Return type | [`EnviFlowValue`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |
| Parameter type | [`EnviFlow`](http://greendelta.github.io/olca-schema/classes/EnviFlow.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include inventory-result.ts:2:22}}
```

