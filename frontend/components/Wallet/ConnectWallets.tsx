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
  gap: 20px;
`;
const WalletBtn = styled(Box)`
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    :hover {
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
    }
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
    <MetamaskIcon style={iconStyle} key="metamask"/>,
    <CoinbaseIcon style={iconStyle} key="coinbase"/>,
    <WalletConnectIcon style={iconStyle} key="walletconnect"/>,
    <OkxIcon style={iconStyle} key="okx"/>,
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
