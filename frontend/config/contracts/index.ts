import { strategyContract } from "./strategy";
import { tokensContract } from "./tokens";

export const getTokenAddress = (
  ticker: string,
  chainId: number //@ts-ignore
) => tokensContract[ticker][chainId];

export const getstrategyAddress = (
  keyword: string,
  chainId: number //@ts-ignore
) => strategyContract[keyword][chainId];

export { tokensContract, strategyContract };
