import {
  createMulticallProvider,
  createMulticallContract,
} from "@/utils/multicall";
import useSWR from "swr/immutable";
import LimitOrderABI from "@/config/ABI/LimitOrder.json";
import { useAccount, useNetwork } from "wagmi";
import { ERC20TokenMap } from "@/config/token/tokenMap";
import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import { providers } from "@0xsequence/multicall";
import { utils } from "ethers";

export function useFetchCurrentPirce(
) {
  const { address: walletAddress, isConnected } = useAccount();
  const { chain } = useNetwork();

  return useSWR(`useFetchCurrentPirce`, async () => {
    if (isConnected && chain && chain.id && walletAddress) {
      const provider = createMulticallProvider(chain.id);
      return getCurrentPrice(provider)
    }
})
}

async function getCurrentPrice(
  provider: providers.MulticallProvider,
) {
  const contract = createMulticallContract(getstrategyAddress("limitOrder", 80001), LimitOrderABI, provider);
  const [currentPrice] = await Promise.all([contract.currentPrice(getTokenAddress("weth", 80001), getTokenAddress("usdc", 80001), utils.parseEther("1"), 3000)]);
  return { currentPrice };
}
