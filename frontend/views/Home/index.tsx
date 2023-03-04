import { LimitOrder } from "./LimitOrder";
import styled from "styled-components";
import Wallet from "@/components/Wallet/wallets";
import { productsList } from "./productsLisr";
import Products from "./Products";
import Title from "./Title";
import { useRef } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Home = () => {
  const page1 = useRef<null | HTMLDivElement>(null);
  const page2 = useRef<null | HTMLDivElement>(null);
  const page3 = useRef<null | HTMLDivElement>(null);

  return (
    <Container>
      <Wrapper
        ref={page1}
        onClick={() =>
          page2 &&
          page2.current &&
          page2.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          })
        }
      >
        <Title />
      </Wrapper>
      <Wrapper
        ref={page2}
        onClick={() =>
          page3 &&
          page3.current &&
          page3.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          })
        }
      >
        <Products products={productsList} />
      </Wrapper>
      <Wrapper ref={page3}>
        <LimitOrder />
      </Wrapper>
    </Container>
  );
};
