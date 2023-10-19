// we use it as Deno module here; but it is the same for npm and friends
// with Deno, run it like this: deno run --allow-net sankey.ts
import * as o from "https://raw.githubusercontent.com/GreenDelta/olca-ipc.ts/main/mod.ts";

async function main() {
  const client = o.RestClient.on("http://localhost:8080");

  // calculate the result
  const result = await client.calculate(o.CalculationSetup.of({
    target: o.Ref.of({
      refType: o.RefType.ProductSystem,
      id: "7d1cbce0-b5b3-47ba-95b5-014ab3c7f569",
    }),
    impactMethod: o.Ref.of({ id: "99b9d86b-ec6f-4610-ba9f-68ebfe5691dd" }),
  }));
  await result.untilReady();

  const g = await result.getSankeyGraph(o.SankeyRequest.of({
    impactCategory: o.Ref.of({ id: "b8658d7c-9c6e-4361-acbf-3bd6d9fef8c9" }),
    maxNodes: 10,
  }));
  console.log(
    `loaded a graph with ${g.nodes?.length} nodes and ${g.edges?.length} edges`,
  );
  result.dispose();
}

main();
