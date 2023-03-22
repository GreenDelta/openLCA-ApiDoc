# Direct contributions

This method returns the direct contribution of each process in the system to the
total cost result.

$$
q^T * diagm(s)
$$

|             |                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------- |
| Rest API    | `GET result/{result-id}/cost-contributions`                                                 |
| JSON-RPC    | `result/cost-contributions`                                                                 |
| Snake case  | `result.get_cost_contributions`                                                             |
| Camel case  | `result.getCostContributions`                                                               |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |


## Examples

### TypeScript IPC

```ts
{{#include _costs.ts:contributions}}
```
