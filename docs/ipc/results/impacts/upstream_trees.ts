import * as o from "https://raw.githubusercontent.com/GreenDelta/olca-ipc.ts/main/mod.ts";

// ANCHOR: body
async function main() {

  // connect to a local server running on port 8080
  const client = o.IpcClient.on(8080);
  const setup = o.CalculationSetup.of({
    target: o.Ref.of({
      id: "d3a9a9b2-ec3e-4811-8617-ae853573b50b",
      refType: o.RefType.ProductSystem,
    }),
    impactMethod: o.Ref.of({
      id: "07370e48-dde9-4248-9a9b-7255f701da89",
    })
  });
  const result = await client.calculate(setup);
  await result.untilReady();

  // select the first best impact category and expand a tree for it
  const indicator = (await result.getImpactCategories())[0];
  console.log(`upstream tree for ${indicator.name}`);
  await expand(result, indicator, []);

  // as always, dispose the result
  result.dispose();
}

async function expand(r: o.IpcResult, indicator: o.Ref, path: o.TechFlow[]) {
  const level = path.length;
  const indent = "  ".repeat(level);
  const unit = indicator.refUnit;
  const nodes = await r.getUpstreamImpactsOf(indicator, path);
  for (const node of nodes) {
    if (node.result === 0) {
      continue;
    }
    const name = node.techFlow?.provider?.name;
    const value = node.result?.toExponential(2);
    console.log(`${indent}- ${value} ${unit} :: ${name}`);

    // we stop the expansion after 3 levels; you can set other cut-offs like
    // result contributions etc.
    if (level < 3) {
      const next = path.slice();
      next.push(node.techFlow!);
      await expand(r, indicator, next);
    }
  }
}

main();

/*
upstream tree for Photochemical ozone formation
- 2.66e-2 kg NMVOC eq ...
  - 2.66e-2 kg NMVOC eq ...
    - 1.13e-2 kg NMVOC eq ...
      - 4.69e-3 kg NMVOC eq ...
      - 4.53e-3 kg NMVOC eq ...
      - 1.41e-3 kg NMVOC eq ...

    - 8.72e-3 kg NMVOC eq ...
      - 4.18e-3 kg NMVOC eq ...
      - 4.18e-3 kg NMVOC eq ...
      - 1.01e-4 kg NMVOC eq ...
*/
// ANCHOR_END: body
