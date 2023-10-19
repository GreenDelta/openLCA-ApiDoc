import olca_ipc.rest as ipc
import olca_schema as o

# in this example we use the REST client
client = ipc.RestClient("http://localhost:8080")

# calculate a result for the default quantitative reference of a product system
result = client.calculate(
    o.CalculationSetup(
        target=o.Ref(
            ref_type=o.RefType.ProductSystem,
            id="7d1cbce0-b5b3-47ba-95b5-014ab3c7f569",
        ),
        impact_method=o.Ref(id="99b9d86b-ec6f-4610-ba9f-68ebfe5691dd"),
    )
)
result.wait_until_ready()

# get the Sankey graph for an impact category
g = result.get_sankey_graph(
    o.SankeyRequest(
        impact_category=o.Ref(id="b8658d7c-9c6e-4361-acbf-3bd6d9fef8c9"),
        max_nodes=10,
    )
)
print(f"loaded a graph with {len(g.nodes)} nodes and {len(g.edges)} edges")
# prints something like: loaded a graph with 10 nodes and 14 edges

# finally, dispose the result
result.dispose()
