import { Box, Title } from "@aperture/uikit";
import { Swap } from "./Swap";
import styled from "styled-components";
import { Positions } from "./Positions";
import { SMBtn } from "@aperture/uikit";
import { useAccount, useDisconnect } from "wagmi";
import ConnectWallets from "@/components/Wallet/ConnectWallets";

const StyledBox = styled(Box)`
  max-width: 1000px;
  width: 100%;
  height: 521px;
  margin: auto auto;
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

export const LimitOrder = () => {
  const { disconnect } = useDisconnect();
  const { address, connector, isConnected } = useAccount();

  return (
    <StyledBox>
      <StyledTitle>
        UniV3 Limit Order
        {isConnected /*  @ts-ignore */ && (
          <StyledSMBtn onClick={disconnect}>Disconnect</StyledSMBtn>
        )}
      </StyledTitle>
      {/* <button>Connect</button> */}
      <HR />
      {isConnected ? (
        <Wrapper>
          <Swap />
          <Positions />
        </Wrapper>
      ) : (
        <StyledConnectWallets />
      )}
    </StyledBox>
  );
};
