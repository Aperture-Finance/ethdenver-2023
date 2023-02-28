export interface EvmChainInfo {
  name: string;
  chainId: number;
  shortName: string;
  networkId: number;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpc: string[];
  faucets: string[];
  infoURL: string;
  network: string;
  multicallAddresses: string;
}

export type TEvmChainMap = {
  [chainId: number]: EvmChainInfo;
};

export const ChainExplorerRegex = /(^.+\/)\/?(\$\{TYPE\})(.+)?(\$\{ADDRESS\})/;
