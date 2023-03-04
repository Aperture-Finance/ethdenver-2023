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
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  return useSWR(`useFetchUserPositions`, async () => {
    if (isConnected && chain && chain.id ) {
      const provider = createMulticallProvider(chain.id);
      return getPositions(provider, contractAddress)
    }
    return [];
  });
}


async function getPositions(
  provider: providers.MulticallProvider,
  contractAddress: string
) {
  const contract = createMulticallContract(contractAddress, LimitOrderABI, provider); //to do
  const [positions] = await Promise.all([
    contract.allPositions(),
  ]);
  return positions;
}
