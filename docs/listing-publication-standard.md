# Listing publication standard

This is the acceptance checklist for every broker record published on NiveshCheck. The site is an independent directory, not a SEBI service, verification authority, broker adviser, or recommendation service.

## Required before publication

Each record must have all of the following:

1. One unique SEBI registration number in the `INZ` format.
2. Official legal name, taken from a SEBI source.
3. A consumer-facing trade name only where its connection to the legal entity and registration number has been reviewed.
4. An exact official SEBI registration-record URL containing that registration number.
5. A NiveshCheck review date in `YYYY-MM-DD` format.
6. Registered address, city, state, and at least one exchange membership from the cited official source or the documented SEBI snapshot.
7. A source snapshot or lookup record that can be rechecked later.

## Claims policy

- The directory may state that a record was listed in a named official SEBI source as of the source or review date.
- The directory must direct visitors to check the current record with SEBI and must not claim to independently verify, certify, approve, endorse, or recommend a broker.
- Active-client counts, ratings, rankings, brokerage charges, platform features, and promotional descriptions are not added or updated without a dated, attributable source and a separate review rule.
- Equity-source data must not be used to claim F&O, currency, commodity, or other segment membership.
- Addresses and exchange memberships are changed only after record-level reconciliation; do not bulk overwrite them from a source snapshot.
- An external broker website link may be provided as a convenience link only. It must not be presented as a recommendation or account-opening call to action; any commercial relationship must be disclosed before publication.

## Batch quality gate

Before a batch is deployed:

1. Run `npm run validate:data`.
2. Confirm zero duplicate registration numbers and slugs.
3. Confirm every record has an official SEBI URL and valid review date.
4. Spot-check the legal name, registration number, and trade-name relationship for every record; separately review every address mismatch.
5. Run lint and TypeScript checks.
6. Update the source-snapshot register and publish only after the checks pass.

## Indexing rules

- Broker detail pages may be indexed only after the quality gate passes.
- City pages may be indexed only when at least five source-backed unique broker records are available for that city.
- Do not create indexable pages for arbitrary city, category, or keyword combinations with no distinct evidence-led value.
- One registration number maps to one canonical broker page.

## Correction policy

Reports go to `hello@niveshcheck.in`. Record the report, source checked, decision, and date. Correct factual errors promptly, then rerun the data validator before the next deployment.
