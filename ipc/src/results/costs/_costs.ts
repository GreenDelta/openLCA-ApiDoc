import * as o from "https://raw.githubusercontent.com/GreenDelta/olca-ipc.ts/main/mod.ts";

const SYSTEM = "99ad5640-b73c-4387-b03c-ee0a9c6a7d6b";

async function main() {
  const client = o.IpcClient.on(8080);
  const result = await client.calculate(o.CalculationSetup.of({
    target: o.Ref.of({
      refType: o.RefType.ProductSystem,
      id: SYSTEM,
    }),
    withCosts: true,
  }));
  await result.untilReady();

  // ANCHOR: total-costs
  const totals = await result.getTotalCosts();
  const code = totals.currency?.refUnit;
  console.log(`total costs: ${totals.amount} ${code}`);
  // total costs: 60 USD
  // ANCHOR_END: total-costs

  // ANCHOR: contributions
  const contributions = await result.getCostContributions();
  for (const c of contributions) {
    console.log(`${c.techFlow?.provider?.name}: ${c.amount} ${code}`);
  }
  // Q: 15 USD
  // P: 45 USD
  // ANCHOR_END: contributions
}

main();
