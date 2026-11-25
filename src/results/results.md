# Calculation and results

When starting a calculation, it is first scheduled in a calculation queue. This
is because multiple calculations could be started at the same time and
calculations may need to wait for other calculations first to be finished. Thus,
a calculation directly returns a
[ResultState](https://greendelta.github.io/olca-schema/classes/ResultState.html)
object with a unique identifier. With this identifier, the state of the
calculation can be retrieved from the server. It is then also the ID of the
corresponding result when the calculation is finished. When a result is not
needed anymore, the `dispose` method should be called so that the allocated
resources of the result can be released.

The idea of the result interface is not to provide some ready-to-use charts and
tables but to provide all possible building blocks with which such higher level
result views can be created (charts, tables, upstream trees, Sankey diagrams).
Thus, the result interface has many methods that often look quite similar but
they have their purpose for efficiently creating higher level result views.

## Result elements

Depending on the calculation setup and the calculated model, results can be
retrieved for different [elements](elements/elements.md), these are:

* Technosphere flows, `tech-flows`: the product and waste flows of the product
  system with their corresponding providers.
* Intervention flows, `envi-flows`: typically elementary flows but also
  unconnected product or waste inputs or outputs of the processes in the system.
  These flows cross the boundary to the environment of the system and form the
  inventory result of the system. In case of a regionalized calculation, an
  intervention flow is a pair of flow and location.
* Impact categories, `impact-categories`: the impact categories of the impact
  assessment method selected in the calculation setup.
* Costs: life cycle costs, if the calculation setup includes costs.

Technosphere flows are always present. All other result elements are only
available if the calculated model provides these elements and/or if the
corresponding options are set in the calculation setup.

## Result types

The following chapters are organized by result type. Each chapter describes the
methods of a result type for the different result elements. The table below
gives an overview of which result types are available for which elements:

| Result type                                         | Technosphere flows                          | Intervention flows                                   | Impact categories                                    | Costs                                    |
| --------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------- |
| [Result elements](elements/elements.md)             | [✓](elements/elements.md#technosphere-flows) | [✓](elements/elements.md#intervention-flows)          | [✓](elements/elements.md#impact-categories)           |                                          |
| [Total results](total-results/total-results.md)     |                                             | [✓](total-results/total-results.md#inventory-result) | [✓](total-results/total-results.md#impact-assessment-result) | [✓](total-results/total-results.md#costs) |
| [Technosphere requirements](requirements/requirements.md) | ✓                                     |                                                      |                                                      |                                          |
| [Direct contributions](direct/direct.md)            |                                             | [✓](direct/direct.md#intervention-flows)              | [✓](direct/direct.md#impact-categories)               | [✓](direct/direct.md#costs)               |
| [Intensities](intensities/intensities.md)           |                                             | [✓](intensities/intensities.md#intervention-flows)    | [✓](intensities/intensities.md#impact-categories)     | [✓](intensities/intensities.md#costs)     |
| [Total process results](process-totals/process-totals.md) |                                       | [✓](process-totals/process-totals.md#intervention-flows) | [✓](process-totals/process-totals.md#impact-categories) | [✓](process-totals/process-totals.md#costs) |
| [Impact factors](impact-factors/impact-factors.md)  |                                             | [✓](impact-factors/impact-factors.md#flow-impacts)    | [✓](impact-factors/impact-factors.md#impact-factors)  |                                          |
| [Upstream trees](upstream-trees/upstream-trees.md)  |                                             | [✓](upstream-trees/upstream-trees.md#intervention-flows) | [✓](upstream-trees/upstream-trees.md#impact-categories) | [✓](upstream-trees/upstream-trees.md#costs) |
| [Grouped results](grouped/grouped.md)               |                                             | [✓](grouped/grouped.md#intervention-flows)            | [✓](grouped/grouped.md#impact-categories)             | [✓](grouped/grouped.md#costs)             |
| [Tag results](tags/tags.md)                         |                                             | [✓](tags/tags.md#intervention-flows)                  | [✓](tags/tags.md#impact-categories)                   | [✓](tags/tags.md#costs)                   |

## Request parameters

All result methods take the ID of the result as parameter. Depending on the
method, the result element for which a result should be returned is passed as
additional parameter:

| Parameter       | JSON-RPC                                                                      | REST path segment                                    |
| --------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| result ID       | `"@id": "<result-id>"`                                                        | `{result-id}`                                        |
| technosphere flow | `techFlow: { provider: { "@id": ... }, flow: { "@id": ... } }`              | `{tech-flow}`: `<provider-id>::<flow-id>`            |
| intervention flow | `enviFlow: { flow: { "@id": ... }, location: { "@id": ... } }`              | `{envi-flow}`: `<flow-id>` or `<flow-id>::<location-id>` |
| impact category | `impactCategory: { "@id": ... }`                                              | `{impact-category}`: `<impact-category-id>`          |

The location of an intervention flow is only required in regionalized results.

## Mathematical relations

Where possible, a short formula for calculating a respective result is provided
in the following documentation of the respective functions. These formulas are
based on standard matrix algebra for [LCA
computations](https://link.springer.com/book/10.1007/978-94-015-9900-9).
However, this does not mean that a respective result is calculated by exactly
using this formula. The following symbols are used:

| Symbol          | Meaning                                                                    |
| --------------- | -------------------------------------------------------------------------- |
| \\(A\\)         | technology matrix, \\(n \times n\\), indexed by the technosphere flows      |
| \\(B\\)         | intervention matrix, \\(m \times n\\)                                       |
| \\(C\\)         | matrix with characterisation factors, \\(l \times m\\)                      |
| \\(q\\)         | vector with the net-costs of the processes                                 |
| \\(f\\)         | final demand vector                                                        |
| \\(s\\)         | scaling vector, \\(A s = f\\)                                              |
| \\(t\\)         | total requirements of the technosphere flows                               |
| \\(tf\\)        | totality factors                                                           |
| \\(g = B s\\)   | inventory result                                                           |
| \\(h = C g\\)   | impact assessment result                                                   |
| \\(M = B A^{-1}\\) | intensity matrix of the intervention flows                              |
| \\(N = C M\\)   | intensity matrix of the impact categories                                  |
