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

// export function useFetchUserTokens() {
//   const { address: walletAddress, isConnected } = useAccount();
//   const { chain } = useNetwork();

//   return useSWR(`useFetchUserTokens`, async () => {
//     if (isConnected && chain && chain.id && walletAddress) {
//       const provider = createMulticallProvider(chain.id);
//       return await Promise.all(
//         Object.keys(ERC20TokenMap)
//           .filter((key: string) => !ERC20TokenMap[key].native)
//           .map(async (key: string) =>
//             getToken(provider, walletAddress, getTokenAddress(key, chain.id))
//           )
//       );
//     }
//     return [];
//   });
// }

// async function getTokenBalance(
//   provider: providers.MulticallProvider,
//   walletAddress: string,
//   tokenAddress: string
// ) {
//   const contract = createMulticallContract(tokenAddress, ERC20ABI, provider);
//   const [balanceBN] = await Promise.all([contract.balanceOf(walletAddress)]);
//   return { balanceBN: balanceBN };
// }

export function useFetchUserToken(
  tokenAddress: string,
  contractAddress: string
) {
  const { address: walletAddress, isConnected } = useAccount();
  const { chain } = useNetwork();

  return useSWR(`token-${tokenAddress}`, () => {
    if (isConnected && chain && chain.id && walletAddress) {
      const provider = createMulticallProvider(chain.id);
      return getToken(provider, walletAddress, tokenAddress, contractAddress);
    }
  });
}

async function getToken(
  provider: providers.MulticallProvider,
  walletAddress: string,
  tokenAddress: string,
  contractAddress: string
) {
  const contract = createMulticallContract(tokenAddress, ERC20ABI, provider);
  const [allowance, balance] = await Promise.all([
    contract.allowance(walletAddress, contractAddress),
    contract.balanceOf(walletAddress),
  ]);
  return { allowanceBN: allowance, balanceBN: balance };
}
