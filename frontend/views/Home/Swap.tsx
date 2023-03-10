import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import { ERC20TokenMap } from "@/config/token/tokenMap";
import { useFetchCurrentPirce } from "@/hooks/useFetchCurrentPrice";
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
  margin: 0 16px 0 8px;
`;

const Box = styled.div`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray};
  margin-right: 8px;
  padding: 16px;
  white-space: nowrap;
`
export const Swap = (props:any) => {
  const [tokenA, setTokenA] = useState<Token | null>(null);
  const [tokenB, setTokenB] = useState<Token | null>(null);
  const [ratio, setRatio] = useState<string | null>(null);
  const [feeTier, setFeeTier] = useState<number>(5);
  const [amount, setAmount] = useState<string | null>(null);
  const { data: wethData, error: wethError, isLoading: wethisLoading, } = useFetchUserToken(getTokenAddress('weth', 80001), getstrategyAddress("limitOrder", 80001));
  const { data: usdcData, error: usdcError, isLoading: usdcisLoading} = useFetchUserToken(getTokenAddress('usdc', 80001), getstrategyAddress("limitOrder", 80001));
  const { data: currentPriceData, error: currentPriceError, isLoading: currentPriceisLoading} = useFetchCurrentPirce()
  
  if(!wethisLoading && !usdcisLoading && wethData && usdcData){
    TokenList[0].balance = Number(utils.formatUnits(wethData?.balanceBN, ERC20TokenMap.weth.decimals))
    TokenList[1].balance = Number(utils.formatUnits(usdcData?.balanceBN, ERC20TokenMap.weth.decimals))
    TokenList2[0].balance = Number(utils.formatUnits(wethData?.balanceBN, ERC20TokenMap.weth.decimals))
    TokenList2[1].balance = Number(utils.formatUnits(usdcData?.balanceBN, ERC20TokenMap.weth.decimals))
  }
 
  let currentp = 1
  if (!currentPriceError && !currentPriceisLoading && currentPriceData) {
    currentp = parseFloat(utils.formatEther(currentPriceData?.currentPrice))
  }
  return (
    <Wrapper>
      <Subtitle>Pay with:</Subtitle>
      <Dropdown
        key="deposit-dropdown"
        tokenList={TokenList}
        onSelect={(token: Token) => setTokenA(token)}
      />
      <Subtitle>Receive:</Subtitle>
      <Dropdown
        key="swap-dropdown"
        tokenList={TokenList2}
        onSelect={(token: Token) => setTokenB(token)}
      />
      <br />
      {props.limit?<Subtitle>Target Price:</Subtitle>:
      <Subtitle>Upper Tick Price:</Subtitle>}
      <Grid> {/* @ts-ignore */}
        {/* {props.limit&&<Title style={{whiteSpace: "nowrap"}}>1 {tokenA?.ticker ?? "Token"} </Title> }@ts-ignore */}
        {!props.limit&& <Box>{tokenA && tokenB && currentPriceData&& currentp&&tokenA.ticker.toLocaleLowerCase()==="weth"?currentp.toFixed(2):(1/currentp).toFixed(2)} {tokenB?.ticker ?? "Token"}</Box>}
        {!props.limit&&<StyledArrow />}
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
