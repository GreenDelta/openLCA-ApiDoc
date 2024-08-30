(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/total-flow-values-of",
      params: {
        "@id": "66dcc7d0-ce47-46bf-b77a-ada4b4c95169",
        enviFlow: {
          flow: {
            "@type": "Flow",
            "@id": "5f7aad3d-566c-4d0d-ad59-e765f971aa0f",
            name: "Methane, fossil",
          },
        }
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     {
  //       techFlow: { provider: [Object], flow: [Object] },
  //       amount: 0.0037571867032375776
  //     },
  //     {
  //       techFlow: { provider: [Object], flow: [Object] },
  //       amount: 0.000006654150590167164
  //     }, ...
})();
