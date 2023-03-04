import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import { ERC20TokenMap } from "@/config/token/tokenMap";
import { useFetchUserToken, useFetchUserTokens } from "@/hooks/useFetchUserToken";
import {
  ButtonGroups,
  Dropdown,
  Subtitle,
  Token,
  InputGroup,
  TextInput,
  Title,
} from "@/packages/uikit/src";
import { utils } from "ethers";
import { useState } from "react";
import styled from "styled-components";
import { Arrow } from "./icon/down";
import SubmitBtn, { ErrorBtn } from "./SubmitBtn";
import { TokenList, TokenList2 } from "./tokenList";

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
  const [feeTier, setFeeTier] = useState<number>(5);
  const [amount, setAmount] = useState<string | null>(null);
  const { data: wethData, isLoading:wethisLoading} = useFetchUserToken(getTokenAddress('weth', 80001), getstrategyAddress("limitOrder", 80001));
  const { data: usdcData, isLoading:usdcisLoading} = useFetchUserToken(getTokenAddress('usdc', 80001), getstrategyAddress("limitOrder", 80001));
  if(!wethisLoading&&!usdcisLoading){
    console.log(utils.formatUnits(wethData?.balanceBN, ERC20TokenMap.weth.decimals));
  
  TokenList[0].balance = Number(utils.formatUnits(wethData?.balanceBN, ERC20TokenMap.weth.decimals))
  TokenList[1].balance = Number(utils.formatUnits(usdcData?.balanceBN, ERC20TokenMap.weth.decimals))
  TokenList2[0].balance = Number(utils.formatUnits(wethData?.balanceBN, ERC20TokenMap.weth.decimals))
  TokenList2[1].balance = Number(utils.formatUnits(usdcData?.balanceBN, ERC20TokenMap.weth.decimals))
  }
  
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
        tokenList={TokenList2}
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
          onSelect={(feeTier: number) => setFeeTier(feeTier * 10000)}
        />
      </Grid>
      <Subtitle>Deposit Amount:</Subtitle>
      <InputGroup
        id="text-input"
        placeholder="0"
        onChange={(value: string) => setAmount(value)}
        onError={(text: string) => !text}
        notes={tokenA?.ticker ?? ""}
        submitButton={
          tokenA &&
          tokenB &&
          tokenA.ticker !== tokenB.ticker &&
          ratio &&
          Number(ratio) > 0 &&
          amount &&
          Number(amount) > 0 &&
          Number(amount) < Number(tokenA.balance) ? (
            <SubmitBtn
              tokenA={tokenA}
              tokenB={tokenB}
              contractType="limitOrder"
              feeTier={feeTier}
              ratio={Number(ratio)}
              amount={Number(amount)}
            />
          ) : (
            <ErrorBtn
              text={
                !(tokenA && tokenB && tokenA.ticker !== tokenB.ticker)
                  ? "Select The Valid Token"
                  : !(ratio && Number(ratio) > 0)
                  ? "Missing Swap Ratio"
                  : !(amount && Number(amount) > 0)
                  ? "Missing Deposit Amount"
                  : Number(amount) > Number(tokenA.balance)
                  ? "Deposit Amount Exceed Balance"
                  : "undefined error"
              }
            />
          )
        }
      />
    </Wrapper>
  );
};
