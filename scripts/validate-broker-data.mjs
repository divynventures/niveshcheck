import { readFileSync } from "node:fs";

const brokers = JSON.parse(
  readFileSync(new URL("../src/data/brokers.json", import.meta.url), "utf8")
);
const errors = [];
const seenRegistrationNumbers = new Set();
const seenSlugs = new Set();
const registrationNumberPattern = /^INZ\d{9}$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function requireText(broker, field) {
  if (typeof broker[field] !== "string" || broker[field].trim() === "") {
    errors.push(`${broker.id ?? "unknown"}: missing ${field}`);
  }
}

for (const broker of brokers) {
  for (const field of [
    "id",
    "slug",
    "name",
    "tradeName",
    "sebiRegNo",
    "registrationSourceUrl",
    "registrationReviewedAt",
    "address",
    "city",
    "state",
  ]) {
    requireText(broker, field);
  }

  if (!registrationNumberPattern.test(broker.sebiRegNo)) {
    errors.push(`${broker.id}: invalid SEBI registration number ${broker.sebiRegNo}`);
  }

  if (seenRegistrationNumbers.has(broker.sebiRegNo)) {
    errors.push(`${broker.id}: duplicate SEBI registration number ${broker.sebiRegNo}`);
  }
  seenRegistrationNumbers.add(broker.sebiRegNo);

  if (seenSlugs.has(broker.slug)) {
    errors.push(`${broker.id}: duplicate slug ${broker.slug}`);
  }
  seenSlugs.add(broker.slug);

  if (!datePattern.test(broker.registrationReviewedAt)) {
    errors.push(`${broker.id}: invalid review date ${broker.registrationReviewedAt}`);
  }

  try {
    const sourceUrl = new URL(broker.registrationSourceUrl);
    if (sourceUrl.hostname !== "www.sebi.gov.in") {
      errors.push(`${broker.id}: registration source must be on www.sebi.gov.in`);
    }
    if (sourceUrl.searchParams.get("regno") !== broker.sebiRegNo) {
      errors.push(`${broker.id}: registration source does not match SEBI registration number`);
    }
  } catch {
    errors.push(`${broker.id}: invalid registration source URL`);
  }

  if (!Array.isArray(broker.exchanges) || broker.exchanges.length === 0) {
    errors.push(`${broker.id}: at least one exchange is required`);
  }
}

if (errors.length > 0) {
  console.error(`Broker data validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Broker data validation passed: ${brokers.length} unique, source-linked records.`
);
