import { Dropdown } from ".";
import { EthIcon, UsdcIcon } from "@aperture/assetkit";
import { Token } from "./types";
import styled from "styled-components";

export default {
  title: "Components/Dropdown",
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
  const TokenList: Token[] = [
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
      <div style={{ width: "500px" }}>
        <Dropdown
          tokenList={TokenList}
          onSelect={(token: Token, index: number) =>
            console.log(index, ": ", token.name)
          }
        />
      </div>
    </>
  );
};
