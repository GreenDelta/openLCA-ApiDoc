# Tag results

These methods return the results aggregated by the tags of the processes in the
calculated product system.

| Method                  | Parameters       | Returns                                                                            |
| ----------------------- | ---------------- | ---------------------------------------------------------------------------------- |
| `tag-results-of-flow`   | `enviFlow`       | [`List[TagValue]`](https://greendelta.github.io/olca-schema/classes/TagValue.html) |
| `tag-results-of-impact` | `impactCategory` | [`List[TagValue]`](https://greendelta.github.io/olca-schema/classes/TagValue.html) |
| `tag-results-of-costs`  |                  | [`List[TagValue]`](https://greendelta.github.io/olca-schema/classes/TagValue.html) |

These methods are only available via JSON-RPC.

## Intervention flows

The method `tag-results-of-flow` returns the tag results of an intervention
flow.

## Impact categories

The method `tag-results-of-impact` returns the tag results of an impact
category.

## Costs

The method `tag-results-of-costs` returns the tag results of the life cycle
costs.
