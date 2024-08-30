# Unscaled requirements

The unscaled requirements of a process \\(j\\) are the direct requirements of
the process related to the quantitative reference of that process without
applying a scaling factor. Mathematically, it is just the column \\(j\\) of
the technosphere matrix \\(A\\):

$$
A[:, j]
$$

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/unscaled-requirements-of/{tech-flow}`                  |
| IPC         | `result/unscaled-requirements-of`                                              |
| Python IPC  | `Result.get_unscaled_requirements_of`                                          |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |


## Examples

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/).

```ts
{{#include unscaled-requirements.ts:2:29}}
```
