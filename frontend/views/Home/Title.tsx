import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const TitleT = styled.div`
  width: fit-content;
  font-family: "Chakra Petch", sans-serif;
  font-size: 50px;
  position: absolute;
  right: 50px;
  bottom: 100px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  width: fit-content;
  font-size: 30px;
  position: absolute;
  right: 50px;
  bottom: 50px;
`;
const Title = ({}) => {
  return (
    <>
      <TitleT>Revenue Generating Limit<br/>& Range Orders on Polygon</TitleT>
      <SubTitle>Leveraging single-sided liquidity on CLMM DEX's for better swaps</SubTitle>

      <Spline
        scene="https://prod.spline.design/ALqUW0zqNf15LNEW/scene.splinecode"
        style={{
          position: "absolute",
          width: "105%",
          height: "105%",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      />
    </>
  );
};

export default Title;
