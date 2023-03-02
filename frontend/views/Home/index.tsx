import { LimitOrder } from "./LimitOrder";
import styled from "styled-components";
import Wallet from "@/components/Wallet/wallets";
import Products from "./Products";
import { productsList } from "./productsLisr";

const Container = styled.div``;

export const Home = () => {
  return (
    <Container>
      <Products products={productsList} />
      <Wallet />
      <LimitOrder />
    </Container>
  );
};
