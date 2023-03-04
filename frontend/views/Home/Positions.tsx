import { PositionCard } from "@/components/PositionCard";
import { getstrategyAddress } from "@/config/contracts";
import { useFetchUserPositions } from "@/hooks/useFetchUserPosition";
import {
  ButtonGroups,
  Dropdown,
  Subtitle,
  Token,
  InputGroup,
  TextInput,
  Title,
} from "@/packages/uikit/src";
import styled from "styled-components";
import { EthIcon } from "./icon/eth";
import { UsdcIcon } from "./icon/usdc";

const Wrapper = styled.div`
  padding: 0px 14px 16px 18px;
  width: calc(100% - 32px);
  height: 450px;
  overflow-x: hidden;
  overflow-y: scroll;
`;
const StyledEthIcon = styled(EthIcon)`
  width: 25px;
  height: 25px;
  margin-bottom: -2px;
`;

const StyledUsdcIcon = styled(UsdcIcon)`
  width: 25px;
  height: 25px;
  margin-bottom: -2px;
`;

export const Positions = () => {
  const {data, error, isLoading } = useFetchUserPositions(getstrategyAddress("limitOrder", 80001))
  // if (!isLoading) {console.log("data position:",data)}

  const TokenList: [Token, Token] = [
    {
      name: "Wrapped Ethereum",
      ticker: "WETH",
      icon: <StyledEthIcon />,
      balance: 10.23124,
    },
    {
      name: "USD Coin",
      ticker: "USDC",
      icon: <StyledUsdcIcon />,
      balance: 10023.23124,
    },
  ];

  return (
    <Wrapper>
      <Subtitle>Positions:</Subtitle>
      {!error&& !isLoading && data.pos &&(data.pos.map((position:any, index:number) => (
        <PositionCard
        key={"position" + index}
        positionId={index+1}
        tokens={TokenList}
        position={position}
        nft={data.URIs[index]}
      />
      )))}
      
    </Wrapper>
  );
};
