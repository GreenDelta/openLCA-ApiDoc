# Sankey Graphs

This method returns a graph data structure with which Sankey diagrams can be constructed.

|                |                                                                                       |
|----------------|---------------------------------------------------------------------------------------|
| REST           | `POST result/{result-id}/sankey`                                                      |
| IPC            | `result/sankey`                                                                       |
| Python IPC     | `Result.get_sankey_graph`                                                             |
| Parameter type | [`SankeyRequest`](http://greendelta.github.io/olca-schema/classes/SankeyRequest.html) |
| Return type    | [`SankeyGraph`](http://greendelta.github.io/olca-schema/classes/SankeyGraph.html)     |


## Examples

### Python IPC

```py
{{#include sankey.py}}
```

### TypeScript IPC

```ts
{{#include sankey.ts}}
```
