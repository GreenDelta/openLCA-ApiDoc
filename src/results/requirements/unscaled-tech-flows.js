const v = await call("result/unscaled-tech-flows-of", {
  "@id": "66dcc7d0-ce47-46bf-b77a-ada4b4c95169",
  "techFlow": {
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
//   { techFlow: { provider: [Object], flow: [Object] }, amount: 3.6 },
//   { techFlow: { ...
