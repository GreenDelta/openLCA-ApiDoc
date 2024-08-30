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
  });
  const result = await client.calculate(setup);
  await result.untilReady();

  // select the first best inventory flow and expand a tree for it
  const flow = (await result.getEnviFlows())[0];
  console.log(`upstream tree for ${flow.flow?.name} (${flow.flow?.category})`);
  await expand(result, flow, []);

  // as always, dispose the result
  result.dispose();
}

async function expand(r: o.IpcResult, flow: o.EnviFlow, path: o.TechFlow[]) {
  const level = path.length;
  const indent = "  ".repeat(level);
  const unit = flow.flow?.refUnit;
  const nodes = await r.getUpstreamInterventionsOf(flow, path);
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
      await expand(r, flow, next);
    }
  }
}

main();

/*
upstream tree for COD, Chemical Oxygen Demand (Elementary flows/Emission to water/ground water)
- 1.73e-9 t :: ...
  - 1.73e-9 t :: ...
    - 7.21e-10 t :: ...
      - 3.45e-10 t :: ...
      - 2.04e-10 t :: ...
      - ...
    - 5.77e-10 t :: ...
      - 4.40e-10 t :: ...
      - 7.53e-11 t :: ...
      - 3.21e-11 t :: ...
      - ...
*/
// ANCHOR_END: body
