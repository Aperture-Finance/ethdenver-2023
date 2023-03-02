import { PositionCard } from ".";
import { EthIcon, UsdcIcon } from "@aperture/assetkit";
import styled from "styled-components";
import { Token } from "../Dropdown";

export default {
  title: "Components/PositionCard",
  argTypes: {},
};

const StyledEthIcon = styled(EthIcon)`
  width: 36px;
  height: 36px;
`;

const StyledUsdcIcon = styled(UsdcIcon)`
  width: 36px;
  height: 36px;
`;
export const Default: React.FC = () => {
  const TokenList: [Token, Token] = [
    {
      name: "Wrapped Ethereum",
      ticker: "WETH",
      icon: <StyledEthIcon />,
      balance: "10.23124",
    },
    {
      name: "USD Coin",
      ticker: "USDC",
      icon: <StyledUsdcIcon />,
      balance: "10032423.23124",
    },
  ];

  return (
    <>
      <PositionCard
        positionId="124314nji124"
        tokens={TokenList}
        progress={0.5}
      />
    </>
  );
};
