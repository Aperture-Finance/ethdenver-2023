import { ethers, Contract } from "ethers";
import { providers } from "@0xsequence/multicall";
import { EvmChainMap } from "../config/chain/chainMap";
// import { isDevEnv } from "./helper";

export const createMulticallContract = (
  contractAddress: string,
  ERC20ABI: any[],
  provider: providers.MulticallProvider
) => new Contract(contractAddress, ERC20ABI, provider);

export const createMulticallProvider = (
  chainId: number
): providers.MulticallProvider =>
  new providers.MulticallProvider(
    new ethers.providers.StaticJsonRpcProvider(EvmChainMap[chainId].rpc[0], {
      name: EvmChainMap[chainId].name,
      chainId,
    }),
    {
      batchSize: 100,
      timeWindow: 0,
      contract: EvmChainMap[chainId].multicallAddresses,
      // verbose: isDevEnv(),
    }
  );
