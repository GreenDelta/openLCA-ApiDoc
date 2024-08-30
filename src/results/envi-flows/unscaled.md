# Unscaled flows

This method returns the unscaled direct interventions related to the quantitative
reference of a process \\(j\\). Mathematically, this is just the column
\\(j\\) of the intervention matrix \\(B\\)):

$$
B[:, j]
$$


|                |                                                                                             |
|----------------|---------------------------------------------------------------------------------------------|
| REST           | `GET result/{result-id}/unscaled-flows-of/{tech-flow}`                                      |
| IPC            | `result/unscaled-flows-of`                                                                  |
| Python IPC     | `Result.get_unscaled_flows_of`                                                              |
| Return type    | [`List[EnviFlowValue]`](http://greendelta.github.io/olca-schema/classes/EnviFlowValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html)                 |
