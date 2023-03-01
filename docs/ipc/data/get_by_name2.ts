import * as ipc from "https://raw.githubusercontent.com/msrocka/olca-ipc.ts/main/mod.ts";

async function main() {
  const client = ipc.IpcClient.on(8080);
  const flow = await client.get(ipc.RefType.Flow, {name: "carbon dioxide"});
  console.log(flow);
}
main();

