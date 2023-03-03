import { LimitOrder } from "./LimitOrder";
import styled from "styled-components";
import Products from "./Products";
import { productsList } from "./productsLisr";
import ConnectWallets from "@/components/Wallet/ConnectWallets";


const Container = styled.div``;


export const Home = () => {
  
  return (
    <Container>
      <Products products={productsList} />
      <ConnectWallets /> 
      <LimitOrder />

     
    </Container>
  );
};
