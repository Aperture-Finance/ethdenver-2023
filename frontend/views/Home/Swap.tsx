import {
  ButtonGroups,
  Dropdown,
  Subtitle,
  Token,
  InputGroup,
  TextInput,
  Title,
} from "@/packages/uikit/src";
import styled from "styled-components";
import { Arrow } from "./icon/down";
import { EthIcon } from "./icon/eth";
import { UsdcIcon } from "./icon/usdc";

const Wrapper = styled.div`
  padding: 16px 14px 16px 18px;
  width: calc(100% - 32px);
`;
const StyledEthIcon = styled(EthIcon)`
  width: 30px;
  height: 30px;
`;

const StyledUsdcIcon = styled(UsdcIcon)`
  width: 30px;
  height: 30px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledArrow = styled(Arrow)`
  width: 20px;
  height: 20px;
  margin: 0 12px;
`;
export const Swap = () => {
  const TokenList = [
    {
      name: "Wrapped Ethereum",
      ticker: "WETH",
      icon: <StyledEthIcon id="eth-1" />,
      balance: "10.23124",
    },
    {
      name: "USD Coin",
      ticker: "USDC",
      icon: <StyledUsdcIcon id="usd-2" />,
      balance: "10032423.23124",
    },
  ];

  return (
    <Wrapper>
      <Subtitle>Deposit:</Subtitle>
      <Dropdown
        key="deposit-dropdown"
        tokenList={TokenList}
        onSelect={(token: Token, index: number) =>
          console.log(index, ": ", token.name)
        }
      />
      <Subtitle>Swap:</Subtitle>
      <Dropdown
        key="swap-dropdown"
        tokenList={TokenList}
        onSelect={(token: Token, index: number) =>
          console.log(index, ": ", token.name)
        }
      />
      <br />
      <Subtitle>Swap Ratio:</Subtitle>
      <Grid>
        <Title>1 WETH</Title>
        <StyledArrow/>
        <TextInput
          id="text-input"
          placeholder="0"
          onChange={(value: string) => console.log(value)}
          onError={(text: string) => text === "Error"}
          notes="weth"
        />
      </Grid>
      <br/>
      <Grid>
        <Subtitle>Fee Tier: </Subtitle>
        <ButtonGroups
          onSelect={(feeTier: Number) =>
            console.log("feeTier selected: ", feeTier)
          }
        />
      </Grid>
      <Subtitle>Deposit Amount:</Subtitle>
      <InputGroup
        id="text-input"
        placeholder="0"
        onChange={(value: string) => console.log(value)}
        onError={(text: string) => text === "Error"}
        notes="weth"
        buttonContext={<div>hi</div>}
        onSubmit={() => console.log("clicked!")}
      />
    </Wrapper>
  );
};
