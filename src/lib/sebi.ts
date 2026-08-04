const SEBI_EQUITY_BROKERS_URL =
  "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=30";

export function getSebiBrokerSearchUrl(registrationNumber: string): string {
  return `${SEBI_EQUITY_BROKERS_URL}&regno=${encodeURIComponent(registrationNumber)}`;
}
