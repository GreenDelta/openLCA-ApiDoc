(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/total-flows",
      params: {
        "@id": "66dcc7d0-ce47-46bf-b77a-ada4b4c95169",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     { enviFlow: { flow: [Object], isInput: false }, amount: 5.316452367058923e-12 },
  //     { enviFlow: { flow: [Object], isInput: false }, amount: 0.0000020503441278781976 },
  //     { enviFlow: { flow: [Object], isInput: false }, amount: 2.2757672132330865e-10 },
  //     { enviFlow: { flow: [Object], isInput: false }, amount: 5.003477809709274e-7 },
  //     { enviFlow: { flow: [Object], isInput: true }, amount: 0.0013196599415652454 },
})();
