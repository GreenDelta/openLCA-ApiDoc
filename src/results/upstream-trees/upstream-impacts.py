import olca_ipc as ipc
import olca_schema as o


def main():

    # calculate a result
    client = ipc.Client(8080)
    setup = o.CalculationSetup(
        target=o.Ref(
            id="d3a9a9b2-ec3e-4811-8617-ae853573b50b",
            ref_type=o.RefType.ProductSystem,
        ),
        impact_method=o.Ref(id="07370e48-dde9-4248-9a9b-7255f701da89"),
    )
    result = client.calculate(setup)
    result.wait_until_ready()

    # select the first best impact category and expand a tree for it
    indicator = result.get_impact_categories()[0]
    print(f"upstream tree for {indicator.name}")
    expand(result, indicator, [])

    # as always, dispose the result
    result.dispose()


def expand(r: ipc.IpcResult, indicator: o.Ref, path: list[o.TechFlow]):
    level = len(path)
    indent = "  " * level
    unit = indicator.ref_unit
    nodes = r.get_upstream_impacts_of(indicator, path)
    for node in nodes:
        if node.result == 0 or not node.tech_flow:
            continue
        name = node.tech_flow.provider.name
        value = node.result
        print(f"{indent}- {value:.2E} {unit} :: {name}")

        # we stop the expansion after 3 levels; you can set other cut-offs like
        # result contributions etc.
        if level < 3:
            expand(r, indicator, path + [node.tech_flow])
    pass


if __name__ == "__main__":
    main()
