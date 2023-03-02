import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import {
  useFetchUserToken,
  useFetchUserTokens,
} from "@/hooks/useFetchUserToken";
import {
  ButtonGroups,
  Dropdown,
  Subtitle,
  Token,
  InputGroup,
  TextInput,
  Title,
} from "@/packages/uikit/src";
import { useState } from "react";
import styled from "styled-components";
import { useNetwork } from "wagmi";
import { Arrow } from "./icon/down";
import { TokenList } from "./tokenList";

const Wrapper = styled.div`
  padding: 0px 14px 16px 18px;
  width: calc(100% - 32px);
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
  const [tokenA, setTokenA] = useState<Token | null>(null);
  const [tokenB, setTokenB] = useState<Token | null>(null);
  const [ratio, setRatio] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);
  const getButtonText = () => {
    if (!(tokenA && tokenB && tokenA.ticker !== tokenB.ticker)) {
      return "Select Token";
    } else if (!(ratio && Number(ratio) > 0)) {
      return "Missing Swap Ratio";
    } else if (!(amount && Number(amount) > 0)) {
      return "Missing Deposit Amount";
    } else if (Number(amount) > Number(tokenA.balance)) {
      return "Deposit Amount Exceed Balance";
    } else if (tokenA) {
      return "Approve";
    } else {
      return "Deposit";
    }
  };
  return (
    <Wrapper>
      <Subtitle>Deposit:</Subtitle>
      <Dropdown
        key="deposit-dropdown"
        tokenList={TokenList}
        onSelect={(token: Token) => setTokenA(token)}
      />
      <Subtitle>Swap:</Subtitle>
      <Dropdown
        key="swap-dropdown"
        tokenList={TokenList}
        onSelect={(token: Token) => setTokenB(token)}
      />
      <br />
      <Subtitle>Swap Ratio:</Subtitle>
      <Grid>
        <Title>1 {tokenA?.ticker ?? "Token"}</Title> {/*@ts-ignore*/}
        <StyledArrow />
        <TextInput
          id="text-input"
          placeholder="0"
          onChange={(value: string) => setRatio(value)}
          onError={(text: string) => text === "Error"}
          notes={tokenB?.ticker ?? "Token"}
        />
      </Grid>
      <br />
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
        onChange={(value: string) => setAmount(value)}
        onError={(text: string) => !text}
        notes="weth"
        submitButton={<div>test</div>}
      />
    </Wrapper>
  );
};
