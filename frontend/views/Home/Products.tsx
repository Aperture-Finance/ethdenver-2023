import { Box } from "@/packages/uikit/src";
import { ReactNode, useState } from "react";
import styled from "styled-components";

export interface ProductsProps {
  products: ProductProps[];
}
export interface ProductProps {
  networkIcon: ReactNode;
  title: string;
  description: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
`;

const CustomizedBox = styled(Box)<{ size: number }>`
  width: ${({ size }) => (size === 0 ? 350 : 250 - size * 50)}px;
  height: ${({ size }) => (size === 0 ? 175 : 125 - size * 25)}px;
  cursor: default;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  :hover {
    background: ${ ({theme}) =>  theme.colors.white};
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ZIndex = styled.div`
  position: relative;
  z-index: 9;
`;
const Title = styled.div<{ hovered?: boolean }>`
  margin: auto;
  font-size: ${({hovered}) => (hovered ? "22px" : "12px")};
  font-weight: ${({hovered}) => (hovered ? "500" : "400")};
  padding: ${({hovered}) => (hovered ? "10px" : "0px")};
  ${({hovered}) => (hovered ? `font-family: "Chakra Petch", sans-serif;` : "")}
`;
const Description = styled.div<{ hovered?: boolean }>`
  padding: 5px 10px;
`;
const Products: React.FC<ProductsProps> = ({ products }) => {
  const [hovered, setHover] = useState(Math.floor(products.length / 2));

  //size 0, 1, 2,3
  return (
    <Container>
      {products.map((product, index) => (
        <div key={"outerbox" + index} onMouseEnter={() => setHover(index)}>
          <CustomizedBox
            key={"box" + index}
            size={Math.abs(hovered - index) > 3 ? 3 : Math.abs(hovered - index)}
          >
            {product.networkIcon}
            <ZIndex>
              <Title hovered={hovered === index}>{product.title}</Title>
              {hovered === index &&<Description hovered={hovered === index}>{product.description}</Description>}
            </ZIndex>
          </CustomizedBox>
        </div>
      ))}
    </Container>
  );
};
export default Products;
