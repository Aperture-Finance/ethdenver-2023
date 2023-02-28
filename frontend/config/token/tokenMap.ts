import {
  DaiIcon,
  UsdcIcon,
  Usdt2Icon,
  WbtcEIcon,
  WethEIcon,
} from "@/packages/assetkit";
import { Token } from "./tokenConfig";

export const ERC20TokenMap: Token = {
  usdc: {
    name: "USD Coin",
    ticker: "USDC",
    icon: UsdcIcon,
    decimals: 6,
  },
  // usdt: {
  //   name: "Tether",
  //   ticker: "USDT",
  //   icon: Usdt2Icon,
  //   decimals: 6,
  // },
  // dai: {
  //   name: "Dai Stablecoin",
  //   ticker: "DAI.e",
  //   icon: DaiIcon,
  //   decimals: 18,
  // },
  // wbtc: {
  //   name: "Wrapped Bitcoin",
  //   ticker: "BTC",
  //   icon: WbtcEIcon,
  //   decimals: 8,
  // },
  weth: {
    name: "Wrapped Ethereum",
    ticker: "WETH",
    icon: WethEIcon,
    decimals: 18,
  },
  eth: {
    name: "Ethereum",
    ticker: "ETH",
    icon: WethEIcon,
    native: true,
    decimals: 18,
  },
};
