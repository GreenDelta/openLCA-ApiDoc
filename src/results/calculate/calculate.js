const v = await call("result/calculate", {
  target: {
    "@type": "ProductSystem",
    "@id": "0db1eda6-a34e-4c82-b06b-19f27c92495a"
  },
  impactMethod: {
    "@id": "b4571628-4b7b-3e4f-81b1-9a8cca6cb3f8",
  },
  nwSet: {
    "@id": "867fe119-0b5c-38a0-a3e6-1d845ffaedd5",
  },
  withCosts: true,
  amount: 1.0
});
console.log(v);
// {
//   "@id": "e316a369-bf5b-4c25-a61f-3492cfca9535",
//   isReady: false,
//   isScheduled: true,
//   time: 1671187585187
// }
