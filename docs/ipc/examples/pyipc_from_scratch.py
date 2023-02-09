# %%
# ANCHOR: imports
import olca_ipc as ipc
import olca_schema as o
import pandas as pd
import numpy as np

from typing import Callable

# ANCHOR_END: imports


# %%
# ANCHOR: techsphere
technosphere = pd.DataFrame(
    data=[
        [1.0, -50.0, -1.0, 0.0],
        [-0.01, 1.0, -1.0, 0.0],
        [0.0, 0.0, 1.0, -1.0],
        [0.0, 0.0, 0.0, 100],
    ],
    columns=[
        "electricity production",
        "aluminium production",
        "aluminium foil production",
        "sandwitch package production",
    ],
    index=[
        "electricity [MJ]",
        "aluminium [kg]",
        "aluminium foil [kg]",
        "sandwitch package [Item(s)]",
    ],
)
print(technosphere)
# ANCHOR_END: techsphere


# %%
# ANCHOR: envisphere
interventions = pd.DataFrame(
    data=[
        [0.0, -5.0, 0.0, 0.0],
        [-0.5, 0.0, 0.0, 0.0],
        [3.0, 0.0, 0.0, 0.0],
        [2.0, 10.0, 0.0, 1.0],
    ],
    columns=technosphere.columns,
    index=[
        "bauxite [kg]",
        "crude oil [kg]",
        "CO2 [kg]",
        "solid waste [kg]",
    ],
)
print(interventions)
# ANCHOR_END: envisphere


# %%
# ANCHOR: numsol
f = [
    0.0,
    0.0,
    0.0,
    10,
]
s = np.linalg.solve(technosphere.to_numpy(), f)
g = interventions.to_numpy() @ s
print(pd.DataFrame(g, index=interventions.index))
# ANCHOR_END: numsol


# %%
# ANCHOR: mkclient
client = ipc.Client(8080)
# ANCHOR_END: mkclient


# %%
# ANCHOR: units
mass_units = o.new_unit_group("Mass units", "kg")
energy_units = o.new_unit_group("Energy units", "MJ")
counting_units = o.new_unit_group("Counting units", "Item(s)")
mass = o.new_flow_property("Mass", mass_units)
energy = o.new_flow_property("Energy", energy_units)
count = o.new_flow_property("Number of items", counting_units)

client.put_all(
    mass_units,
    energy_units,
    counting_units,
    mass,
    energy,
    count,
)
# ANCHOR_END: units


# %%
# ANCHOR: mass
print(client.get(o.FlowProperty, name="Mass").to_json())
# ANCHOR_END: mass


# %%
# ANCHOR: flows
def create_flow(
    row_label: str, fn: Callable[[str, o.FlowProperty], o.Flow]
) -> o.Flow:
    parts = row_label.split("[")
    name = parts[0].strip()
    unit = parts[1][0:-1].strip()
    match unit:
        case "kg":
            prop = mass
        case "MJ":
            prop = energy
        case "Item(s)":
            prop = count
    flow = fn(name, prop)
    client.put(flow)
    return flow


tech_flows = [create_flow(label, o.new_product) for label in technosphere.index]
envi_flows = [
    create_flow(label, o.new_elementary_flow) for label in interventions.index
]
# ANCHOR_END: flows


# %%
# ANCHOR: processes
def create_process(index: int, name: str) -> o.Process:
    process = o.new_process(name)

    def exchange(flow: o.Flow, value: float) -> o.Exchange | None:
        if value == 0:
            return None
        if value < 0:
            return o.new_input(process, flow, abs(value))
        else:
            return o.new_output(process, flow, value)

    for (i, tech_flow) in enumerate(tech_flows):
        value = technosphere.iat[i, index]
        e = exchange(tech_flow, value)
        if e and i == index:
            e.is_quantitative_reference = True

    for (i, envi_flow) in enumerate(envi_flows):
        value = interventions.iat[i, index]
        exchange(envi_flow, value)

    client.put(process)
    return process


processes = [
    create_process(index, name)
    for (index, name) in enumerate(technosphere.columns)
]
# ANCHOR_END: processes


# %%
# ANCHOR: calc
setup = o.CalculationSetup(
    target=o.Ref(ref_type=o.RefType.Process, id=processes[3].id),
    unit=count.unit_group.ref_unit,  # "Item(s)"
    amount=10,
)
result = client.calculate(setup)
result.wait_until_ready()
# ANCHOR_END: calc


# %%
# ANCHOR: inventory
inventory = result.get_total_flows()
print(
    pd.DataFrame(
        data=[
            (
                i.envi_flow.flow.name,
                i.envi_flow.is_input,
                i.amount,
                i.envi_flow.flow.ref_unit,
            )
            for i in inventory
        ],
        columns=["Flow", "Is input?", "Amount", "Unit"],
    )
)
# ANCHOR_END: inventory


# %%
# ANCHOR: free-inventory
result.dispose()
# ANCHOR_END: free-inventory

# %%
