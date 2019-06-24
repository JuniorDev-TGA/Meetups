const PATTERNS = {
  0: [" _ ",
      "| |",
      "|_|",
      "   "],
  1: ["   ",
      "  |",
      "  |",
      "   "],
  2: [" _ ",
      " _|",
      "|_ ",
      "   "],
  3: [" _ ",
      " _|",
      " _|",
      "   "],
  4: ["   ",
      "|_|",
      "  |",
      "   "],
  5: [" _ ",
      "|_ ",
      " _|",
      "   "],
  6: [" _ ",
      "|_ ",
      "|_|",
      "   "],
  7: [" _ ",
      "  |",
      "  |",
      "   "],
  8: [" _ ",
      "|_|",
      "|_|",
      "   "],
  9: [" _ ",
      "|_|",
      " _|",
      "   "]
};

function convert(text: string): string {
  let entries: string[];
  let lines = text.split("\n");
  for (let entryNumber = 0; entryNumber < lines.length; entryNumber += 4) {
    let entry: string;
    for (let entryLine = 0; entryLine < 4; entryLine++) {
      entry += lines[entryNumber + entryLine] + "\n";
    }
    entries.push(entry);
  }

  return entries.map((entry) => {
    let patterns: string[];
    let lines = entry.split('\n');
    for (let patternNumber = 0; patternNumber < lines[0].length; patternNumber += 3) {
      let pattern: string;
      for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        pattern += lines[lineNumber].substr(patternNumber, 3);
      }
      patterns.push(pattern);
    }

    let accountNumber = patterns.map((pattern) => {
      for (let digit in PATTERNS) {
        if (PATTERNS[digit].join('') === pattern) {
          return digit;
        }
      }
      return '?';
    }).join('');

    if (accountNumber.indexOf('?') !== -1) {
      return accountNumber + ' ILL';
    } else if (!isValid(accountNumber)) {
      return accountNumber + ' ERR';
    }
    return accountNumber;
  }).join('\n');
};

function isValid(accountNumber: any): boolean {
  let digits = accountNumber.split('');
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += (9 - i) * digits[i];
  }
  return sum % 11 === 0;
};