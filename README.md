# openLCA-ApiDoc

__A new documentation for the IPC interface of openLCA 2 is currently under development, the current version is available here: (https://greendelta.github.io/openLCA-ApiDoc/ipc/)[https://greendelta.github.io/openLCA-ApiDoc/ipc/]__

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

* [olca-cloud](https://greendelta.github.io/openLCA-ApiDoc/java/olca-cloud)
* [olca-core](https://greendelta.github.io/openLCA-ApiDoc/java/olca-core)
* [olca-ecospold-1](https://greendelta.github.io/openLCA-ApiDoc/java/olca-ecospold-1)
* [olca-ecospold-2](https://greendelta.github.io/openLCA-ApiDoc/java/olca-ecospold-2)
* [olca-formula](https://greendelta.github.io/openLCA-ApiDoc/java/olca-formula)
* [olca-ilcd](https://greendelta.github.io/openLCA-ApiDoc/java/olca-ilcd)
* [olca-io](https://greendelta.github.io/openLCA-ApiDoc/java/olca-io)
* [olca-ipc](https://greendelta.github.io/openLCA-ApiDoc/java/olca-ipc)
* [olca-proto](https://greendelta.github.io/openLCA-ApiDoc/java/olca-proto)
* [olca-simapro-csv](https://greendelta.github.io/openLCA-ApiDoc/java/olca-simapro-csv)

Documentation of the gRPC API:

* [commons](https://greendelta.github.io/openLCA-ApiDoc/grpc/commons.html)
* [data_fetch](https://greendelta.github.io/openLCA-ApiDoc/grpc/data_fetch.html)
* [data_update](https://greendelta.github.io/openLCA-ApiDoc/grpc/data_update.html)
* [entity_type](https://greendelta.github.io/openLCA-ApiDoc/grpc/entity_type.html)
* [mappings](https://greendelta.github.io/openLCA-ApiDoc/grpc/mappings.html)
* [olca](https://greendelta.github.io/openLCA-ApiDoc/grpc/olca.html)
* [results](https://greendelta.github.io/openLCA-ApiDoc/grpc/results.html)
* [result_types](https://greendelta.github.io/openLCA-ApiDoc/grpc/result_types.html)