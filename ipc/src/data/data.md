# Data management

The openLCA IPC protocol is based on the [openLCA Schema](http://greendelta.github.io/olca-schema/) as data exchange format. Thus, parameter and return types of this documentation often link to their respective description in the openLCA schema documentation. The openLCA schema is a typed data format with the following [principles](http://greendelta.github.io/olca-schema/#format-concepts):

* There are stand-alone entities like processes or flows, called _root entities_, and composition entities that can only exist within another entity, like the inputs and outputs (called _exchanges_) of a process.
* There is a uniform reference concept in the format: if an entity `A` references an entity `B` it only stores a reference to `B` that is of type [Ref](http://greendelta.github.io/olca-schema/classes/Ref.html). This reference contains the type (if it cannot be inferred from field in `A`), the ID, and some optional meta-data of `B`.

```
    +---+   Ref   +---+
    | A |  ---->  | B |
    +---+         +---+
```

For example, an output in a process is of type [Exchange](http://greendelta.github.io/olca-schema/classes/Ref.html) and an exchange contains a reference to a flow. In addition, instances of the `Ref` type are often used as data set descriptors: instead of loading the full data set it is often enough to just display some meta-data of an entity (for example in search results).

Many of the data management functions are the same for all root entity types.
Thus, the respective type is often just an additional parameter of a method call.
The table below shows the root entity types and their parameter value in the
Rest API (multiple values can map to the same type for convenience):


| Root entity type                                                                         | Rest parameter                                                |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [Actor](https://greendelta.github.io/olca-schema/classes/Actor.html)                     | `actor `,  `actors `                                          |
| [Category](https://greendelta.github.io/olca-schema/classes/Category.html)               | `category `,  `categories `                                   |
| [Currency](https://greendelta.github.io/olca-schema/classes/Currency.html)               | `currency `,  `currencies `                                   |
| [DQSystem](https://greendelta.github.io/olca-schema/classes/DQSystem.html)               | `dq-system `,  `dq-systems `                                  |
| [Epd](https://greendelta.github.io/olca-schema/classes/Epd.html)                         | `epd `,  `epds `                                              |
| [Flow](https://greendelta.github.io/olca-schema/classes/Flow.html)                       | `flow `,  `flows `                                            |
| [FlowProperty](https://greendelta.github.io/olca-schema/classes/FlowProperty.html)       | `flow-property `,  `flow-properties `                         |
| [ImpactCategory](https://greendelta.github.io/olca-schema/classes/ImpactCategory.html)   | `impact-category `,  `impact-categories `                     |
| [ImpactMethod](https://greendelta.github.io/olca-schema/classes/ImpactMethod.html)       | `impact-method `,  `method `,  `impact-methods `,  `methods ` |
| [Location](https://greendelta.github.io/olca-schema/classes/Location.html)               | `location `,  `locations `                                    |
| [Parameter](https://greendelta.github.io/olca-schema/classes/Parameter.html)             | `parameter `,  `parameters `                                  |
| [Process](https://greendelta.github.io/olca-schema/classes/Process.html)                 | `process `,  `processes `                                     |
| [ProductSystem](https://greendelta.github.io/olca-schema/classes/ProductSystem.html)     | `product-system `,  `model `,                                 |
| [Project](https://greendelta.github.io/olca-schema/classes/Project.html)                 | `project `,  `projects `                                      |
| [Result](https://greendelta.github.io/olca-schema/classes/Result.html)                   | `result `,  `results `                                        |
| [SocialIndicator](https://greendelta.github.io/olca-schema/classes/SocialIndicator.html) | `social-indicator `,  `social-indicators `                    |
| [Source](https://greendelta.github.io/olca-schema/classes/Source.html)                   | `source `,  `sources `                                        |
| [UnitGroup](https://greendelta.github.io/olca-schema/classes/UnitGroup.html)             | `unit-group `,  `unit-groups `                                |

