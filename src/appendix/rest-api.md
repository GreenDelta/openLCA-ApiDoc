# REST API reference

This page lists all endpoints of the REST API of the openLCA IPC protocol, as
provided by the [gdt-server](https://github.com/GreenDelta/gdt-server) (see
[stand-alone servers](servers.md) and the routes in its
[Server.java](https://github.com/GreenDelta/gdt-server/blob/main/src/main/java/org/openlca/gdt/server/Server.java)).
The paths are relative to the base URL of the server, e.g.
`http://localhost:8080/`. Request and response bodies are JSON documents
following the [openLCA Schema](https://greendelta.github.io/olca-schema/).

The following placeholders are used in the paths:

| Placeholder         | Value                                                                    |
| ------------------- | ------------------------------------------------------------------------ |
| `{type}`            | the type of a data set, see the table below                              |
| `{id}`              | the ID of a data set                                                     |
| `{name}`            | the URL-encoded name of a data set                                       |
| `{result-id}`       | the ID of a result                                                       |
| `{tech-flow}`       | a technosphere flow: `<provider-id>::<flow-id>`                          |
| `{envi-flow}`       | an intervention flow: `<flow-id>` or `<flow-id>::<location-id>`          |
| `{impact-category}` | the ID of an impact category                                             |

The `{type}` path segments of the data set types are:

| Type             | `{type}`            | Type             | `{type}`            |
| ---------------- | ------------------- | ---------------- | ------------------- |
| `Actor`          | `actors`            | `Parameter`      | `parameters`        |
| `Currency`       | `currencies`        | `Process`        | `processes`         |
| `DQSystem`       | `dq-systems`        | `ProductSystem`  | `product-systems`   |
| `Epd`            | `epds`              | `Project`        | `projects`          |
| `Flow`           | `flows`             | `Result`         | `results`           |
| `FlowProperty`   | `flow-properties`   | `SocialIndicator`| `social-indicators` |
| `ImpactCategory` | `impact-categories` | `Source`         | `sources`           |
| `ImpactMethod`   | `impact-methods`    | `UnitGroup`      | `unit-groups`       |
| `Location`       | `locations`         | `Category`       | `categories`        |

The server also accepts the singular forms of these path segments (e.g.
`process` instead of `processes`) as well as `method(s)` for impact methods and
`model(s)` for product systems.

## Server

| Request           | Returns                         |
| ----------------- | ------------------------------- |
| `GET api/version` | the API version of the server   |

## Working with data

| Request                                               | Body                         | Returns           | Documentation                                                      |
| ----------------------------------------------------- | ---------------------------- | ----------------- | ------------------------------------------------------------------ |
| `GET data/{type}`                                     |                              | `List[Ref]`       | [Get descriptors](../data/get_descriptors/get_descriptors.md)      |
| `GET data/{type}/all`                                 |                              | `List[{type}]`    | [Get all](../data/get_all/get_all.md)                              |
| `GET data/{type}/{id}`                                |                              | `{type}`          | [Get by ID](../data/get_by_id/get_by_id.md)                        |
| `GET data/{type}/name/{name}`                         |                              | `{type}`          | [Get by name](../data/get_by_name/get_by_name.md)                  |
| `GET data/{type}/{id}/info`                           |                              | `Ref`             | [Get descriptor](../data/get_descriptor/get_descriptor.md)         |
| `GET data/{type}/{id}/parameters`                     |                              | `List[Parameter]` or `List[ParameterRedef]` | [Get parameters](../data/get_parameters/get_parameters.md) |
| `GET data/providers`                                  |                              | `List[TechFlow]`  | [Get providers](../data/get_providers/get_providers.md)            |
| `GET data/providers/{id}`                             |                              | `List[TechFlow]`  | [Get providers for flow](../data/get_providers_for_flow/get_providers_for_flow.md) |
| `PUT data/{type}`                                     | the data set                 | `Ref`             | [Insert or update](../data/put/put.md)                             |
| `POST data/create-system`                             | `{process: Ref, config: LinkingConfig}` | `Ref`  | [Create a product system](../data/create-system/create-system.md)  |
| `DELETE data/{type}/{id}`                             |                              | `Ref`             | [Delete a data set](../data/delete/delete.md)                      |

## Calculations

| Request                                  | Body               | Returns       | Documentation                                         |
| ---------------------------------------- | ------------------ | ------------- | ----------------------------------------------------- |
| `POST result/calculate`                  | `CalculationSetup` | `ResultState` | [Calculate](../results/calculate/calculate.md)        |
| `POST result/simulate`                   | `CalculationSetup` | `ResultState` | [Monte Carlo simulations](../results/simulate/simulate.md) |
| `GET result/{result-id}/state`           |                    | `ResultState` | [Get state](../results/get_state/get_state.md)        |
| `POST result/{result-id}/simulate/next`  |                    | `ResultState` | [Monte Carlo simulations](../results/simulate/simulate.md) |
| `POST result/{result-id}/dispose`        |                    | `ResultState` | [Dispose result](../results/dispose/dispose.md)       |
| `DELETE result/{result-id}`              |                    | `ResultState` | [Dispose result](../results/dispose/dispose.md)       |

## Results

All result requests start with `result/{result-id}/`, which is omitted in the
table below. Except of the upstream trees and the Sankey graph, all result
requests are `GET` requests without a request body.

| Request                                             | Returns               | Documentation                                                         |
| --------------------------------------------------- | --------------------- | --------------------------------------------------------------------- |
| `tech-flows`                                        | `List[TechFlow]`      | [Result elements](../results/elements/elements.md)                    |
| `envi-flows`                                        | `List[EnviFlow]`      | [Result elements](../results/elements/elements.md)                    |
| `impact-categories`                                 | `List[Ref]`           | [Result elements](../results/elements/elements.md)                    |
| `total-flows`                                       | `List[EnviFlowValue]` | [Total results](../results/total-results/total-results.md)            |
| `total-flow-value-of/{envi-flow}`                   | `EnviFlowValue`       | [Total results](../results/total-results/total-results.md)            |
| `total-impacts`                                     | `List[ImpactValue]`   | [Total results](../results/total-results/total-results.md)            |
| `total-impact-value-of/{impact-category}`           | `ImpactValue`         | [Total results](../results/total-results/total-results.md)            |
| `total-impacts/normalized`                          | `List[ImpactValue]`   | [Total results](../results/total-results/total-results.md)            |
| `total-impacts/weighted`                            | `List[ImpactValue]`   | [Total results](../results/total-results/total-results.md)            |
| `total-costs`                                       | `CostValue`           | [Total results](../results/total-results/total-results.md)            |
| `demand`                                            | `TechFlowValue`       | [Technosphere requirements](../results/requirements/requirements.md)  |
| `scaling-factors`                                   | `List[TechFlowValue]` | [Technosphere requirements](../results/requirements/requirements.md)  |
| `total-requirements`                                | `List[TechFlowValue]` | [Technosphere requirements](../results/requirements/requirements.md)  |
| `total-requirements-of/{tech-flow}`                 | `TechFlowValue`       | [Technosphere requirements](../results/requirements/requirements.md)  |
| `scaled-tech-flows-of/{tech-flow}`                  | `List[TechFlowValue]` | [Technosphere requirements](../results/requirements/requirements.md)  |
| `unscaled-tech-flows-of/{tech-flow}`                | `List[TechFlowValue]` | [Technosphere requirements](../results/requirements/requirements.md)  |
| `flow-contributions-of/{envi-flow}`                 | `List[TechFlowValue]` | [Direct contributions](../results/direct/direct.md)                   |
| `direct-interventions-of/{tech-flow}`               | `List[EnviFlowValue]` | [Direct contributions](../results/direct/direct.md)                   |
| `direct-intervention-of/{envi-flow}/{tech-flow}`    | `EnviFlowValue`       | [Direct contributions](../results/direct/direct.md)                   |
| `impact-contributions-of/{impact-category}`         | `List[TechFlowValue]` | [Direct contributions](../results/direct/direct.md)                   |
| `direct-impacts-of/{tech-flow}`                     | `List[ImpactValue]`   | [Direct contributions](../results/direct/direct.md)                   |
| `direct-impact-of/{impact-category}/{tech-flow}`    | `ImpactValue`         | [Direct contributions](../results/direct/direct.md)                   |
| `cost-contributions`                                | `List[TechFlowValue]` | [Direct contributions](../results/direct/direct.md)                   |
| `direct-costs-of/{tech-flow}`                       | `number`              | [Direct contributions](../results/direct/direct.md)                   |
| `flow-intensities-of/{tech-flow}`                   | `List[EnviFlowValue]` | [Intensities](../results/intensities/intensities.md)                  |
| `flow-intensity-of/{envi-flow}/{tech-flow}`         | `EnviFlowValue`       | [Intensities](../results/intensities/intensities.md)                  |
| `impact-intensities-of/{tech-flow}`                 | `List[ImpactValue]`   | [Intensities](../results/intensities/intensities.md)                  |
| `impact-intensity-of/{impact-category}/{tech-flow}` | `ImpactValue`         | [Intensities](../results/intensities/intensities.md)                  |
| `cost-intensities-of/{tech-flow}`                   | `number`              | [Intensities](../results/intensities/intensities.md)                  |
| `total-interventions-of/{tech-flow}`                | `List[EnviFlowValue]` | [Total process results](../results/process-totals/process-totals.md)  |
| `total-intervention-of/{envi-flow}/{tech-flow}`     | `EnviFlowValue`       | [Total process results](../results/process-totals/process-totals.md)  |
| `total-impacts-of/{tech-flow}`                      | `List[ImpactValue]`   | [Total process results](../results/process-totals/process-totals.md)  |
| `total-impact-of/{impact-category}/{tech-flow}`     | `ImpactValue`         | [Total process results](../results/process-totals/process-totals.md)  |
| `total-costs-of/{tech-flow}`                        | `number`              | [Total process results](../results/process-totals/process-totals.md)  |
| `total-cost-values`                                 | `List[TechFlowValue]` | [Total process results](../results/process-totals/process-totals.md)  |
| `impact-factors-of/{impact-category}`               | `List[EnviFlowValue]` | [Impact factors](../results/impact-factors/impact-factors.md)         |
| `impact-factor-of/{impact-category}/{envi-flow}`    | `EnviFlowValue`       | [Impact factors](../results/impact-factors/impact-factors.md)         |
| `flow-impacts-of/{impact-category}`                 | `List[EnviFlowValue]` | [Impact factors](../results/impact-factors/impact-factors.md)         |
| `flow-impact-of/{impact-category}/{envi-flow}`      | `EnviFlowValue`       | [Impact factors](../results/impact-factors/impact-factors.md)         |
| `POST upstream-interventions-of/{envi-flow}`        | `List[UpstreamNode]`  | [Upstream trees](../results/upstream-trees/upstream-trees.md)         |
| `POST upstream-impacts-of/{impact-category}`        | `List[UpstreamNode]`  | [Upstream trees](../results/upstream-trees/upstream-trees.md)         |
| `POST upstream-costs-of`                            | `List[UpstreamNode]`  | [Upstream trees](../results/upstream-trees/upstream-trees.md)         |
| `POST sankey`                                       | `SankeyGraph`         | [Sankey graphs](../results/sankey/sankey.md)                          |

The upstream tree requests take the path in the upstream tree as body
`{"path": "<path>"}`, see [upstream trees](../results/upstream-trees/upstream-trees.md).
The Sankey request takes a
[`SankeyRequest`](https://greendelta.github.io/olca-schema/classes/SankeyRequest.html)
as body.

## Deprecated routes

For backwards compatibility with older API versions, the server still provides
the following routes. They should not be used anymore:

| Deprecated route                 | Replacement                         |
| -------------------------------- | ----------------------------------- |
| `POST results/calculate`         | `POST result/calculate`             |
| `GET results/{id}/state`         | `GET result/{result-id}/state`      |
| `GET results/{id}/total-impacts` | `GET result/{result-id}/total-impacts` |
| `POST results/{id}/dispose`      | `POST result/{result-id}/dispose`   |
| `DELETE results/{id}`            | `DELETE result/{result-id}`         |

## Not available via REST

The following methods of the JSON-RPC protocol have no REST endpoint:

* `data/get/usage` ([Get usage](../data/get_usage/get_usage.md))
* `data/put/source-file`
* `result/totality-factors` and `result/totality-factor-of`
  ([Technosphere requirements](../results/requirements/requirements.md#totality-factors))
* the grouped results ([Grouped results](../results/grouped/grouped.md))
* the tag results ([Tag results](../results/tags/tags.md))
* `export/json-ld`
* `runtime/shutdown`
