# Upstream trees

An upstream tree shows the contributions of the processes in the supply chain to
the result of a result element. The root of the tree is the reference process
(the final demand) of the calculated product system and the child nodes of a
node are the providers of the product inputs (or waste outputs) of that node.
The result of each node is the total result of that node including its upstream
contributions.

The methods below return the child nodes of a given path in such an upstream
tree. The path is a sequence of technosphere flows that describe the path to
the parent node of the returned nodes. If the path is empty, the root of the
tree is returned. Note that such an upstream tree can be infinitely deep when
the calculated system has cycles.

| Method                      | Parameters               | Returns                                                                                    |
| --------------------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| `upstream-interventions-of` | `enviFlow`, `path`       | [`List[UpstreamNode]`](https://greendelta.github.io/olca-schema/classes/UpstreamNode.html) |
| `upstream-impacts-of`       | `impactCategory`, `path` | [`List[UpstreamNode]`](https://greendelta.github.io/olca-schema/classes/UpstreamNode.html) |
| `upstream-costs-of`         | `path`                   | [`List[UpstreamNode]`](https://greendelta.github.io/olca-schema/classes/UpstreamNode.html) |

With the client libraries, the path is passed as list of
[technosphere flows](https://greendelta.github.io/olca-schema/classes/TechFlow.html).
Via JSON-RPC, the path is passed as string in the field `path`; via REST, these
methods are `POST` requests with the path in the field `path` of the request
body. In the path string, each technosphere flow is encoded as
`<provider-id>::<flow-id>` and multiple technosphere flows are separated by `/`:

```
<provider-id>::<flow-id>/<provider-id>::<flow-id>/...
```

## Intervention flows

The method `upstream-interventions-of` returns the upstream tree nodes of an
intervention flow.

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include upstream-interventions.js}}
```

### Python IPC

```py
{{#include upstream-interventions.py}}
```

## Impact categories

The method `upstream-impacts-of` returns the upstream tree nodes of an impact
category.

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include upstream-impacts.js}}
```

### Python IPC

The Python example below uses the `utree` module of the olca-ipc.py API which
makes working with upstream trees a bit more convenient:

```py
{{#include upstream-impacts-utree.py}}
```

## Costs

The method `upstream-costs-of` returns the upstream tree nodes of the life cycle
costs.
