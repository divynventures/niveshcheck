const titleCaseExceptions = new Set(["LTD", "PVT", "LLP", "SER"]);

function titleCaseWord(word: string): string {
  const bareWord = word.replace(/[^A-Z]/g, "");

  if (
    /^(?:[A-Z]\.){2,}$/.test(word) ||
    (/^[A-Z]{1,4}$/.test(bareWord) && !titleCaseExceptions.has(bareWord))
  ) {
    return word;
  }

  return word
    .toLowerCase()
    .replace(/(^|[-/.])([a-z])/g, (_, separator: string, letter: string) =>
      `${separator}${letter.toUpperCase()}`
    );
}

/** Formats all-caps official source text for display without changing stored source data. */
export function formatBrokerName(name: string): string {
  if (name === name.toUpperCase() && name !== name.toLowerCase()) {
    return name.split(/(\s+)/).map(titleCaseWord).join("");
  }

  return name;
}
