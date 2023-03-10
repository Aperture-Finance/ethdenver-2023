import { Box } from "@/packages/uikit/src";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import {BWDarkLogo} from "@aperture/assetkit";

export interface ProductsProps {
  products: ProductProps[];
  goto3: () => void;
  goto4: () => void;
}
export interface ProductProps {
  networkIcon: ReactNode;
  title: string;
  description: string;
}

const ZIndex = styled.div`
  position: relative;
  z-index: 9;
`;
const Title = styled.div<{ hovered?: boolean }>`
  margin: auto;
  font-size: ${({ hovered }) => (hovered ? "35px" : "15px")};
  font-weight: ${({ hovered }) => (hovered ? "500" : "400")};
  padding: ${({ hovered }) => (hovered ? "10px" : "0px")};
  color: white;
  ${({ hovered }) => hovered ? `font-family: "Chakra Petch", sans-serif;`: ""}
`;

const Description = styled.div<{ hovered?: boolean }>`
  padding: 5px 10px;
  font-size: 18px;
  color: white; 
`;

const CustomizedBox = styled(Box)<{ size: number }>`
  width: ${({ size }) => (size === 0 ? 500 : 200 - size * 50)}px;
  height: ${({ size }) => (size === 0 ? 350 : 150 - size * 25)}px;
  cursor: default;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  :hover {
    background: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
  }

  :hover ${Title} {
    color: black;
  }
  :hover ${Description} {
    color: black;
  }
`;

const LearnMore = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
  position: absolute;
  bottom: 20px;
  left: 20px;
  `
const Products: React.FC<ProductsProps> = ({ products, goto3, goto4 }) => {
  const [hovered, setHover] = useState(0);

  //size 0, 1, 2,3
  return (
  <>
    <div style={{position:'absolute', top:'15%', width:'100%', textAlign:'center', fontSize:'35px', fontFamily:'"Chakra Petch", sans-serif'}}>The latest. Take a look at what’s new, right now.</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap:"10px",
        }}
      >
        
        {products.map((product, index) => (
          <div key={"outerbox" + index} onMouseEnter={() => setHover(index)} onClick={() => index===0?goto3():goto4()}>
            <CustomizedBox
              key={"box" + index}
              size={
                Math.abs(hovered - index) > 3 ? 3 : Math.abs(hovered - index)
              }
            >
              {product.networkIcon}
              <ZIndex>
                <Title hovered={hovered === index}>{product.title}</Title>
                {hovered === index && (
                  <Description hovered={hovered === index}>
                    {product.description}
                  </Description>
                )}
              </ZIndex>
              {hovered === index &&<LearnMore >Learn more </LearnMore>}
            </CustomizedBox>
          </div>
        ))}
      </div> 
      </>
  );
};
export default Products;
