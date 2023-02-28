import { TEvmChainMap } from "./chainConfig";

export const EvmChainMap: TEvmChainMap = {
  1: {
    name: "Ethereum Mainnet",
    chainId: 1,
    shortName: "eth",
    networkId: 1,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpc: [
      "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
      "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
      "https://api.mycryptoapi.com/eth",
      "https://cloudflare-eth.com",
    ],
    faucets: [],
    infoURL: "https://etherscan.io/${TYPE}/${ADDRESS}",
    network: "mainnet",
    multicallAddresses: "0xcA11bde05977b3631167028862bE2a173976CA11",
  },
  5: {
    name: "Görli",
    chainId: 5,
    shortName: "gor",
    networkId: 5,
    nativeCurrency: {
      name: "Görli Ether",
      symbol: "GOR",
      decimals: 18,
    },
    rpc: [
      `https://goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
      `wss://goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
      "https://rpc.goerli.mudit.blog/",
    ],
    faucets: [
      "http://fauceth.komputing.org?chain=5&address=${ADDRESS}",
      "https://goerli-faucet.slock.it?address=${ADDRESS}",
      "https://faucet.goerli.mudit.blog",
    ],
    infoURL: "https://goeri.etherscan.io/${TYPE}/${ADDRESS}",
    network: "goerli",
    multicallAddresses: "0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e",
  },
  80001: {
    name: "Polygon Mumbai",
    chainId: 80001,
    shortName: "Mumbai",
    networkId: 80001,
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpc: [
      "https://polygon-mumbai.infura.io/v3/bb6b43e1a427457ea9ac942040f831c4",
      `wss://polygon-mumbai.infura.io/v3/bb6b43e1a427457ea9ac942040f831c4`,
      "https://rpc.mumbai.mudit.blog/",
    ],
    faucets: [
      "https://mumbaifaucet.com/",
      "https://faucet.polygon.technology/",
      "https://calibration-faucet.filswan.com/#/dashboard",
    ],
    infoURL: "https://goeri.etherscan.io/${TYPE}/${ADDRESS}",
    network: "mumbai",
    multicallAddresses: "0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc",
  },
};
