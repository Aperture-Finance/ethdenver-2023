import { MAX_UINT256 } from "@/config/constant";
import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import { SubmitBtn as SubmitButton } from "@/packages/uikit/src/components/InputGroup/TextInput";
import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import ERC20ABI from "@/config/ABI/ERC20ABI.json";
import { useFetchUserToken } from "@/hooks/useFetchUserToken";
import { ERC20TokenMap } from "@/config/token/tokenMap";
import { utils } from "ethers";
import { useEffect } from "react";

export interface SubmitBtnProps {
  ticker: string;
  contractType: string;
}

export interface ErrorBtnProps {
  text: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ ticker, contractType }) => {
  ticker = ticker.toLocaleLowerCase();
  const { chain } = useNetwork();
  const {
    data: tokenData,
    isLoading: tokenIsLoading,
    error: tokenError,
    // mutate: tokenMutate,
    // isValidating: tokenisValidating,
  } = useFetchUserToken(
    getTokenAddress(ticker, chain!.id),
    getstrategyAddress(contractType, chain!.id)
  );

  const { config: approveConfig } = usePrepareContractWrite({
    address: getTokenAddress(ticker, chain!.id),
    abi: ERC20ABI,
    functionName: "approve",
    args: [getstrategyAddress(contractType, chain!.id), MAX_UINT256],
  });
  const {
    data: approveData,
    isLoading: approveIsLoading,
    isSuccess: approveIsSuccess,
    write: approve,
  } = useContractWrite(approveConfig);

  // const { config: revertapproveConfig } = usePrepareContractWrite({
  //   address: getTokenAddress(ticker, chain!.id),
  //   abi: ERC20ABI,
  //   functionName: "approve",
  //   args: [getstrategyAddress(contractType, chain!.id), "0x00"],
  // });
  // const {
  //   data,
  //   isLoading,
  //   write: revert,
  // } = useContractWrite(revertapproveConfig);

  const { config: depsitConfig } = usePrepareContractWrite({
    address: getTokenAddress(ticker, chain!.id),
    abi: ERC20ABI,
    functionName: "approve", // todo
    args: [getstrategyAddress(contractType, chain!.id), MAX_UINT256], //todo
  });
  const {
    data: depositData,
    isLoading: depositIsLoading,
    isSuccess: depositIsSuccess,
    write: deposit,
  } = useContractWrite(depsitConfig);

  // useEffect(() => {
  //   tokenMutate();
  // }, [approveIsSuccess]);

  console.log(approveData, approveIsLoading, approveIsSuccess);

  return (
    <>
      approveIsLoading: {String(approveIsLoading)} <br/>
      approveIsSuccess: {String(approveIsSuccess)}
      {/* <button onClick={() => revert?.()}>revert</button> */}
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
