import { LimitOrder } from "./LimitOrder";
import styled from "styled-components";
import Wallet from "@/components/Wallet/wallets";

const Container = styled.div``;

export const Home = () => {
  return (
    <Container>
      {/* <Products products={productsList} /> */}
      <Wallet />
      <LimitOrder />
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  );
};
