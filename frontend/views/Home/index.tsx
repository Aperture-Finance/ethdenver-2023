import { LimitOrder } from "./LimitOrder";
import styled from "styled-components";
import Wallet from "@/components/Wallet/wallets";
import { productsList } from "./productsLisr";
import Products from "./Products";
import Title from "./Title";
import { useRef } from "react";

const Container = styled.div``;

const Wrapper1 = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Wrapper2 = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #E1E6EF;
`;

export const Home = () => {
  const page1 = useRef<null | HTMLDivElement>(null);
  const page2 = useRef<null | HTMLDivElement>(null);
  const page3 = useRef<null | HTMLDivElement>(null);

  return (
    <Container>
      <Wrapper1
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
      </Wrapper1>
      <Wrapper2
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
      </Wrapper2>
      <Wrapper2 ref={page3}>
        <LimitOrder />
      </Wrapper2>
    </Container>
  );
};
