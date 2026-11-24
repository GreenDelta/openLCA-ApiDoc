const o = await import("https://cdn.jsdelivr.net/npm/olca-ipc@2.6.2/+esm");

const client = o.IpcClient.on(8080);
const result = await client.calculate(o.CalculationSetup.of({
  target: o.Ref.of({
    refType: o.RefType.ProductSystem,
    id: "99ad5640-b73c-4387-b03c-ee0a9c6a7d6b",
  }),
  withCosts: true,
}));
await result.untilReady();

// the currency code is taken from the total result
const code = (await result.getTotalCosts()).currency?.refUnit;
const contributions = await result.getCostContributions();
for (const c of contributions) {
  console.log(`${c.techFlow?.provider?.name}: ${c.amount} ${code}`);
}
// Q: 15 USD
// P: 45 USD

result.dispose();
