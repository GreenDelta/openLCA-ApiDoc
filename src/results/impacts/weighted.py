import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()

# get the impact assessment method
method = client.get(o.ImpactMethod, "bf665139-3159-45ef-9b00-f439251d2b5b")

# select the first normalisation & weighting set for the example;
# make sure the method has nw-sets
nwset = method.nw_sets[0]

# run a calculation
result = client.calculate(o.CalculationSetup(
    target=o.Ref(
        id="7d1cbce0-b5b3-47ba-95b5-014ab3c7f569",
        ref_type=o.RefType.ProductSystem,
    ),
    impact_method=method.to_ref(),
    nw_set=nwset.to_ref(),
))
result.wait_until_ready()

# print the weighted results
for wr in result.get_weighted_impacts():
    print(f"{wr.impact_category.name} :: {wr.amount} {nwset.weighted_score_unit}")

result.dispose()
