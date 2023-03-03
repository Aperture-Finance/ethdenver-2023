import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useBalance,
} from "wagmi";
import {
  MetamaskIcon,
  CoinbaseIcon,
  WalletConnectIcon,
  OkxIcon,
} from "@aperture/assetkit";
import styled from "styled-components";
import { Box, Title } from "@/packages/uikit/src";

const Wrapper = styled.div`
  width: 210px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
const WalletBtn = styled(Box)`
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  }
`;
const iconStyle = {
  width: "60px",
  height: "60px",
  marginTop: "10px",
  marginBottom: "10px",
};
const StyledTitle = styled(Title)`
  text-align: center;
  width: 100%;
`;

const ConnectWallets = (props:any) => {
  const { address, connector, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { data } = useBalance({ address });

  const wallets = ["Metamask", "Coinbase", "Wallet Connect", "OKX"];
  const walletIcons = [
    <MetamaskIcon style={iconStyle} />,
    <CoinbaseIcon style={iconStyle} />,
    <WalletConnectIcon style={iconStyle} />,
    <OkxIcon style={iconStyle} />,
  ];
  return (
    <div {...props}>
      <br/>
      {/* isConnected:{isConnected.toString()}<br/>
      {isLoading ? "Connecting..." : 'Connect Wallet'} */}
      <Wrapper>
        {connectors.map((connector, index) => (
          <WalletBtn
            // disabled={!connector.ready}
            key={connector.id} //@ts-ignore
            onClick={() => connect({ connector })}
          >
            {walletIcons[index]}
            <br />
            {wallets[index]}
            {/* {!connector.ready && "(unsupported)"} */}
            {/* {isLoading ? "(connecting)" : wallets[index]} */}
          </WalletBtn>
        ))}
      </Wrapper>
      <StyledTitle>{isLoading && "Connecting..."}</StyledTitle>
      
    </div>
  );
};
export default ConnectWallets;
