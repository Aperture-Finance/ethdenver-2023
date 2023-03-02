import { LimitOrder } from "./LimitOrder";
import styled from "styled-components";
import Wallet from "@/components/Wallet/wallets";
import Products from "./Products";
import { EthereumIcon, AvalancheIcon, UsdtEIcon } from "@/packages/assetkit/src/images";

const Container = styled.div``;

const styles = {width:'150%', height:'150%', position: 'absolute', zIndex:'0', opacity:'0.2'}
export const Home = () => {
  const productsList = [
    {
      networkIcon: <UsdtEIcon style={styles} />,
      title: "Terra: PDN",
      description: "i cant write shit, pls help me",
    },
    {
      networkIcon: <AvalancheIcon style={styles} />,
      title: "PDN: Crab market",
      description: "i cant write shit, pls help me",
    },
    {
      networkIcon: <AvalancheIcon style={styles} />,
      title: "PDN: Crab market",
      description: "i cant write shit, pls help me",
    },
    {
      networkIcon: <EthereumIcon style={styles} />,
      title: "Univ3: Limit Order",
      description: "i cant write shit, pls help me",
    },
    {
      networkIcon: <EthereumIcon style={styles} />,
      title: "Univ3: Amtomated Rebalance",
      description: "i cant write shit, pls help me",
    },
    {
      networkIcon: <EthereumIcon style={styles} />,
      title: "Univ3: Take Profit & Stop Loss ",
      description: "i cant write shit, pls help me",
    },
    {
      networkIcon: <EthereumIcon style={styles} />,
      title: "Univ3: DCA",
      description: "i cant write shit, pls help me",
    },
  ];
  return (
    <Container>
      <Products products={productsList} />
      {/* <LimitOrder />
      <Wallet /> */}
    </Container>
  );
};
