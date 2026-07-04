+++
title = "Rootstock Selection and Propagation"
date = "2025-04-10"
weight = 2
description = "Selecting the proper size-controlling rootstocks and grafting techniques for heritage varieties"
+++

Propagation of heirloom cultivars relies on the art of grafting, as apple seeds do not grow true to their parent variety. The choice of rootstock governs not only the ultimate size of the mature tree but also its hardiness and fruiting latency.
<!-- more -->

Traditional orcharding often employed standard seedling rootstocks, which grew into massive trees requiring thirty-foot spacings and taking up to a decade to bear fruit. Modern heritage orchards, however, benefit from size-controlling rootstocks developed at research stations like East Malling. The M.111 rootstock offers a semi-standard tree with excellent drought resistance and strong anchoring, ideal for rustic, low-input systems. For smaller spacing and quicker yields, the semi-dwarfing M.7 or MM.106 is preferred. 

Below is an example of a simple shell script configuration used by nursery managers to generate pruning schedules and tracking IDs for newly grafted rootstocks:

```bash
# Register new whip graft details
SCION_VARIETY="Esopus_Spitzenburg"
ROOTSTOCK_TYPE="MM106"
GRAFT_DATE="2025-04-10"

echo "Registering Graft ID: G-${SCION_VARIETY:0:4}-${ROOTSTOCK_TYPE}-${GRAFT_DATE//-/}"
```

Grafting itself is typically performed in late winter or early spring during dormancy. The whip-and-tongue graft is the classic choice for pencil-thick wood, ensuring a large area of cambium contact between scion and rootstock. The graft must be bound tightly with grafting tape and sealed with wax to prevent moisture loss and exclude pathogens.
