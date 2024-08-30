# Totality factors

The concept of totality factors is a bit complicated, but they are very
useful for visualizations like Sankey diagrams. In short, they scale an
intensity result to a total result. An intensity result is related to one
unit of product output (waste input) of a technosphere flow \\(j\\)
including the direct, upstream, and downstream contributions. Multiplying
such an intensity with the totality factor \\(tf_j\\) gives the total result related
to the total requirements of product (waste) \\(j\\). Directly multiplying
the intensity with the total requirements would double count possible loops.

Mathematically, the totality factor of a technosphere flow \\(j\\) is calculated
by multiplying the total requirements \\(t_j\\) of that flow by a loop factor
\\(\lambda_j\\): 

$$
tf_j = \lambda_j * t_j
$$

Where the loop factor is calculated via:

$$
\lambda_j = \frac{1}{A[j, j] * A^{-1}[j, j]}
$$

|            |                                                                      |
|------------|----------------------------------------------------------------------|
| REST        | `GET result/{result-id}/totality-factors`                           |
| IPC         | `result/totality-factors`                                           |
| Python IPC  | `Result.get_totality_factors`                                       |
| Return type | [`List[TechFlowValue]`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |

As the calculation of a totality factor \\(tf_j\\) requires to solve the complete
system for one unit of techosphere flow \\(j\\), it is almost always a better idea
to only query the API for totality factors that are really needed:

|            |                                                                                 |
|------------|---------------------------------------------------------------------------------|
| REST        | `GET result/{result-id}/totality-factor-of/{tech-flow}`                        |
| IPC         | `result/totality-factor-of`                                                    |
| Python IPC  | `Result.get_totality_factor_of`                                                |
| Return type | [`TechFlowValue`](http://greendelta.github.io/olca-schema/classes/TechFlowValue.html) |
| Parameter type | [`TechFlow`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |

