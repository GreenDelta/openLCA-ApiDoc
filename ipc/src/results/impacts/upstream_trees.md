# Upstream trees

This method returns the result nodes of a given impact category for a given
path in an upstream contribution tree. The path is a sequence of
technosphere-flows that describe the path to the parent node of the returned
nodes. If the path is empty, the root of the tree is returned. Note that such
an upstream tree can be infinitely deep when the calculated system has cycles.

|             |                             |
| ----------- | --------------------------- |
| Rest API    | `POST result/{result-id}/upstream-impacts-of/{impact-category}` |
| JSON-RPC    | `result/upstream-impacts-of` |
| Snake case  | `result.get_upstream_impacts_of` |
| Camel case  | `result.getUpstreamImpactsOf` |
| Return type | [`List[UpstreamNode]`](http://greendelta.github.io/olca-schema/classes/UpstreamNode.html) |
| Parameter 1 | [`Ref[ImpactCategory]`](http://greendelta.github.io/olca-schema/classes/Ref.html) |
| Parameter 2 | [`List[TechFlow]`](http://greendelta.github.io/olca-schema/classes/TechFlow.html) |


## Examples

### olca-ipc.ts

The TypeScript example below uses the
[olca-ipc.ts](https://github.com/GreenDelta/olca-ipc.ts) client API:

```ts
{{#include upstream_trees.ts:body}}
```

### olca-ipc.py

The Python example below uses the
[olca-ipc.py](https://github.com/GreenDelta/olca-ipc.py) client API:

```py
{{#include upstream_trees.py}}
```
