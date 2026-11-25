# Result elements

These methods return the elements of a result for which result values can be
retrieved: the technosphere flows, the intervention flows, and the impact
categories. The elements returned by these methods can be directly used as
parameters in other result methods (see [method names and
parameters](../results.md#method-names-and-parameters)).

| Method              | Returns                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `tech-flows`        | [`List[TechFlow]`](https://greendelta.github.io/olca-schema/classes/TechFlow.html)        |
| `envi-flows`        | [`List[EnviFlow]`](https://greendelta.github.io/olca-schema/classes/EnviFlow.html)        |
| `impact-categories` | [`List[Ref[ImpactCategory]]`](https://greendelta.github.io/olca-schema/classes/Ref.html)  |

## Technosphere flows

The method `tech-flows` returns the \\(n\\) technosphere flows of a result.
These are the flows by which the processes of the calculated system are linked.
Each technosphere flow is a pair of a product or waste flow and a provider where
the provider is typically a process but can also be a product system (a
sub-system) or even another result. The technology matrix \\(A\\) is
symmetrically indexed by these technosphere flows:

$$
A \in \mathbb{R}^{n \times n}
$$

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include tech-flows.js}}
```

### Python IPC

```py
{{#include _elements.py:tech-flows}}
```

## Intervention flows

The method `envi-flows` returns the \\(m\\) intervention flows of a result.
These are the flows that cross the boundary with the environment of the
calculated system (this is why the short name is `EnviFlow` in the API). In
regionalized calculations these flows can be pairs of flows and locations, the
same flow can occur in different locations (with possibly different
characterisation factors). The rows of the intervention matrix are indexed by
these \\(m\\) intervention flows (and the columns by the \\(n\\) technosphere
flows):

$$
B \in \mathbb{R}^{m \times n}
$$

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include envi-flows.js}}
```

### Python IPC

```py
{{#include _elements.py:envi-flows}}
```

## Impact categories

The method `impact-categories` returns the \\(l\\) impact categories of a
result. The rows of the characterisation matrix \\(C\\) are indexed by these
impact categories and the columns by the \\(m\\) intervention flows of the
system. \\(C\\) contains the respective characterisation factors of the
intervention flows.

$$
C \in \mathbb{R}^{l \times m}
$$

### Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include impact-categories.js}}
```

### Python IPC

```py
{{#include _elements.py:impacts}}
```
