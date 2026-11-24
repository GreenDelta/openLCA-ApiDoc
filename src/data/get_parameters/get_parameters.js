(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "data/get/parameters",
      params: {
        "@type": "ProductSystem",
        "@id": "0db1eda6-a34e-4c82-b06b-19f27c92495a",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     { name: "param_a", value: 994, isProtected: false },
  //     { name: "param_b", value: 0.7237, isProtected: false },
  //     { name: "param_c", value: 0, isProtected: false },
})();