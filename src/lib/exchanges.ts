export type ExchangeDirectory = {
  code: "BSE" | "MSEI" | "NSE";
  slug: "bse" | "msei" | "nse";
  name: string;
};

export const exchangeDirectories: ExchangeDirectory[] = [
  { code: "NSE", slug: "nse", name: "National Stock Exchange of India" },
  { code: "BSE", slug: "bse", name: "BSE" },
  { code: "MSEI", slug: "msei", name: "Metropolitan Stock Exchange" },
];

export function getExchangeDirectoryByCode(code: string) {
  return exchangeDirectories.find((exchange) => exchange.code === code);
}

export function getExchangeDirectoryBySlug(slug: string) {
  return exchangeDirectories.find((exchange) => exchange.slug === slug);
}
