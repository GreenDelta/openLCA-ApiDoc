# openLCA-ApiDoc
This repository contains the generated documentation of the Java and gRPC API of
the openLCA 2.0 backend. The Java API can be used with any programming language
that runs on the [JVM](https://adoptopenjdk.net/) (Java, Kotlin, Scala, Clojure,
Jython ...). openLCA comes with an embedded [Jython](https://www.jython.org/)
interpreter so that you can also script against this API directly in openLCA
(the interpreter in openLCA will also auto-import most of the classes of the
openLCA backend so that you do not have to write the import paths for them).
Additionally, you can start a gRPC server in openLCA 2.0 (Tools > Developer
tools > IPC server > check gRPC) or start a stand-alone gRPC server with the
openLCA backend:

> ...gRPC is a modern open source high performance Remote Procedure Call (RPC)
> framework that can run in any environment
> ([from the website](https://grpc.io/))

**Note** that openLCA 2.0 is still heavily under development and not officially
released yet.

Documentation of the Java API: 

* [olca-cloud](https://greendelta.github.io/olca-ipc.py/olca/)
* olca-core
* olca-ecospold-1
* olca-ecospold-2
* olca-formula
* olca-ilcd
* olca-io
* olca-ipc
* olca-proto
* olca-simapro-csv