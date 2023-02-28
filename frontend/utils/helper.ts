import { BigNumber } from "ethers";

// export const isDevEnv = () => {
//   const testnet = ["fleek", "localhost", "main"];
//   return Boolean(testnet.find((x) => window.location.href.includes(x)));
// };

export const isProdEnv = () => {
  const production = "https://app.aperture.finance/";
  return window.location.href.includes(production);
};

export const MIN_WITHDRAW_AMOUNT = 0.00000000000001;
export const MIN_DEPOSIT_AMOUNT = 0.0; // isDevEnv() ? 0.0 : 0.5; //0.5 worth of avax

// export const DEFAULT_SLIPPAGE = new Percent(5, 1000); //.50%
// export const FULL_SLIPPAGE = new Percent(1000, 1000); //1

export const HOMORA_BN_VAL = BigNumber.from(2).pow(112);

export const MIN_REINVEST_ETH = BigNumber.from(2e6).mul(25e9);
// export const DELISTING_POLICY = !isDevEnv();
