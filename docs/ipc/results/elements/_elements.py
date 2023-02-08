# %%
import olca_ipc as ipc
import olca_schema as schema
import olca_schema.results as results
import pandas as pd

setup = results.CalculationSetup(
    target=schema.Ref(
        model_type="Process",
        id="b97a8cbf-d849-3b91-883c-38456009c61d",
        name="Fresh wheat, corn, rice, and other grains; at farm",
    ),
    impact_method=schema.Ref(
        id="1d6a5f29-21e6-305a-9173-ec8598e26a70",
        name="Impact potential",
    ),
    amount=1.0,  # USD
)

client = ipc.Client(8080)
result = client.calculate(setup)
result.wait_until_ready()

# %%
# ANCHOR: tech-flows
tech_flows = result.get_tech_flows()
print(
    pd.DataFrame(
        [
            (tf.provider.name, tf.flow.name, tf.flow.ref_unit)
            for tf in tech_flows
        ],
        columns=["Provider", "Flow", "Unit"],
    ).head()
)
#                               Provider                      Flow  Unit
# 0  Fresh wheat, corn, rice, and oth...  Fresh wheat, corn, ric...  USD
# 1       Synthetic dyes and pigments...       Synthetic dyes an...  USD
# 2              Cardboard containers...              Cardboard ...  USD
# 3  Synthetic rubber and artificial ...  Synthetic rubber and a...  USD
# 4                  Packaged poultry...                  Packag...  USD

# ANCHOR_END: tech-flows


# %%
# ANCHOR: envi-flows
envi_flows = result.get_envi_flows()
print(
    pd.DataFrame(
        [
            (ef.is_input, ef.flow.name, ef.flow.category, ef.flow.ref_unit)
            for ef in envi_flows
        ],
        columns=["Is input?", "Flow", "Category", "Unit"],
    ).head()
)

#    Is input?          Flow                                     Category Unit
# 0      False   1,4-dioxane             Elementary Flows/air/unspecified   kg
# 1      False      oryzalin            Elementary Flows/soil/groundwater   kg
# 2      False    Sethoxydim            Elementary Flows/soil/groundwater   kg
# 3      False  Chlorpyrifos  Elementary Flows/air/low population density   kg
# 4      False          lead             Elementary Flows/air/unspecified   kg
# ANCHOR_END: envi-flows


# %%
# ANCHOR: impacts
impact_categories = result.get_impact_categories()
print(
    pd.DataFrame(
        [(i.name, i.ref_unit) for i in impact_categories],
        columns=["Impact category", "Unit"],
    )
)

#   Impact category         Unit
# 0            OZON  kg CFC11-eq
# 1            EUTR      kg N eq
# 2            SMOG     kg O3 eq
# 3             HNC         CTUh
# 4            ETOX         CTUe
# 5              HC         CTUh
# 6            HRSP  kg PM2.5 eq
# 7             GCC    kg CO2 eq
# 8            HTOX         CTUh
# 9            ACID    kg SO2-eq

# ANCHOR_END: impacts

# %%
result.dispose()
