+++
title = "Harvesting and Fruit Preservation"
date = "2026-03-12"
weight = 5
description = "Determining fruit ripeness, harvesting techniques, and winter storage cellar management"
+++

Harvesting is the culmination of the orchard year. Determining the exact moment of peak ripeness is critical; picking too early results in starchy, flavorless fruit, while picking too late reduces storage life.
<!-- more -->

Ripeness can be assessed through several indicators: background skin color (which changes from green to yellow), ease of stem separation from the spur, seed color (which should be dark brown), and sugar content using a refractometer. For storage, apples must be harvested by hand to prevent bruising. Even a minor bruise will release ethylene gas, accelerating decay throughout the entire bin. A cool, damp root cellar maintained at 32°F to 36°F with 90% humidity is ideal for preservation.

To log storage temperatures, cider makers and cellar managers often write small scripts to monitor cellar microclimates:

```python
def check_cellar_status(temperature_f, humidity_pct):
    # Optimal storage cellar ranges
    temp_ok = 32 <= temperature_f <= 38
    humidity_ok = 85 <= humidity_pct <= 95
    
    if temp_ok and humidity_ok:
        return "Optimal: Cellar environment stable"
    else:
        return "Action Needed: Adjust ventilation or humidity"

print(check_cellar_status(34, 90))
```

Apples should be stored in single layers on slatted wooden trays to allow air circulation. Individual fruits can be wrapped in tissue paper or newspaper to contain any rot that might develop. Under optimal conditions, russet and winter-keeping varieties can remain crisp and flavorful for up to six months.
