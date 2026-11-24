# openLCA-ApiDoc

This repository contains the source of the API documentation of the IPC interface of openLCA. You can read the documentation here:

[https://greendelta.github.io/openLCA-ApiDoc](https://greendelta.github.io/openLCA-ApiDoc)

The documentation is generated using [mdbook](https://github.com/rust-lang/mdBook), you can build it with this command when you have `mdbook` installed:

```bash
cd openLCA-ApiDoc
mdbook build
```

## Running the Python examples

The Python examples can be executed with [uv](https://docs.astral.sh/uv/). The
`pyproject.toml` in this folder defines the required packages (`olca-ipc` etc.),
which `uv` installs automatically into a local `.venv` on the first run. Run the
examples from this folder, e.g.:

```bash
cd openLCA-ApiDoc
uv run src/data/get_by_id/get_by_id.py
```

Most examples need a running openLCA IPC server on port `8080` (in openLCA:
`Tools > Developer tools > IPC Server`) and refer to data sets by IDs, which you
may need to adapt to your database.
