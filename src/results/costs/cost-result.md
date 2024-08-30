# Life cycle costing result

This method retursn the total life cycle costing (LCC) result.

$$
q^T * s
$$

|             |                                                                               |
| ----------- | ----------------------------------------------------------------------------- |
| Rest API    | `GET result/{result-id}/total-costs`                                          |
| JSON-RPC    | `result/total-costs`                                                          |
| Snake case  | `result.get_total_costs`                                                      |
| Camel case  | `result.getTotalCosts`                                                        |
| Return type | [`CostValue`](http://greendelta.github.io/olca-schema/classes/CostValue.html) |


## Examples

### TypeScript IPC

```ts
{{#include _costs.ts:total-costs}}
```
