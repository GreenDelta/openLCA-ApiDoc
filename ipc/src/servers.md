# Stand-alone servers

__This section is currently under development__


## Java servers

...

## Running with Docker

...

## Configuration

```
  -data <path to data folder>

    Path to the data folder that contains the database, possible libraries etc.
    The folder structure should follow the openLCA workspace structure (with the
    databases and libraries in the respective sub-folders). If this option is
    not provided, it defaults to the respective default openLCA workspace
    location: ~/openLCA-data-1.4

  -db <database>

    The name of the database. This is the name of the respective folder in the
    data directory. This argument is required.

  -port <port>

    The port of the server. Defaults to 8080 if this option is not provided.

  -native <path to native library folder>

    The path to the folder from which the native libraries should be loaded.
    Defaults to the data folder if this path is not provided.

  -static <path to folder with static files>

    An optional path to a folder with static files that should be hosted by
    the server.

  --readonly <true | false>?

    If this flag is set, the server will run in readonly mode and modifying the
    database will not be possible via http requests.
```
