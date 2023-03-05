import {
  createMulticallProvider,
  createMulticallContract,
} from "@/utils/multicall";
import useSWR from "swr/immutable";
import LimitOrderABI from "@/config/ABI/LimitOrder.json";
import { useAccount, useNetwork } from "wagmi";
import { ERC20TokenMap } from "@/config/token/tokenMap";
import { getTokenAddress } from "@/config/contracts";
import { providers } from "@0xsequence/multicall";

export function useFetchUserPositions(
  contractAddress: string
) {
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  return useSWR(`useFetchUserPositions`, async () => {
    if (isConnected ) {
      const provider = createMulticallProvider(80001);
      return getPositions(provider, contractAddress, address)
    }
    return [];
  });
}


async function getPositions(
  provider: providers.MulticallProvider,
  contractAddress: string,
  userAddress: `0x${string}` | undefined
) {
  // console.log("getPositions", contractAddress, userAddress);
  const contract = createMulticallContract(contractAddress, LimitOrderABI, provider); //to do
  const [positions] = await Promise.all([
    contract.getPositions(userAddress),
  ]);
  return positions;
}
