import { MAX_UINT256 } from "@/config/constant";
import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import { SubmitBtn as SubmitButton } from "@/packages/uikit/src/components/InputGroup/TextInput";
import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import ERC20ABI from "@/config/ABI/ERC20ABI.json";
import Dummy from "@/config/ABI/Dummy.json";
import { useFetchUserToken } from "@/hooks/useFetchUserToken";
import { ERC20TokenMap } from "@/config/token/tokenMap";
import { utils } from "ethers";
import { useState } from "react";
import { Token } from "@/packages/uikit/src";

export interface SubmitBtnProps {
  tokenA: Token;
  tokenB: Token;
  contractType: string;
  feeTier: number;
  ratio: number;
  amount: number;
}

export interface ErrorBtnProps {
  text: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({
  tokenA,
  tokenB,
  contractType,
  feeTier,
  ratio,
  amount,
}) => {
  const ticker = tokenA.ticker.toLocaleLowerCase();
  const { chain } = useNetwork();
  const {
    data: tokenData,
    isLoading: tokenIsLoading,
    error: tokenError,
    mutate,
    isValidating: tokenisValidating,
  } = useFetchUserToken(
    getTokenAddress(ticker, chain!.id),
    getstrategyAddress(contractType, chain!.id)
  );

  //aprove
  const { config: approveConfig } = usePrepareContractWrite({
    address: getTokenAddress(ticker, chain!.id),
    abi: ERC20ABI,
    functionName: "approve",
    args: [getstrategyAddress(contractType, chain!.id), MAX_UINT256],
  });
  const { write: approve } = useContractWrite(approveConfig);
  //revert
  const { config: revertapproveConfig } = usePrepareContractWrite({
    address: getTokenAddress(ticker, chain!.id),
    abi: ERC20ABI,
    functionName: "approve",
    args: [getstrategyAddress(contractType, chain!.id), "0x00"],
  });
  const { write: revert } = useContractWrite(revertapproveConfig);
  //deposit
  const { config: depsitConfig } = usePrepareContractWrite({
    address: getstrategyAddress(contractType, chain!.id),
    abi: Dummy,
    functionName: "openPositionForLimitOrder", // todo
    args: [
      getTokenAddress(tokenA.ticker.toLocaleLowerCase(), chain!.id),
      getTokenAddress(tokenB.ticker.toLocaleLowerCase(), chain!.id),
      feeTier,
      amount,
      ratio,
    ], //todo
  });
  const {
    write: deposit,
    data,
    isLoading,
    isSuccess,
  } = useContractWrite(depsitConfig);
  console.log("deposit:", data, isLoading, isSuccess);
  return (
    <>
      <button onClick={() => revert?.()}>revert</button>
      <button onClick={() => mutate()}>mutate</button>
      {Number(
        utils.formatUnits(
          tokenData?.allowanceBN,
          ERC20TokenMap[ticker].decimals
        )
      ) <= 0 ? (
        <SubmitButton
          error={tokenIsLoading && !tokenError}
          onClick={() => {
            approve?.();
          }}
        >
          {tokenIsLoading
            ? "Loading"
            : tokenError
            ? `Failed fatch ${ticker} data`
            : "Approve"}
        </SubmitButton>
      ) : (
        <SubmitButton
          error={tokenIsLoading && !tokenError}
          onClick={() => {
            deposit?.();
          }}
        >
          {tokenIsLoading
            ? "Loading"
            : tokenError
            ? `Failed fatch ${ticker} data`
            : "Deposit"}
        </SubmitButton>
      )}
    </>
  );
};

export default SubmitBtn;

export const ErrorBtn: React.FC<ErrorBtnProps> = ({ text }) => {
  return (
    <div>
      <SubmitButton error>{text}</SubmitButton>
    </div>
  );
};
