import { ethers } from "ethers";
import { FunctionComponent } from "react";
import { SvgProps } from "@/packages/assetkit";

export interface SerializedTokenInfo extends TokenInfo {
  balance: ethers.BigNumber;
  displayBalance: string;
  allowance: ethers.BigNumber;
}

export interface TokenInfo {
  readonly name: string;
  readonly ticker: string;
  readonly icon: FunctionComponent<React.PropsWithChildren<SvgProps>>;
  readonly decimals: number;
  readonly native?: boolean;
}

export interface Token {
  [ticker: string]: TokenInfo;
}

export interface ITokenMap {
  [tokenContractAddress: string]: TokenInfo;
}
