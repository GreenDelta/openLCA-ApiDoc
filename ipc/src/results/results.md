# Calculation and results

When starting a calculation, it is first scheduled in a calculation queue. This
is because multiple calculations could be started at the same time and
calculations may need to wait for other calculations first to be finished. Thus,
a calculation directly returns a
[ResultState](http://greendelta.github.io/olca-schema/classes/ResultState.html)
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
retrieved for different elements, these are:

* Technosphere flows, `tech-flows`: the product and waste flows of the product
  system with their corresponding providers.
* Intervention flows, `envi-flows`: typically elementary flows but also
  unconnected product or waste inputs or outputs of the processes in the system.
  These flows cross the boundary to the environment of the system and form the
  inventory result of the system. In case of a regionalized calculation, an
  intervention flow is a pair of flow and location.
* Impact categories, `impact-categories`: the impact categories of the impact
  assessment method selected in the calculation setup.
* costs: life cycle costs

Technosphere flows are always present. All other result elements are only
available if the calculated model provides these elements and/or if the
corresponding options are set in the calculation setup.

## Mathematical relations

Where possible, a short formula for calculating a respective result is provided
in the following documentation of the respective functions. These formulas are based on standard matrix algebra for [LCA
computations](https://link.springer.com/book/10.1007/978-94-015-9900-9).
However, this does not mean that a respective result is calculated by exactly
using this formula.
