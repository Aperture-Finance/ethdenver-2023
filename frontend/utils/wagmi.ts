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
import Web3AuthConnector from "./Web3AuthConnectorInstance";

import memoize from "lodash/memoize";
import { MagicAuthConnector, MagicConnectConnector } from '@everipedia/wagmi-magic-connector';

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
    new MagicAuthConnector({
      options: {
        apiKey: "pk_live_0A5DA6E112CAD73C",
        // enableSMSLogin: true,
        oauthOptions : {
          providers: ['facebook', 'google', 'twitter'],
          callbackUrl: 'http://localhost:3000/', //optional
        }
      },
    }),
    new MagicConnectConnector({
      options: {
        apiKey: "pk_live_10D2C3F77D03BB86",
        //...Other options
      },
    }),
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
