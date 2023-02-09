# %%
import random

# %%
# ANCHOR: calculate
import olca_ipc as ipc
import olca_schema as o

# create a calculation setup
setup = o.CalculationSetup(
    target=o.Ref(
        ref_type=o.RefType.ProductSystem,
        id="0db1eda6-a34e-4c82-b06b-19f27c92495a",
    ),
    impact_method=o.Ref(id="b4571628-4b7b-3e4f-81b1-9a8cca6cb3f8"),
    nw_set=o.Ref(id="867fe119-0b5c-38a0-a3e6-1d845ffaedd5"),
)

# run a calculation
client = ipc.Client()
result: ipc.Result = client.calculate(setup)
# ANCHOR_END: calculate


# %%
# ANCHOR: get_state
state = result.get_state()
if state.error:
    print(f"calculation failed: {state.error}")
    exit(-1)

# actively waiting for a result
import time

while not result.get_state().is_ready:
    time.sleep(1)
    print("waiting ...")

# or better do this:
state = result.wait_until_ready()
print(f"result id: {state.id}")
# ANCHOR_END: get_state


# %%
# ANCHOR: tech-flows
tech_flows = result.get_tech_flows()
print(f"n = {len(tech_flows)} technosphere flows")
tech_flow = random.choice(tech_flows)
print(
    f"selected: {tech_flow.provider.name}",
    f'{{provider: {{"@id": "{tech_flow.provider.id}"}},',
    f'flow: {{"@id": "{tech_flow.flow.id}"}}}}',
)
# ANCHOR_END: tech-flows


# %%
# ANCHOR: impact-categories
impact_categories = result.get_impact_categories()
print(f"k = {len(impact_categories)} impact categories")
impact_category = random.choice(impact_categories)
print(f'selected: {impact_category.name} {{"@id": "{impact_category.id}"}}')
# ANCHOR_END: impact-categories

# %%
