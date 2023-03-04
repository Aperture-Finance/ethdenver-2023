import {
  ButtonGroups,
  Dropdown,
  Subtitle,
  Token,
  InputGroup,
  TextInput,
  Title,
  PositionCard,
} from "@/packages/uikit/src";
import styled from "styled-components";
import { Arrow } from "./icon/down";
import { EthIcon } from "./icon/eth";
import { UsdcIcon } from "./icon/usdc";

const Wrapper = styled.div`
  padding: 0px 14px 16px 18px;
  width: calc(100% - 32px);
  height: 450px;
  overflow-y: scroll;
`;
const StyledEthIcon = styled(EthIcon)`
  width: 25px;
  height: 25px;
  margin-bottom: -2px;
`;

const StyledUsdcIcon = styled(UsdcIcon)`
  width: 25px;
  height: 25px;
  margin-bottom: -2px;
`;

export const Positions = () => {
  const TokenList: [Token, Token] = [
    {
      name: "Wrapped Ethereum",
      ticker: "WETH",
      icon: <StyledEthIcon />,
      balance: 10.23124,
    },
    {
      name: "USD Coin",
      ticker: "USDC",
      icon: <StyledUsdcIcon />,
      balance: 10023.23124,
    },
  ];

  return (
    <Wrapper>
      <Subtitle>Positions:</Subtitle>
      <PositionCard
        positionId="124314nji124"
        tokens={TokenList}
        progress={10}
      />
      <PositionCard
        positionId="124314nji124"
        tokens={TokenList}
        progress={50}
      />
      <PositionCard
        positionId="124314nji124"
        tokens={TokenList}
        progress={100}
      />
    </Wrapper>
  );
};
