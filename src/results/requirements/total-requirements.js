const v = await call("result/total-requirements", {
  "@id": "fa78990c-3f88-455a-9f8f-bd9e536bac28",
});
console.log(v);
// [
//   { techFlow: { provider: [Object], flow: [Object] }, amount: 1 },
//   { techFlow: { provider: [Object], flow: [Object] }, amount: 1 },
//   { techFlow: {
//       provider: [Object],
//       flow: [Object] },
//        amount: 15.151515151515152 }, ..
