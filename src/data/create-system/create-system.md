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

## Try it

You can edit and execute the example below. Just make sure an openLCA IPC
server is running on port `8080`:

```js,run
{{#include create-system.js}}
```

## Python IPC

```py
{{#include create-system.py}}
```
