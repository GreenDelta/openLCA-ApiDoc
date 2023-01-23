(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "data/get",
      params: {
        "@type": "Process",
        "@id": "eacc4872-6f4e-4ff1-946e-c1bddeda24be"
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: {
  //     "@type": "Process",
  //     "@id": "eacc4872-6f4e-4ff1-946e-c1bddeda24be",
  //     name: "blast furnace gas, Recycled Content cut-off",
  //     processType: "LCI_RESULT",
})();