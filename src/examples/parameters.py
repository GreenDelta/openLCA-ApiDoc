# %%
# ANCHOR: connect
import olca_schema as o
import olca_ipc.rest as rest
import json

client = rest.RestClient("http://192.168.142.136:3000")
# ANCHOR_END: connect

# %%
# ANCHOR: models
models = client.get_descriptors(o.ProductSystem)
for model in models:
    print(f"{model.name} :: {model.id}")
model = models[0]
# ANCHOR_END: models
assert model.id

# %%
# ANCHOR: methods
methods = client.get_descriptors(o.ImpactMethod)
for method in methods:
    print(f"{method.name} :: {method.id}")
method = methods[0]
# ANCHOR_END: methods

# %%
# ANCHOR: setup
setup = o.CalculationSetup(
    target=model,
    impact_method=method,
)
print(json.dumps(setup.to_dict(), indent=2))
# ANCHOR_END: setup

# %%
# ANCHOR: result
result = client.calculate(setup)
result.wait_until_ready()
impacts = result.get_total_impacts()
for i in impacts:
    assert i.impact_category
    print(f"{i.impact_category.name} {i.amount} {i.impact_category.ref_unit}")
result.dispose()
# ANCHOR_END: result

# %%
# ANCHOR: params
parameters = client.get_parameters(o.ProductSystem, model.id)
for param in parameters:
    print(f"parameter: {param.name} = {param.value}")
param = parameters[0]
# ANCHOR_END: params

# %%
# ANCHOR: loop
for x in range(0, 55, 5):
    setup = o.CalculationSetup(
        target=model,
        impact_method=method,
        parameters=[
            o.ParameterRedef(name=param.name, value=x, context=param.context)
        ],
    )
    result = client.calculate(setup)
    assert result
    result.wait_until_ready()
    impacts = result.get_total_impacts()
    for i in impacts:
        if i.impact_category.name == "Climate change":
            print(f"{param.name}: {x} => {i.amount : .3f} kg CO2 eq")
    result.dispose()
# ANCHOR_END: loop

# %%
