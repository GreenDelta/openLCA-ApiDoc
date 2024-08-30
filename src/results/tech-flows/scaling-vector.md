# Scaling factors

The scaling vector \\(s\\) contains for each process \\(j\\) a factor \\(s_j\\)
by which the process needs to be scaled to fulfill the demand of the product
system. Mathematically, it can be calculating by solving the following equation by \\(s\\)
where \\(A\\) is the technology matrix and \\(f\\) the final demand vector of
the system:

$$
A * s = f
$$

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/scaling-factors`                            |
| IPC         | `result/scaling-factors`                                            |
| Python IPC  | `Result.get_scaling_factors`                                        |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include scaling-vector.ts:2:23}}
```
