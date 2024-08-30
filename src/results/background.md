# Background

## The technology matrix and technosphere flows

Starting point of the result calculation is the technology matrix \\(A\\). It is a square matrix which is symmetrically index by the \\(n\\) technosphere flows of the system. A technosphere flow is a pair of flow and its provider. The provider is typically a process but it could be also a sub-system of the calculated product system (in openLCA 2 it could be even a pre-calculated result of another product system).

For product flows, the provider has an output of that product and, for waste flows, it has an input of that waste (it provides waste treatment in this case). A column \\(j\\) contains in the technology matrix the input and output amounts of other technosphere flows related to the technosphere flow \\(j\\) given in the respective reference units of the flows. We often just say process \\(j\\) instead of technosphere flow \\(j\\) because it is more intuitive. However, we always mean the pair of flow and provider when we say process in the descriptions below.

In the technology matrix we only have mono-functional processes. These are processes that only have a single product output or waste input to which the other product inputs, waste outputs and elementary flows of that process are related. Exactly this pair of process and flow is the technosphere flow \\(j\\) that is unique in the system and is mapped to the respective row and column in the technosphere matrix. However, the same flow could occur with different providers in different technosphere flows (e.g. electricity produced by different providers) or, the other way around, the same provider could occur with different flows in different technosphere flows (e.g. in case of multi-functional processes). Multi-functional processes are split into mono-functional processes by applying allocation, substitution, system-expansion or cutoff rules as defined in the calculation setup or in the product system model.

The values are stored as negative numbers for inputs and and as positive numbers for outputs in the technology matrix.


## The demand

In openLCA, a product system is calculated for a single demand value for a technosphere flow: a product output or waste input of the system. It is the quantitative reference of the system. In the general case, a system can have multiple demand values organized in a final demand vector \\(f\\) which is indexed in the same way as the technology matrix (Note that an multi-demand system can be transformed into a single demand system by simply adding an additional process to the the technology matrix).


## The scaling vector and the inverse

$$
A \ s = f
$$