# Stand-alone servers

As shown in the section before, it is easy to start an IPC server in openLCA
from the user interface but it is of course also possible to run these servers
as stand-alone servers. The JSON-RPC and gRPC servers are part of the [openLCA
modules](https://github.com/GreenDelta/olca-modules), the
[gdt-server](https://github.com/GreenDelta/gdt-server) provides an
implementation of the Rest API of the openLCA IPC protocol. All these servers
provide a common command line interface with which a server can be configured
and started. The parameters of the configuration are listed below. All
parameters are optional. By default a server uses the default openLCA workspace
folder as used by the desktop application (`~/openLCA-data-1.4`) and connects to
the database with the name `database` in that folder:

```

-data <path to data folder>

  The path to the data folder that contains the database and possible
  libraries. The folder structure need to follow the openLCA workspace
  structure, means the sub-folder `databases` of that folder contains the
  database and the sub-folder `libraries` possible data libraries to which
  the database is linked. If this parameter is not provided, the default
  openLCA workspace (currently `~/openLCA-data-1.4`) is taken as data folder.

-db <database>
  The name of the database in the data folder (only the name, not a full
  file path, must be provided); defaults to 'database'.

-port <port>
  The port of the server; defaults to 8080.

-native <path to native library folder>
  The path to the folder from which the native libraries should be
  loaded; defaults to the data folder.

-threads <number of calculation threads>
 	The number of parallel threads that can be used for calculations. Make sure
 	that the server has enough resources if you provide a larger number than 1
 	here; defaults to 1.

-timeout <minutes after which results are disposed>
 	The time in minutes after which results are cleaned up if they were not
 	disposed by the user. A value of <=0 means that no timeout should be
 	applied; defaults to 0.

--readonly <true | false>?
  If this flag is set, the server will run in readonly mode and modifying the
  database will not be possible.

-static <path to folder with static files>
  A path to a folder with static files that should be hosted by the server.
  This only has an effect if the server supports hosting of static files.

```

## Startup scripts in openLCA

In the `bin` folder of the openLCA application, there are two scripts for
starting a headless IPC server (without user interface involved):

* `ipc-server`: for JSON-RPC based IPC servers
* `grpc-server`: for gRPC based IPC servers

These scripts just take the name of a database in the default openLCA workspace
as argument and will start a server at port `8080`. For example, for Windows
starting a headless IPC server for the database `ecoinvent39` looks like this:

```batch
cd openLCA\bin
.\ipc-server.cmd ecoinvent39
```

A running server can be quit with `Ctr+c`. **Note** that you cannot connect to a
database that is opened via the openLCA desktop application with a headless
server. You can of course modify these scripts to your needs or re-package a
server application under the respective license conditions.

## Running with Docker

An IPC server can be of course also packaged as a Docker container and the
[gdt-server](https://github.com/GreenDelta/gdt-server) is especially useful for
this. There are basically two types of gdt-server images: images with packaged
LCA models (_model images_) and images without a model (_service images_).

### Model images
A model image is an easy way to distribute and share one or more computable LCA
models. Such models are often parameterized and can be calculated for a given
set of parameter values on demand. Model images are typically shared as tar
archives which can be loaded into a local image repository via the `load`
command:

```bash
docker load -i gdt-server-{identifier}.tar
```

With `docker image ls` you should see the image then. A model image typically
does not need any configuration (timeouts, number of threads etc.), you just
run it and map the `8080` port of openLCA service in the container (note that
`-d` runs the container in detached mode, `--rm` will delete it when it is
stopped):

```bash
docker run -p 3000:8080 -d --rm gdt-server-{identifier}
```

In the example above, it maps the port `8080` in the container to the port
`3000`, the URL `http://localhost:3000/api/version` should then respond with the
API version of the gdt-server.

### Service images

A service image contains a gdt-server and can be configured via start parameters
of a container. The components of such a service image are freely available in
the Github container registry and can be composed via [this
Dockerfile](https://github.com/GreenDelta/gdt-server/blob/main/Dockerfile),
e.g.:

```bash
cd <workdir>
curl https://raw.githubusercontent.com/GreenDelta/gdt-server/main/Dockerfile \
  > Dockerfile \
  && docker build -t gdt-server .
```

A container can be started from such an image in the following way:

```bash
docker run \
  -p 3000:8080 \
  -v $HOME/openLCA-data-1.4:/app/data \
  --rm -d gdt-server \
  -db example --readonly
```

As above, it first maps the internal port to the port `3000` of the host. Also,
a data folder needs to be mounted under the `/app/data` folder of the container.
In this example, it maps the default openLCA workspace to that folder. More
configuration parameters can be passed to the server via the start command of
the container.
