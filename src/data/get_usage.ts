(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "data/get/usage",
      params: {
        "@type": "Flow",
        "@id": "7f6bb533-2d3c-43a6-ac60-6eef299d7c52",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     { "@type": "Process", "@id": "71dab7ae-...", name: "steel production", ... },
  //     { "@type": "ImpactCategory", "@id": "...", name: "Climate change", ... },
  //     ...
  //   ],
  //   id: 1
  // }
})();
