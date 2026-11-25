# Sankey Graphs

This method returns a graph data structure with which Sankey diagrams can be constructed.

| Method   | Parameters | Returns |
| -------- | ---------- | ------- |
| `sankey` | `config`: [`SankeyRequest`](https://greendelta.github.io/olca-schema/classes/SankeyRequest.html) | [`SankeyGraph`](https://greendelta.github.io/olca-schema/classes/SankeyGraph.html) |

Via REST, it is a `POST` request with the Sankey request as body:
`POST result/{result-id}/sankey`. In Python, the method is
`Result.get_sankey_graph`.


## Examples

### Python IPC

```py
{{#include sankey.py}}
```

### JavaScript IPC

```js,run
{{#include sankey.js}}
```
