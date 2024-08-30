import olca_schema as o
import olca_ipc as ipc
import olca_ipc.utree as utree

# maximum number of levels and child nodes that should be expanded
MAX_EXPAND_LEVELS = 3
MAX_EXPAND_NODES = 5


def main():
    # calculate a result
    client = ipc.Client()
    setup = o.CalculationSetup(
        target=o.Ref(
            ref_type=o.RefType.Process,
            id="2d1b0c1f-dd8f-3aea-bc50-bbd10acbd86d",
        ),
        impact_method=o.Ref(id="99b9d86b-ec6f-4610-ba9f-68ebfe5691dd"),
    )
    result = client.calculate(setup)
    result.wait_until_ready()

    # select the first impact category for the tree
    ref = result.get_impact_categories()[0]
    print(f"\nTree for {ref.name}, results in {ref.ref_unit}:")

    # create the upstream tree and expand it
    root = utree.of(result, ref)
    expand(root, 0)

    # always dispose the result
    result.dispose()


def expand(node: utree.Node, level: int):
    """This function recursively expands an upstream tree.

    The maximum number of levels and maximum number of child nodes are defined
    with the constants above. Note that an upstream tree can be
    """
    indent = "  " * level
    print(f"{indent} - {node.provider.name} : {node.result}")
    if level < MAX_EXPAND_LEVELS:
        for c in node.childs[0:MAX_EXPAND_NODES]:
            expand(c, level + 1)


if __name__ == "__main__":
    main()
