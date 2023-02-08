# Python IPC - From scratch

In this section we will go through a complete example using the openLCA IPC
interface from the [olca-ipc.py](https://github.com/GreenDelta/olca-ipc.py)
Python package. As we will create everything from scratch, we first create an
empty database and start an IPC server for that database:

![](./images/py_scratch_init_db.png)

In the Python code, we first import the required packages that we will use in
our example. The `olca-schema` packages comes is a dependency of the `olca-ipc`
package and contains the data type definitions of the openLCA model and some
utility methods. We will use Pandas for formatting our data output and NumPy,
which is a dependency of Pandas, for checking the calculation. Also, we will
add type annotations in our code, compatible with Python 3.11.

```py
{{#include pyipc_from_scratch.py:imports}}
```

## A historic example

Our example was taken from [Heijungs
1994](https://www.sciencedirect.com/science/article/abs/pii/0921800994900388)[^paper]
and extended a bit. First, we define the technosphere of our system which are
4 processes connected by 4 products:


```py
{{#include pyipc_from_scratch.py:techsphere}}
```

When we print this data frame, we get the following table:

|                              | electricity production | aluminium production  | aluminium foil production | sandwitch package production |
|------------------------------|------------------------|-----------------------|---------------------------|------------------------------|
| electricity [MJ]             |                   1.00 |                -50.0  |                      -1.0 |                          0.0 |
| aluminium [kg]               |                  -0.01 |                  1.0  |                      -1.0 |                          0.0 |
| aluminium foil [kg]          |                   0.00 |                  0.0  |                       1.0 |                         -1.0 |
| sandwitch package [Item(s)]  |                   0.00 |                  0.0  |                       0.0 |                        100.0 |

In the rows, we have our products, in the columns the processes. Inputs have
negative and outputs positive values. Thus, for 100 sandwitch packages, we would
need 1 kg of aluminium foil (this is how sandwitches were packed in the 90s)[^no].

Next, we define the interventions of these processes with the environment:

```py
{{#include pyipc_from_scratch.py:envisphere}}
```

|                  | electricity production | aluminium production | aluminium foil production | sandwitch package production |
|------------------|------------------------|----------------------|---------------------------|------------------------------|
| bauxite [kg]     |                    0.0 |                 -5.0 |                       0.0 |                          0.0 |
| crude oil [kg]   |                   -0.5 |                  0.0 |                       0.0 |                          0.0 |
| CO2 [kg]         |                    3.0 |                  0.0 |                       0.0 |                          0.0 |
| solid waste [kg] |                    2.0 |                 10.0 |                       0.0 |                          1.0 |


In the paper, the inventory is calculated for 10 sandwitch packages as the final
demand \\(f\\) of the system, which we can quickly do with NumPy now:

```py
{{#include pyipc_from_scratch.py:numsol}}
```

This gives the expected result:

|                  |       |
|------------------|-------|
| bauxite [kg]     | -1.01 |
| crude oil [kg]   | -5.10 |
| CO2 [kg]         | 30.60 |
| solid waste [kg] | 22.52 |


## Inventory calculations

Now we do the same in openLCA via the IPC interface. First, we create an IPC
client that holds our connection data:

```py
{{#include pyipc_from_scratch.py:mkclient}}
```

As we have nothing in our database, we first need to create the units and flow
properties (quantity kinds) in which the flows of the examples are measured:

```py
{{#include pyipc_from_scratch.py:units}}
```

While IPC server is running, you can also continue to use the openLCA user
interface, just do not close the dialog of the server. When you refresh the
navigation, you will see the newly created unit groups and flow properties:

![](./images/py_scratch_units.png)

However, typically you will not create units and flow properties but use the
reference data from openLCA. For example, we can get the flow property `Mass`
by its name:

```py
{{#include pyipc_from_scratch.py:mass}}
```

This will print the JSON serialization of that flow property which is the
internal communication format of the IPC interface (and also the standard
openLCA data exchange format in general):

```json
{
  "@type": "FlowProperty",
  "@id": "b24a123b-f5a1-40fb-a481-afeeb50f6159",
  "lastChange": "2023-01-26T13:36:37.954Z",
  "name": "Mass",
  "unitGroup": {
    "@type": "UnitGroup",
    "@id": "3e912f50-9490-473c-89fc-1393ed2eea03",
    "name": "Mass units"
  },
  "version": "01.00.000"
}
```

Next, we create the flows of the example. In the snippet below, it iterates
over the rows of the data frames and creates a product or elementary flow for
each row, extracting the unit from the row label and mapping the corresponding
flow property:

```py
{{#include pyipc_from_scratch.py:flows}}
```

Then we iterate over the columns of the data frames and create the corrsponding
processes with their inputs and outputs of the flows we just created. One the
diagonal of the technosphere matrix, the reference products of the respective
processes are located and we set the these exchanges as the quantitative
reference of the corresponding process:

```py
{{#include pyipc_from_scratch.py:processes}}
```

When you refresh the navigation in openLCA again, you should now see these
new processes and flows:

![](./images/py_scratch_processes.png)


Now we can calculate the inventory of this system. We create a calculation setup
for the sandwitch packaging process as calculation target. We do not need to set
the unit in the setup as it would take the unit of the quantitative reference of
the process by default, but we need to set the amount as we want the result for
10 sandwitches but the process has 100 as quantitative reference. The
calculation immediately returns a result object but this is maybe not ready yet,
so we wait for the calculation to be finished via the `wait_until_ready`
method:

```py
{{#include pyipc_from_scratch.py:calc}}
```

When the result is ready, we can query the inventory from it:

```py
{{#include pyipc_from_scratch.py:inventory}}
```

This prints the following expected values:

```
          Flow  Is input?  Amount Unit
0          CO2      False   30.60   kg
1    crude oil       True    5.10   kg
2  solid waste      False   22.52   kg
3      bauxite       True    1.01   kg
```

Finally, when we do not need the result anymore, we need to dispose it so that
allocated resources can be freed on the openLCA side:

```py
{{#include pyipc_from_scratch.py:free-inventory}}
```

## Full workbook

Below is the full example. Note that you can run it as a note-book, cell by
cell, in VS Code:

```py
{{#include pyipc_from_scratch.py}}
```
---

[^paper]: Reinout Heijungs: A generic method for the identification of options
    for cleaner products. Ecological Economics, Volume 10, Issue 1, 1994, Pages
    69-81, ISSN 0921-8009,
    [https://doi.org/10.1016/0921-8009(94)90038-8](https://www.sciencedirect.com/science/article/abs/pii/0921800994900388).

[^no]: it is of course just an illustrative example and not real data
