import {
  createMulticallProvider,
  createMulticallContract,
} from "@/utils/multicall";
import useSWR from "swr/immutable";
import ERC20ABI from "@/config/ABI/ERC20ABI.json";
import { useAccount, useNetwork } from "wagmi";
import { ERC20TokenMap } from "@/config/token/tokenMap";
import { getTokenAddress } from "@/config/contracts";
import { providers } from "@0xsequence/multicall";

export function useFetchUserTokens(
  contractAddress: string
) {
  const { address: walletAddress, isConnected } = useAccount();
  const { chain } = useNetwork();

  return useSWR(`useFetchUserPositions`, async () => {
    if (isConnected && chain && chain.id && walletAddress) {
      const provider = createMulticallProvider(chain.id);
      return getPositions(provider, walletAddress, contractAddress)
    }
    return [];
  });
}


async function getPositions(
  provider: providers.MulticallProvider,
  walletAddress: string,
  contractAddress: string
) {
  const contract = createMulticallContract(contractAddress, ERC20ABI, provider); //to do
  const [positions] = await Promise.all([
    contract.balanceOf(walletAddress),
  ]);
  return positions;
}
