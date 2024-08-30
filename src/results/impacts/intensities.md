# Intensities

This method returns the total impacts related to one unit of product output or waste
input of a technosphere flow \\(j\\) in the supply chain. This includes direct, upstream,
and downstream contributions related to one unit of this flow. Mathematically, it is the
column \\(N[:, j]\\) of the impact intensity matrix \\(N\\):

$$
N = C * B * A^{-1} = C * M
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-impacts-of-one/{tech-flow}`                      |
| IPC         | `result/total-impacts-of-one`                                                  |
| Python IPC  | `Result.get_total_impacts_of_one`                                              |
| Return type | [`List[ImpactValue]`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |

It is also possible to get the intensity \\(N[k, j]\\) of a single impact category \\(k\\):

|            |                                                                                       |
|------------|---------------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/total-impact-of-one/{impact-category}/{tech-flow}`           |
| IPC         | `result/total-impact-of-one`                                                         |
| Python IPC  | `Result.get_total_impact_of_one`                                                     |
| Return type | [`ImpactValue`](http://greendelta.github.io/olca-schema/classes/ImpactValue.html)                  |
| Parameter type | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html)       |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include intensities.ts:body}}
```
