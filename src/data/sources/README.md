# SEBI source snapshots

## `sebi-equity-brokers-2026-07-24.xls`

- **Source:** SEBI, “Registered Stock Brokers in equity segment as on Jul 24, 2026”
- **Imported unchanged:** 4 August 2026
- **SHA-256:** `f7af563cf1e596d2247f22f2462d1636cb0c4c29c3bac5ed6cb2fd93df18082b`
- **Rows:** 4,971 broker/exchange rows
- **Local-directory coverage:** all 375 registration numbers matched the snapshot

The workbook is an equity-segment snapshot. It is authoritative for the listed legal name, trade name, registered/correspondence contact details, validity, and equity-exchange memberships as of its stated date. It does **not** establish F&O, currency, commodity, broker-type, active-client, or editorial-description data.

## Reconciliation rules

1. The live SEBI registration lookup remains the newer source for the registration-number review date and legal-name corrections made after the snapshot date.
2. Consumer-facing brand names may differ from SEBI trade-name values. The directory retains those brands only when the legal entity and registration number are source-backed.
3. Snapshot addresses that differ materially from the current directory require a separate address review; they are not bulk-overwritten.
4. Two missing equity-exchange memberships identified by the snapshot were added: Aryaman Capital and Afco Investments now include NSE as well as BSE.
5. A city label may normalise a clearly identified locality in the official address where the workbook's city column is blank. For Batches 3 and 4, Mumbai labels are limited to records with a reviewed Mumbai locality such as Fort, Nariman Point, Andheri, Bandra, Parel, or Dalal Street; the original address remains visible on every profile.
6. All 350 matched records show a validity end date of `Perpetual` in this snapshot. This should not be treated as a substitute for a current SEBI lookup.

## `sebi-equity-brokers-2026-08-21.xls`

- **Source:** SEBI, “Registered Stock Brokers in equity segment as on Aug 21, 2026”
- **Imported unchanged:** 22 August 2026
- **SHA-256:** `62646666bfddb2fd526745992027a595e96c1fa5fbc877c8dc5b26d9aa5ddd5e`
- **Rows:** 4,989 broker/exchange rows
- **Local-directory coverage:** all 350 registration numbers matched the snapshot

This later equity-segment snapshot is the source for the directory's 21 August 2026 review date. It is used for the recorded legal name, trade name, address, and equity-exchange memberships. Clearing-corporation entries appearing in the workbook are not shown as equity-exchange memberships on NiveshCheck.
