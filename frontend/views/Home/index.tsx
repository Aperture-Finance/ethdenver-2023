import { LimitOrder } from "./LimitOrder";
import styled from "styled-components";
import Products from "./Products";
import { productsList } from "./productsLisr";
import ConnectWallets from "@/components/Wallet/ConnectWallets";
import { TokensBalance } from "../TokenBalance";
import Wallet from "@/components/Wallet/wallets";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import ERC20ABI from "@/config/ABI/ERC20ABI.json";
import { MAX_UINT256 } from "@/config/constant";

const Container = styled.div``;


export const Home = () => {
  const { config } = usePrepareContractWrite({
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    abi: ERC20ABI,
    functionName: 'approve',
    args: ["0x119d77BFA30E895527Dd7bc66f338EC4920e8469", MAX_UINT256],
  
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  return (
    <Container>
      <div>
      <button disabled={!write} onClick={() => write?.()}>
        Feed
      </button>
      <div>isLoading: {String(isLoading)}</div>
      <div>isSuccess: Transaction: {JSON.stringify(data)} {String(isSuccess)}</div>
      <br/>
    </div>
      {/* <Products products={productsList} /> */}
      <Wallet/>
      <LimitOrder />

     
    </Container>
  );
};
