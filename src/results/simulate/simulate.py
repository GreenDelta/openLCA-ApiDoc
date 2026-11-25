import random as rand
import statistics as stats

import olca_ipc as ipc
import olca_schema as o

client = ipc.Client()

# schedule a first iteration
print("run iteration 1")
result = client.simulate(
    o.CalculationSetup(
        target=o.Ref(
            ref_type=o.RefType.ProductSystem,
            id="7d1cbce0-b5b3-47ba-95b5-014ab3c7f569",
        ),
        impact_method=o.Ref(id="99b9d86b-ec6f-4610-ba9f-68ebfe5691dd"),
    )
)
result.wait_until_ready()

# get the result for some indicator from the first iteration
indicator = rand.choice(result.get_impact_categories())
val = lambda: result.get_total_impact_value_of(indicator).amount
xs: list[float] = [val()]

# collect the values from 99 more iterations
for i in range(0, 99):
    print(f"run iteration {i+2}")
    result.simulate_next()
    result.wait_until_ready()
    xs.append(val())

result.dispose()

# plot the results in a simple histogram
bucket_count = 15
quantiles = stats.quantiles(xs, n=bucket_count + 1, method="inclusive")
buckets = [0] * bucket_count
for x in xs:
    bucket = 0
    for i in range(1, bucket_count):
        if x <= quantiles[i]:
            bucket += 1
    buckets[bucket] += 1
for i in buckets:
    print(f"|{'#' * i}")

# ...
# run iteration 98
# run iteration 99
# run iteration 100
#
# |#######
# |######
# |######
# |######
# |######
# |#######
# |######
# |######
# |######
# |######
# |#######
# |######
# |######
# |######
# |#############
