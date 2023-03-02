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
    ticker: "WETH",
    icon: <StyledEthIcon id="eth-1" />,
    balance: 10.23124,
  },
  {
    name: "USD Coin",
    ticker: "USDC",
    icon: <StyledUsdcIcon id="usd-2" />,
    balance: 10032423.23124,
  },
];
