# Create a product system

This method creates a product system for a given process. It recursively links
the processes of that system according to the given linking configuration. The
process must have a quantitative reference. The method returns a reference to
the new product system, which is stored in the database.

| JSON-RPC | REST | Parameters | Returns |
| -------- | ---- | ---------- | ------- |
| `data/create/system` | `POST data/create-system` | `process`: [`Ref[Process]`](https://greendelta.github.io/olca-schema/classes/Ref.html), `config`: [`LinkingConfig`](https://greendelta.github.io/olca-schema/classes/LinkingConfig.html) (optional) | [`Ref[ProductSystem]`](https://greendelta.github.io/olca-schema/classes/Ref.html) |

The linking configuration defines how the processes are linked:

* `providerLinking`: whether default providers of exchanges should be
  ignored (`IGNORE_DEFAULTS`), preferred (`PREFER_DEFAULTS`), or exclusively
  used (`ONLY_DEFAULTS`).
* `preferUnitProcesses`: if there are multiple possible providers of a product,
  unit processes are preferred over system processes when this is `true`.
* `cutoff`: an optional cutoff value; product inputs or waste outputs with a
  demand below this value, relative to one unit of the reference product of the
  system, are not linked further.

## Examples

### Python IPC

```py
{{#include create-system.py}}
```

### JSON-RPC via Fetch API

The example below shows the usage of this method using the JSON-RPC protocol via
the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
which is available in modern web-browsers or platforms like
[Deno](https://deno.land/). It first searches the process by name and then
creates the product system for it, using the [`call`
helper](../../intro.md#running-the-javascript-examples) for the JSON-RPC calls.

```js,run
{{#include create-system.js}}
```
