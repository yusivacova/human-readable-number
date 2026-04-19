module.exports = function toReadable(number) {
  const digitsObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const numbersObj = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const numbersDecimalObj = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  const numStr = number.toString();

  if (numStr.length === 1) {
    return digitsObj[numStr];
  }

  if (numStr.length === 2) {
    if (numbersObj[numStr]) return numbersObj[numStr];
    return `${numbersDecimalObj[numStr[0]]} ${digitsObj[numStr[1]]}`;
  }

  if (numStr.length === 3) {
    const twoPartNum = numStr.slice(1);

    if (twoPartNum[0] === '0') {
      if (twoPartNum[1] === '0') return `${digitsObj[numStr[0]]} hundred`;
      return `${digitsObj[numStr[0]]} hundred ${digitsObj[twoPartNum[1]]}`;
    }

    const twoPartNumResult = numbersObj[twoPartNum]
      ? numbersObj[twoPartNum]
      : `${numbersDecimalObj[twoPartNum[0]]} ${digitsObj[twoPartNum[1]]}`;

    return `${digitsObj[numStr[0]]} hundred ${twoPartNumResult}`;
  }

  return 'Error';
};
