# Calculation parameters

This example shows the calculation of an LCA model with different parameter
values. We will use the [olca-ipc.py](https://github.com/GreenDelta/olca-ipc.py)
package and the REST API in this example. The package requires Python 3.12 or
newer and can be installed via pip:

```
pip install olca-ipc
```

With a clone of this documentation, you can also run the example directly with
[uv](https://docs.astral.sh/uv/), which installs the required packages
automatically:

```
uv run src/appendix/examples/parameters.py
```

We connect to a REST API in this example and assume that it is running at
`http://localhost:3000`, e.g. a gdt-server Docker container as described in
[stand-alone servers](../servers.md):

```py
{{#include parameters.py:connect}}
```

To check that we can access the server, we can also just call this URL in a
browser: `http://localhost:3000/api/version`, which should then return the
API version of that server.

Next, we check which models (product systems) are available and select the
first model for our calculations:

```py
{{#include parameters.py:models}}
```

This should print something like this depending on the available models:

```
battery model without EoL :: 59327d11-9a0d-477b-9cc0-060ca74b6327
battery model with EoL :: eb31db8a-8102-453d-a549-be989e83c592
```

Again, we could just query an URL for this, for the example:
`http://localhost:3000/data/product-systems`

We do the same for the available impact assessment methods (
`http://localhost:3000/data/methods`):

```py
{{#include parameters.py:methods}}
```

This should print something like this:

```
EF 3.0 Method (adapted) :: b4571628-4b7b-3e4f-81b1-9a8cca6cb3f8
...
```

With the reference to a product system and LCIA method, we can create a
calculation setup:

```py
{{#include parameters.py:setup}}
```

The objects of the openLCA Schema can be easily translated to JSON as done
in the snippet above. This is the payload that is posted to the server in a
[calculation request](../../results/calculate/calculate.md):

```json
{
  "impactMethod": {
    "@type": "ImpactMethod",
    "@id": "b4571628-4b7b-3e4f-81b1-9a8cca6cb3f8",
    "category": "openLCA LCIA methods 2_1_2",
    "name": "EF 3.0 Method (adapted)"
  },
  "target": {
    "@type": "ProductSystem",
    "@id": "59327d11-9a0d-477b-9cc0-060ca74b6327",
    "name": "battery model without EoL"
  }
}
```

We can calculate the setup like this:

```py
{{#include parameters.py:result}}
```

As shown above, we should dispose a result when we do not need it anymore. The
snippet prints something like:

```
...
Climate change 0.7891638059816873 kg CO2 eq
...
```

For parameterized models, the default parameter values are applied in a
calculation but we can change them in each calculation. We can query the
parameters of a model like this:

```py
{{#include parameters.py:params}}
```

For our example, we just have a single parameter, `number_of_recharges` with
a default value of `1.0`:

```
parameter: number_of_recharges = 1.0
```

The corresponding URL is:
`http://localhost:3000/data/product-systems/59327d11-9a0d-477b-9cc0-060ca74b6327/parameters`

Finally, we run a set of calculations over a parameter range:

```py
{{#include parameters.py:loop}}
```

For the example, it prints something like this:

```
number_of_recharges: 0 =>  0.788 kg CO2 eq
number_of_recharges: 5 =>  0.792 kg CO2 eq
number_of_recharges: 10 =>  0.796 kg CO2 eq
number_of_recharges: 15 =>  0.800 kg CO2 eq
number_of_recharges: 20 =>  0.803 kg CO2 eq
number_of_recharges: 25 =>  0.807 kg CO2 eq
number_of_recharges: 30 =>  0.811 kg CO2 eq
number_of_recharges: 35 =>  0.814 kg CO2 eq
number_of_recharges: 40 =>  0.818 kg CO2 eq
number_of_recharges: 45 =>  0.822 kg CO2 eq
number_of_recharges: 50 =>  0.826 kg CO2 eq
```
