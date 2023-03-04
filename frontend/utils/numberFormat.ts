import bn, { Decimal } from 'decimal.js';

export const BN = (val: Decimal | string | number): Decimal => new bn(val);
Decimal.set({
  precision: 50,
  rounding: Decimal.ROUND_DOWN,
  defaults: true,
  maxE: 9e15,
  minE: -9e15,
  toExpPos: 9e15,
  toExpNeg: -9e15,
});

export const roundBN = (value: Decimal | number | string, decimal: number) => {
  return BN(value).toFixed(decimal);
};

export const addCommas = (str: string) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/* we should only use one number parse function to parse most of the cases */
export const numberParse = (
  num: number | string | undefined,
  type?: 'percentage' | 'large' | undefined,
  commas?: boolean,
  decimals?: number,
  prefix?: string,
  suffix?: string
) => {
  if (
    num === null ||
    num === undefined ||
    (typeof num === 'number' && (isNaN(num) || !isFinite(num)))
  ) {
    return type === 'percentage' ? '--%' : '--';
  }
  const defaultDecimals = decimals ?? 2;
  switch (type) {
    case 'percentage':
      return `${prefix ?? ''}${roundBN(BN(num).times(100), defaultDecimals)}${
        suffix ?? '%'
      }`;
    case 'large':
      return `${prefix ?? ''}${numberParseLarge(num, defaultDecimals)}${
        suffix ?? ''
      }`;
    default:
      return `${prefix ?? ''}${
        commas
          ? addCommas(roundBN(num, defaultDecimals))
          : roundBN(num, defaultDecimals)
      }${suffix ?? ''}`;
  }
};

export const getPrefix = (num: number, plus?: boolean) =>
  num === 0 ? '' : num < 0 ? '-' : plus ? '+' : '';

const numberParseLarge = (num: number | string, decimal = 0) => {
  const numLen = Math.trunc(Number(num)).toString().length;
  const numSuffix = ['', 'K', 'M', 'B', 'T', 'Q', 'S', 'Z', 'Y'];
  const numDivided = [1, 1e3, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24];

  let numSuffixIndex = 0;
  if (numLen > 3) {
    if (numLen % 3) numSuffixIndex = Math.floor(numLen / 3);
    else numSuffixIndex = Math.floor(numLen / 3) - 1;
  }
  const numNoRound =
    Math.floor(
      (Number(num) / numDivided[numSuffixIndex]) * Math.pow(10, decimal)
    ) / Math.pow(10, decimal);
  return `${Number(numNoRound).toFixed(decimal)}${numSuffix[numSuffixIndex]}`;
};

export const decimalFix = (num: number | string) => {
  return Number(num).toFixed(2);
};
