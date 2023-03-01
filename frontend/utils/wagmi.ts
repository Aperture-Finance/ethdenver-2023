import { createClient, configureChains } from "wagmi";
import {
  mainnet,
  goerli,
  polygon,
  polygonMumbai,
  arbitrumGoerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { OKXWalletConnector } from "@/utils/okx";
// import Web3AuthConnector from "./web3Auth";

import memoize from "lodash/memoize";

export const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai], // TODO: determine the best testnet chain for eth, Gao sugguests: Sepolia
  [
    // alchemyProvider({ apiKey: "yourAlchemyApiKey" }),
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY ?? "" }),
    publicProvider(),
  ]
);

export const client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "aperture",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new OKXWalletConnector({ chains }),
    // Web3AuthConnector(chains),
  ],
  provider,
  webSocketProvider,
});

export const CHAIN_IDS = chains.map((c) => c.id);

export const isChainSupported = memoize((chainId: number) =>
  CHAIN_IDS.includes(chainId)
);
export const isChainTestnet = memoize(
  (chainId: number) => chains.find((c) => c.id === chainId)?.testnet
);