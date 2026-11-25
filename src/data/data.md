# Working with data

The openLCA IPC protocol is based on the [openLCA Schema](http://greendelta.github.io/olca-schema/) as data exchange format. Thus, parameter and return types of this documentation often link to their respective description in the openLCA schema documentation. The openLCA schema is a typed data format with the following [principles](http://greendelta.github.io/olca-schema/#format-concepts):

* There are stand-alone entities like processes or flows, called _root entities_, and composition entities that can only exist within another entity, like the inputs and outputs (called _exchanges_) of a process.
* There is a uniform reference concept in the format: if an entity `A` references an entity `B` it only stores a reference to `B` that is of type [Ref](http://greendelta.github.io/olca-schema/classes/Ref.html). This reference contains the type (if it cannot be inferred from field in `A`), the ID, and some optional meta-data of `B`.

```
    +---+   Ref   +---+
    | A |  ---->  | B |
    +---+         +---+
```

For example, an output in a process is of type [Exchange](http://greendelta.github.io/olca-schema/classes/Ref.html) and an exchange contains a reference to a flow. In addition, instances of the `Ref` type are often used as data set descriptors: instead of loading the full data set it is often enough to just display some meta-data of an entity (for example in search results).

## Methods

The table below gives an overview of the data management methods and their
names in the different protocols and client libraries. The Python and
olca-ipc.ts methods are methods of the respective client:

| Method                                                                   | JSON-RPC               | REST                              | Python                  | olca-ipc.ts           |
| ------------------------------------------------------------------------ | ---------------------- | --------------------------------- | ----------------------- | --------------------- |
| [Get descriptors](get_descriptors/get_descriptors.md)                    | `data/get/descriptors` | `GET data/{type}`                 | `get_descriptors`       | `getDescriptors`      |
| [Get by ID](get_by_id/get_by_id.md)                                      | `data/get`             | `GET data/{type}/{id}`            | `get`                   | `get`                 |
| [Get by name](get_by_name/get_by_name.md)                                | `data/get`             | `GET data/{type}/name/{name}`     | `get`                   | `get`                 |
| [Get descriptor](get_descriptor/get_descriptor.md)                       | `data/get/descriptor`  | `GET data/{type}/{id}/info`       | `get_descriptor`        | `getDescriptor`       |
| [Get all](get_all/get_all.md)                                            | `data/get/all`         | `GET data/{type}/all`             | `get_all`               | `getAll`              |
| [Get parameters](get_parameters/get_parameters.md)                       | `data/get/parameters`  | `GET data/{type}/{id}/parameters` | `get_parameters`        | `getParameters`       |
| [Get usage](get_usage/get_usage.md)                                      | `data/get/usage`       | –                                 | `get_usage`             | –                     |
| [Get providers](get_providers/get_providers.md)                          | `data/get/providers`   | `GET data/providers`              | `get_providers`         | `getProviders`        |
| [Get providers for flow](get_providers_for_flow/get_providers_for_flow.md) | `data/get/providers` | `GET data/providers/{id}`         | `get_providers`         | `getProviders`        |
| [Insert or update a data set](put/put.md)                                | `data/put`             | `PUT data/{type}`                 | `put`                   | `put`                 |
| Upload a file of a source                                                | `data/put/source-file` | –                                 | `put_source_file`       | –                     |
| [Create a product system](create-system/create-system.md)                | `data/create/system`   | `POST data/create-system`         | `create_product_system` | `createProductSystem` |
| [Delete a data set](delete/delete.md)                                    | `data/delete`          | `DELETE data/{type}/{id}`         | `delete`                | `delete`              |

## Parameters

Many of the data management functions are the same for all root entity types.
Thus, the respective type is often just an additional parameter of a method
call. Via JSON-RPC, the parameters are passed as an object with the following
fields; via REST, they are passed as path segments:

| Parameter | JSON-RPC                                                        | REST path segment                  |
| --------- | --------------------------------------------------------------- | ---------------------------------- |
| type      | `"@type"`: the name of the root entity type, e.g. `"Process"`   | `{type}`, see the table below      |
| ID        | `"@id"`: the ID of the data set                                 | `{id}`                             |
| name      | `name`: the name of the data set                                | `{name}`, URL-encoded              |

The table below shows the root entity types and their parameter value in the
REST API (multiple values can map to the same type for convenience):


| Root entity type                                                                         | REST parameter                                            |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [Actor](https://greendelta.github.io/olca-schema/classes/Actor.html)                     | `actor`,  `actors`                                        |
| [Category](https://greendelta.github.io/olca-schema/classes/Category.html)               | `category`,  `categories`                                 |
| [Currency](https://greendelta.github.io/olca-schema/classes/Currency.html)               | `currency`,  `currencies`                                 |
| [DQSystem](https://greendelta.github.io/olca-schema/classes/DQSystem.html)               | `dq-system`,  `dq-systems`                                |
| [Epd](https://greendelta.github.io/olca-schema/classes/Epd.html)                         | `epd`,  `epds`                                            |
| [Flow](https://greendelta.github.io/olca-schema/classes/Flow.html)                       | `flow`,  `flows`                                          |
| [FlowProperty](https://greendelta.github.io/olca-schema/classes/FlowProperty.html)       | `flow-property`,  `flow-properties`                       |
| [ImpactCategory](https://greendelta.github.io/olca-schema/classes/ImpactCategory.html)   | `impact-category`,  `impact-categories`                   |
| [ImpactMethod](https://greendelta.github.io/olca-schema/classes/ImpactMethod.html)       | `impact-method`,  `method`,  `impact-methods`,  `methods` |
| [Location](https://greendelta.github.io/olca-schema/classes/Location.html)               | `location`,  `locations`                                  |
| [Parameter](https://greendelta.github.io/olca-schema/classes/Parameter.html)             | `parameter`,  `parameters`                                |
| [Process](https://greendelta.github.io/olca-schema/classes/Process.html)                 | `process`,  `processes`                                   |
| [ProductSystem](https://greendelta.github.io/olca-schema/classes/ProductSystem.html)     | `product-system`, `product-systems`, `model`, `models`    |
| [Project](https://greendelta.github.io/olca-schema/classes/Project.html)                 | `project`,  `projects`                                    |
| [Result](https://greendelta.github.io/olca-schema/classes/Result.html)                   | `result`,  `results`                                      |
| [SocialIndicator](https://greendelta.github.io/olca-schema/classes/SocialIndicator.html) | `social-indicator`,  `social-indicators`                  |
| [Source](https://greendelta.github.io/olca-schema/classes/Source.html)                   | `source`,  `sources`                                      |
| [UnitGroup](https://greendelta.github.io/olca-schema/classes/UnitGroup.html)             | `unit-group`,  `unit-groups`                              |

