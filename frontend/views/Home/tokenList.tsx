import { EthIcon } from "./icon/eth";
import { UsdcIcon } from "./icon/usdc";
import styled from "styled-components";

const StyledEthIcon = styled(EthIcon)`
  width: 30px;
  height: 30px;
`;

const StyledUsdcIcon = styled(UsdcIcon)`
  width: 30px;
  height: 30px;
`;

export const TokenList = [
  {
    name: "Wrapped Ethereum",
    ticker: "WETH",  //@ts-ignore
    icon: <StyledEthIcon id="eth-1" />,
    balance: 10.23124,
  },
  {
    name: "USD Coin",
    ticker: "USDC", //@ts-ignore
    icon: <StyledUsdcIcon id="usd-1" />,
    balance: 10032423.23124,
  },
];

const StyledEthIcon2 = styled(EthIcon)`
  width: 30px;
  height: 30px;
`;

const StyledUsdcIcon2 = styled(UsdcIcon)`
  width: 30px;
  height: 30px;
`;
export const TokenList2 = [
  {
    name: "Wrapped Ethereum",
    ticker: "WETH", //@ts-ignore
    icon: <StyledEthIcon2 id="eth-2" />,
    balance: 10.23124,
  },
  {
    name: "USD Coin",
    ticker: "USDC", //@ts-ignore
    icon: <StyledUsdcIcon2 id="usd-2" />,
    balance: 10032423.23124,
  },
];