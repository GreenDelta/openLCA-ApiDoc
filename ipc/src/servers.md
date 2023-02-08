# Stand-alone servers

__This section is currently under development__


## Java servers

...

## Running with Docker

...

## Configuration

A server can be configured via command line arguments. These arguments are all
optional and have a default value where possible:

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
