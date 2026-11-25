# Introduction

With the openLCA API, you can automate workflows, read and write data, run
calculations, analyse results, or even build your own user interface on top of
openLCA. To enable this, openLCA exposes an inter-process communication (IPC)
protocol that works with any programming language (including Python, JavaScript,
.NET, Go, or Java[^java_note]) and can be served either directly by the desktop
application or by a server running only the openLCA back-end.

This documentation covers the available API methods in detail with many
examples. You can **modify and try** the interactive JavaScript examples right
inside this manual. Simply start the IPC server in openLCA (see below) and click
the `Run` button beneath an example:

```js,run
// list the impact assessment methods of the active database
const methods = await call("data/get/descriptors", { "@type": "ImpactMethod" });
console.log(`found ${methods.length} impact assessment methods:`);
for (const method of methods) {
  console.log(`- ${method.name}`);
}
```

The example uses the small helper function `call` for sending requests to the
IPC server, see [running the JavaScript
examples](#running-the-javascript-examples) below.


## Starting an IPC server

In the openLCA desktop application, you can start an IPC server for the
currently active database from the tools menu: `Tools > Developer tools > IPC
Server`. This brings up the following dialog where you can start and stop the
server:

![Starting an IPC server in openLCA](images/start-ipc-server.png)

For headless stand-alone servers, please see the next chapter.


## Available protocols

In the dialog, you can select to start a standard IPC server or a
[gRPC](https://grpc.io/) server. The standard IPC server is based on the
[JSON-RPC](https://www.jsonrpc.org/) protocol provided over HTTP. This protocol
is easy to implement as it is just based on JSON and HTTP. For example, it can
be directly used from a web-browser using the [Fetch
API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

The [gRPC](https://grpc.io/) protocol is another option, especially when you are
already familiar with it or when your platform has good support for this option.
In this case, you can just generate the client side interface from the [openLCA
service declaration](https://github.com/GreenDelta/olca-proto).

A third option is the
[REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API
provided by openLCA web-services. This protocol is also just based on JSON and
HTTP and especially useful when integrating the openLCA back-end into
web-applications.

In this documentation we try to cover all these protocols as they just provide
an interface to the same service back-end of the openLCA kernel. Also, all of
these protocols are based on the [openLCA
Schema](http://greendelta.github.io/olca-schema/) as the data exchange format.
Thus, parameter and return types in this documentation often link to their
respective description in the openLCA schema documentation.


## Client libraries and example applications

The table below lists some client libraries and demo applications based on the
openLCA IPC protocol:

|                                                                       | Language              | Type           | Protocol       |
| --------------------------------------------------------------------- | --------------------- | -------------- | -------------- |
| [olca-ipc.py](https://github.com/GreenDelta/olca-ipc.py)              | Python                | Client library | JSON-RPC, REST |
| [olca-ipc.ts](https://github.com/GreenDelta/olca-ipc.ts)              | JavaScript/TypeScript | Client library | JSON-RPC, REST |
| [ProtoLCA-Demo](https://github.com/msrocka/ProtoLCA-Demo)             | C#                    | Demo           | gRPC           |
| [protolca-js-example](https://github.com/msrocka/protolca-js-example) | JavaScript/Node       | Client library | gRPC           |
| [olcarpc.py](https://github.com/GreenDelta/olcarpc.py)                | Python                | Client library | gRPC           |


## Running the JavaScript examples

The JavaScript examples in this documentation can be edited and executed
directly in the browser with the `Run` button below an example (or with
`Ctrl+Enter` in the example). For this, an IPC server needs to run on port
`8080` (in openLCA: `Tools > Developer tools > IPC Server`).

Some examples use the following helper function `call` for the JSON-RPC calls.
It is available in the runnable examples of this documentation; when you use
such an example outside of this documentation, you need to add this function:

```js
async function call(method, params) {
  const resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  const r = await resp.json();
  if (r.error) {
    throw new Error(r.error.message);
  }
  return r.result;
}
```


----

[^java_note]: openLCA is a Java application and if your application is written in
a language that also runs on the Java virtual machine (like Java, Kotlin, Scala,
Clojure etc.) it is recommended to directly use the [openLCA Java
API](https://github.com/GreenDelta/olca-modules) instead of an IPC server. The
kernel of openLCA can be used independently of the user interface and can be
integrated as a set of standard Java libraries in JVM based applications. For
example, the integrated Python editor in openLCA is in fact a Python
implementation for the JVM ([Jython](https://www.jython.org/)), with which you
can call the Java API of openLCA.
