const v = await call("result/impact-contributions-of", {
  "@id": "86b36d3b-1dba-4804-bd61-dc5bcaf7c86c",
  impactCategory: {
    "@id": "dbdd01d5-2be4-3ba4-8127-de89f065fda1",
  },
});
console.log(v);
// [
//   {
//     techFlow: { provider: [Object], flow: [Object] },
//     amount: 0.00008582892489209728
//   },
//   { techFlow: { provider: [Object], flow: [Object] },
//     amount: 2.023594297933216 },
// ...
