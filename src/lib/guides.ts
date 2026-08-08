export type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  updatedAt: string;
  sections: Array<{ heading: string; paragraphs: string[]; steps?: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  sources: Array<{ name: string; url: string; publisher: string }>;
};

export const guides: Guide[] = [
  {
    slug: "verify-sebi-registered-stock-broker",
    title: "How to Check Whether a Stock Broker Is SEBI Registered",
    description:
      "A neutral, step-by-step guide to checking a stock broker's current record in SEBI's official recognised intermediaries directory.",
    intro:
      "NiveshCheck records registration details from published SEBI material, but it is not a verification service. Check the latest official SEBI record yourself before opening an account or acting on a name, registration number, or website.",
    updatedAt: "2026-08-08",
    sections: [
      {
        heading: "Use the official SEBI directory for the current record",
        paragraphs: [
          "SEBI provides a recognised intermediaries directory that can be searched by registration number or by member or trade name. A directory listing is a starting point for checking identity details; it is not a recommendation or a suitability assessment.",
        ],
        steps: [
          "Ask the broker for its legal name, trade name, and SEBI registration number.",
          "Search the registration number in SEBI's recognised intermediaries directory.",
          "Compare the legal name, trade name, recorded address, and exchange information with the details you were given.",
          "If anything does not match, pause and contact the broker through independently found contact details or ask SEBI or the relevant exchange for clarification.",
        ],
      },
      {
        heading: "What this check can and cannot tell you",
        paragraphs: [
          "This check helps establish whether the details you have match an official registration record. It does not confirm that a website, app, caller, offer, fee, product, or investment is genuine or suitable for you.",
          "Read the account documents and charges carefully, understand the risks involved, and keep copies of the documents and records you receive. SEBI's investor guidance recommends these precautions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can NiveshCheck confirm a broker's current status?",
        answer:
          "No. NiveshCheck is an independent reference directory. Use the official SEBI directory for the latest record and make your own assessment.",
      },
      {
        question: "Does a SEBI registration number mean a broker is suitable for me?",
        answer:
          "No. Registration information is not a recommendation, endorsement, guarantee, or assessment of suitability.",
      },
    ],
    sources: [
      {
        name: "Recognised Intermediaries directory",
        url: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognised=yes",
        publisher: "SEBI",
      },
      {
        name: "Do's and Don'ts of Investing in Securities Market",
        url: "https://investor.sebi.gov.in/securities-dos_and_donts.html",
        publisher: "SEBI Investor",
      },
    ],
  },
  {
    slug: "demat-account-vs-trading-account",
    title: "Demat Account vs Trading Account: What Each Account Does",
    description:
      "A plain-language explanation of demat, trading, and bank accounts using SEBI's stock-broker FAQ as the primary source.",
    intro:
      "This guide explains account roles, not which provider to choose. Account features, charges, and eligibility can vary, so review the provider's current documents and official information before opening an account.",
    updatedAt: "2026-08-08",
    sections: [
      {
        heading: "The three account roles described by SEBI",
        paragraphs: [
          "SEBI's stock-broker FAQ describes a demat account as an account with a SEBI-registered depository participant for holding and transferring securities. It describes a trading account as an account opened by a SEBI-registered stock broker for trading in securities.",
          "The same FAQ identifies a bank account in the investor's name as the account used for paying or receiving funds in connection with securities-market trading.",
        ],
      },
      {
        heading: "Questions to clarify before you sign",
        paragraphs: [
          "Ask which entity will provide the trading account and, where applicable, the demat account. Confirm the charges, account documents, authorisations, communication settings, and how you will receive statements and contract notes.",
          "SEBI's investor guidance says to read documents before signing, keep records, and check account statements and trade communications regularly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a demat account the same as a trading account?",
        answer:
          "No. SEBI describes them as different accounts with different roles: a demat account holds and transfers securities, while a trading account is used for trading in securities.",
      },
      {
        question: "Does this guide recommend a broker or depository participant?",
        answer:
          "No. It explains official terminology only. NiveshCheck does not recommend or endorse providers.",
      },
    ],
    sources: [
      {
        name: "FAQs on Stock Broker (PDF)",
        url: "https://www.sebi.gov.in/sebi_data/faqfiles/sep-2024/1727418208774.pdf",
        publisher: "SEBI",
      },
      {
        name: "Opening an account",
        url: "https://www.nseindia.com/static/invest/first-time-investor-opening-an-account",
        publisher: "NSE India",
      },
    ],
  },
  {
    slug: "before-opening-demat-trading-account",
    title: "Before Opening a Demat or Trading Account: A Neutral Checklist",
    description:
      "A source-backed checklist of documents, charges, records, and account-security questions to consider before opening a demat or trading account.",
    intro:
      "This is a checklist for reading and checking information, not financial or product advice. It does not rank brokers, assess an account's suitability, or tell you whether to invest.",
    updatedAt: "2026-08-08",
    sections: [
      {
        heading: "Read the account-opening information",
        paragraphs: [
          "SEBI's investor charter says investors should deal with a SEBI-registered depository participant for demat-account, KYC, and depository activities, provide complete account-opening and KYC information, and read documents and conditions before signing.",
        ],
        steps: [
          "Check the entity's current official registration record.",
          "Read the account-opening form and related terms before signing.",
          "Identify all applicable fees, charges, brokerage, and other account costs from the provider's current documents.",
          "Keep copies of the documents you sign, account statements, contract notes, and payment records.",
        ],
      },
      {
        heading: "Set up a record-checking habit",
        paragraphs: [
          "SEBI's investor material advises investors to check statements and exchange communications regularly, review trading accounts periodically, and inform the broker or depository participant when contact or bank details change.",
          "For each trade, SEBI's investor guidance says to insist on a valid contract note or confirmation memo within 24 hours of the transaction.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I sign blank or partially completed account documents?",
        answer:
          "No. SEBI's investor charter says to complete required details in account-opening and KYC forms and to cancel blanks before signing.",
      },
      {
        question: "Are charges the same for every account provider?",
        answer:
          "No conclusion should be drawn from this guide. Review the current charges and terms supplied by the specific provider before deciding.",
      },
    ],
    sources: [
      {
        name: "Investor Charter",
        url: "https://investor.sebi.gov.in/Investor-charter.html",
        publisher: "SEBI Investor",
      },
      {
        name: "Do's and Don'ts of Investing in Securities Market",
        url: "https://investor.sebi.gov.in/securities-dos_and_donts.html",
        publisher: "SEBI Investor",
      },
    ],
  },
  {
    slug: "secure-trading-demat-account-and-raise-complaint",
    title: "How to Protect a Trading or Demat Account and Raise a Complaint",
    description:
      "A neutral overview of account-security habits and the official escalation path for concerns about a stock broker.",
    intro:
      "If you believe a crime, unauthorised transaction, or immediate account-security issue may be involved, contact the relevant provider and appropriate official channels promptly. This guide is general information, not legal or financial advice.",
    updatedAt: "2026-08-08",
    sections: [
      {
        heading: "Basic account-security habits",
        paragraphs: [
          "SEBI's investor guidance says not to share critical information such as account details, login IDs, passwords, or delivery instruction slips. Its account-security page gives the same clear rule for trading and demat accounts: do not share your password.",
          "Review trade alerts, periodic statements, and account balances. Keep your email address, mobile number, bank details, and address current with the relevant broker or depository participant.",
        ],
      },
      {
        heading: "A documented escalation path",
        paragraphs: [
          "SEBI's investor education material outlines a sequence: first report the issue to the broker's customer-support or grievance channel; if unresolved, use the relevant stock exchange's investor grievance mechanism; and then use SEBI's SCORES platform where appropriate. Exchanges also provide dispute-resolution processes.",
          "Keep the relevant account statements, contract notes, messages, emails, payment records, and a written timeline. The exact route and requirements can depend on the issue, so check the official platform instructions before submitting a complaint.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I share my trading password with someone who claims to help me?",
        answer:
          "No. SEBI's investor guidance says not to share passwords or other critical account information.",
      },
      {
        question: "Does NiveshCheck handle complaints against brokers?",
        answer:
          "No. NiveshCheck is an independent directory. Use the broker's official grievance channel and the applicable exchange or SEBI process for complaints.",
      },
    ],
    sources: [
      {
        name: "Secure Your Investment Account",
        url: "https://investor.sebi.gov.in/secure_ur_inv_account.html",
        publisher: "SEBI Investor",
      },
      {
        name: "Securities Market Investment: Market Intermediaries and Services",
        url: "https://investor.sebi.gov.in/Brokers.html",
        publisher: "SEBI Investor",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
