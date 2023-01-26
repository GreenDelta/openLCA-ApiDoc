# %%
import olca_ipc as ipc
import olca_schema as schema
import pandas as pd
import numpy as np


# %%
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
#                             electricity  aluminium   al. foil   packackage
# electricity [MJ]                   1.00      -50.0       -1.0          0.0
# aluminium [kg]                    -0.01        1.0       -1.0          0.0
# aluminium foil [kg]                0.00        0.0        1.0         -1.0
# sandwitch package [Item(s)]        0.00        0.0        0.0        100.0

# %%
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
#                   electricity  aluminium   al. foil   packackage
# bauxite [kg]              0.0       -5.0        0.0          0.0
# crude oil [kg]           -0.5        0.0        0.0          0.0
# CO2 [kg]                  3.0        0.0        0.0          0.0
# solid waste [kg]          2.0       10.0        0.0          1.0

# %%
f = [
    0.0,
    0.0,
    0.0,
    10,
]

s = np.linalg.solve(technosphere.to_numpy(), f)
g = interventions.to_numpy() @ s
print(pd.DataFrame(g, index=interventions.index))
# %%

# %%
client = ipc.Client(8080)


# %%
mass_units = schema.new_unit_group("Mass units", "kg")
energy_units = schema.new_unit_group("Energy units", "MJ")
counting_units = schema.new_unit_group("Counting units", "Item(s)")
mass = schema.new_flow_property("Mass", mass_units)
energy = schema.new_flow_property("Energy", energy_units)
count = schema.new_flow_property("Number of items", counting_units)

client.put_all(
    mass_units,
    energy_units,
    counting_units,
    mass,
    energy,
    count,
)

# %%

print(client.get(schema.FlowProperty, name="Mass").to_json())

# %%
def create_flow(row_label: str) -> schema.Flow:
    pass
