import { Box, Title } from "@aperture/uikit";
import { Swap } from "./Swap";
import styled from "styled-components";
import { Positions } from "./Positions";
import { SMBtn } from "@aperture/uikit";
import { useAccount, useDisconnect } from "wagmi";
import ConnectWallets from "@/components/Wallet/ConnectWallets";
import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import { useFetchUserToken } from "@/hooks/useFetchUserToken";
import { useFetchUserPositions } from "@/hooks/useFetchUserPosition";
import { useEffect, useState } from "react";
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

const StyledBox = styled(Box)`
  max-width: 1000px;
  width: 100%;
  height: 521px;
  margin: auto;
  margin-top: 10%;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const HR = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  width: calc(100% - 32px);
`;
const StyledTitle = styled(Title)`
  width: 100%;
  text-align: center;
  position: relative;
  font-family: "Chakra Petch", sans-serif;
  font-size: 24px;
`;
const StyledSMBtn = styled(SMBtn)`
  position: absolute;
  right: 0;
  top: -5px;
`;

const StyledConnectWallets = styled(ConnectWallets)`
  margin: auto;
  width: fit-content;
`;

export const RangeOrder = () => {
  
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const { mutate: wethMutate} = useFetchUserToken( getTokenAddress("weth", 80001), getstrategyAddress("limitOrder", 80001));
  const { mutate: usdcMutate} = useFetchUserToken( getTokenAddress("usdc", 80001), getstrategyAddress("limitOrder", 80001));
  const { mutate: positionMutate } = useFetchUserPositions(getstrategyAddress("limitOrder", 80001));

  useEffect(() => {
    async function mutate() {
      wethMutate()
      usdcMutate()
      positionMutate()
    }
    const intervalId = setInterval(() => {
      mutate()
    }, 1000) // in milliseconds
    return () => clearInterval(intervalId)
  }, [])

  const [ref, isVisible] = useInView({threshold: 0.5})
  const [view, setView] = useState(false);
  useEffect(() => {
  		setTimeout(() => {
  			isVisible ? setView(true) : setView(false)
  		}, 100)
  }, [isVisible])
  return (
    <span ref={ref}>
      <SmoothList transitionDuration={1000} delay={100} visible={view}>
    <StyledBox>
      <StyledTitle>
        UniV3 Range Order
        {isConnected /*  @ts-ignore */ && (
          <StyledSMBtn onClick={disconnect}>Disconnect</StyledSMBtn>
        )}
      </StyledTitle>
      {/* <button>Connect</button> */}
      <HR />
      {isConnected ? (
        <Wrapper>
          <Swap limit={false}/>
          <Positions />
        </Wrapper>
      ) : (
        <StyledConnectWallets />
      )}
    </StyledBox>
    </SmoothList>
    </span>
  );
};
