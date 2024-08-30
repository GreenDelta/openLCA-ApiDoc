# Direct contributions

This method returns the direct contribution of each process \\(j\\) in
the system to the impact assessment result of an impact category \\(k\\).
Mathematically, this is the row \\(H[k, :]\\) of the direct impact matrix
which can be calculated in the following way:

$$
H = C * B * diag(s)
$$

|            |                                                                                       |
|------------|---------------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/direct-impact-values-of/{impact-category}`                   |
| IPC         | `result/direct-impact-values-of`                                                     |
| Python IPC  | `Result.get_direct_impact_values_of`                                                 |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |
| Parameter type | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |

## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include direct-contributions.ts:body}}
```
