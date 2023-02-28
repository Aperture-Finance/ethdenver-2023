import {
  AaveIcon,
  BiswapIcon,
  PancakeSwapIcon,
  CompoundIcon,
  HomuraIcon,
  UniswapIcon,
  CreamIcon,
  SynapseIcon,
  TraderJoeIcon,
  PangolinIcon,
  SvgProps
} from '@aperture/assetkit';
import { FunctionComponent } from 'react';
import { EvmChainMap, TEvmChainMap } from './crosschain/evmChainidMap';

export interface ProtocolInfo {
  name: string;
  icon: FunctionComponent<React.PropsWithChildren<SvgProps>>;
  supportedChain: TEvmChainMap;
  URL: string;
}

export interface TProtocolInfoMap {
  [name: string]: ProtocolInfo;
}

export const ProtocolInfoMap: TProtocolInfoMap = {
  aave: {
    name: 'AAVE',
    icon: AaveIcon,
    supportedChain: {
      1: EvmChainMap['1'],
      10: EvmChainMap['10'],
      137: EvmChainMap['137'],
      250: EvmChainMap['250'],
      42161: EvmChainMap['42161'],
      43114: EvmChainMap['43114'],
      1666600000: EvmChainMap['1666600000'],
    },
    URL: 'https://app.aave.com/',
  },
  tj: {
    name: 'Trader Joe',
    icon: TraderJoeIcon,
    supportedChain: {
      1: EvmChainMap['43114'],
    },
    URL: 'https://traderjoexyz.com/',
  },
  pangolin: {
    name: 'Pangolin',
    icon: PangolinIcon,
    supportedChain: {
      1: EvmChainMap['43114'],
    },
    URL: 'https://app.pangolin.exchange/',
  },
  biswap: {
    name: 'Biswap',
    icon: BiswapIcon,
    supportedChain: { 56: EvmChainMap['56'] },
    URL: 'https://biswap.org/',
  },
  pancakeSwap: {
    name: 'PancakeSwap',
    icon: PancakeSwapIcon,
    supportedChain: { 56: EvmChainMap['56'] },
    URL: 'https://pancakeswap.finance/',
  },
  compound: {
    name: 'Compound',
    icon: CompoundIcon,
    supportedChain: {
      1: EvmChainMap['1'],
      10: EvmChainMap['10'],
      42161: EvmChainMap['42161'],
      1313161554: EvmChainMap['1313161554'],
    },
    URL: 'https://compound.finance/',
  },
  alpha: {
    name: 'Alpha Homora',
    icon: HomuraIcon,
    supportedChain: {
      1: EvmChainMap['1'],
      10: EvmChainMap['10'],
      42161: EvmChainMap['42161'],
      1313161554: EvmChainMap['1313161554'],
    },
    URL: 'https://homora.alphaventuredao.io/',
  },
  uniswap: {
    name: 'Uniswap',
    icon: UniswapIcon,
    supportedChain: {
      1: EvmChainMap['1'],
      10: EvmChainMap['10'],
      42161: EvmChainMap['42161'],
      1313161554: EvmChainMap['1313161554'],
    },
    URL: 'https://info.uniswap.org/',
  },
  cream: {
    name: 'C.R.E.A.M',
    icon: CreamIcon,
    supportedChain: {
      1: EvmChainMap['1'],
      56: EvmChainMap['56'],
      137: EvmChainMap['137'],
      42161: EvmChainMap['42161'],
    },
    URL: 'https://app.cream.finance/',
  },
  synapse: {
    name: 'Synapse',
    icon: SynapseIcon,
    supportedChain: {
      1: EvmChainMap['1'],
      56: EvmChainMap['56'],
      250: EvmChainMap['250'],
      42161: EvmChainMap['42161'],
    },
    URL: 'https://analytics.synapseprotocol.com/',
  },
};
