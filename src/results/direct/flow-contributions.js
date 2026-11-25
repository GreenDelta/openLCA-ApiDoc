const v = await call("result/flow-contributions-of", {
  "@id": "66dcc7d0-ce47-46bf-b77a-ada4b4c95169",
  enviFlow: {
    flow: {
      "@type": "Flow",
      "@id": "5f7aad3d-566c-4d0d-ad59-e765f971aa0f",
      name: "Methane, fossil",
    },
  }
});
console.log(v);
// [
//   {
//     techFlow: { provider: [Object], flow: [Object] },
//     amount: 1.5185665316633185e-8
//   },
//   {
//     techFlow: { provider: [Object], flow: [Object] },
//     amount: 0.0018045126002407595
//   }, ...
