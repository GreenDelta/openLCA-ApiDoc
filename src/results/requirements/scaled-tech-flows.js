const v = await call("result/scaled-tech-flows-of", {
  "@id": "77ccaffa-9d79-4f38-8da5-4413469b8a7b",
  techFlow: {
    provider: {
      "@type": "Process",
      "@id": "ff6b1c80-03b2-4433-adaf-66c51063b078",
    },
    flow: {
      "@type": "Flow",
      "@id": "759b89bd-3aa6-42ad-b767-5bb9ef5d331d",
    }
  }
});
console.log(v);
// [
//   {
//     techFlow: { provider: [Object], flow: [Object] },
//     amount: 0.0029162004774116275
//   },
//   { techFlow: ...
