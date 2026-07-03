+++
title = "Cataloging the Uncatalogable: A RISM-Compliant Finding Aid for the Colwyn-Hale Partbooks"
date = "2025-11-02"
description = "A case study in writing a single RISM- and EAD-compliant finding aid for a partbook set reunited from three institutions and one estate sale."

[extra]
journal = "Proceedings of the Northfield Music Librarianship Colloquium"
citation = "2025, pp. 201–219"
+++

Once the six volumes of the Colwyn-Hale partbook set had been physically identified across three institutions and a private estate, the cataloging problem was not "how do we describe this manuscript" — it was "how do we describe a manuscript that does not live in one place." This paper documents the finding aid built to solve that, and the RISM-and-EAD hybrid structure now offered to other institutions holding split sets.

<!-- more -->

## The split-holding problem

Standard finding-aid practice assumes physical custody: a repository describes what it holds. Colwyn-Hale broke that assumption immediately — Thornfield holds three volumes, a university library holds two, and the sixth remained in private hands until a 2023 purchase. A finding aid that only described Thornfield's three volumes would misrepresent the set as incomplete, when in fact the full six-volume work is now known, located, and (mostly) accessible.

The solution was a single EAD finding aid, hosted at Thornfield as the set's designated point of record, with each volume's `<physdesc>` entry carrying an explicit `<repository>` tag identifying its actual holding institution, plus a shared `<unitid>` linking all six as one intellectual unit regardless of physical location.

```xml
<c level="item" id="ch-vol-3">
  <did>
    <unittitle>Colwyn-Hale Partbooks, Vol. 3 (Tenor)</unittitle>
    <unitid type="rism">GB-TCL ML.3.7</unitid>
    <physdesc>
      <repository>Thornfield Conservatory Library</repository>
      <extent>34 leaves, paper, 205 x 155 mm</extent>
    </physdesc>
    <note type="provenance">
      <p>Reunited with vols. 1–2, 4–6 in 2023; watermark family
      confirmed by F. Odell, see accompanying technical note.</p>
    </note>
  </did>
</c>
```

## RISM as the connective layer

Rather than relying on the EAD finding aid alone to signal the set's unity, each volume also received an individual RISM Series A/B record, with a shared "related sources" field cross-referencing the other five siglum-and-shelfmark pairs. This means a scholar searching RISM Online for any single volume surfaces the full set, regardless of which institution's holdings they started from — the discovery layer does the work that no single repository's catalog can do alone.

## What other institutions can reuse

The finding-aid template, stripped of Colwyn-Hale-specific content, is available on request as a starting structure for any repository holding a partial split set: the `<unitid>` linking convention, the RISM cross-reference field mapping, and a short style note on how to phrase provenance uncertainty when a volume's current holder has not confirmed cataloging details directly. Split holdings are more common than most finding aids admit; this is one workable way to stop pretending otherwise.
