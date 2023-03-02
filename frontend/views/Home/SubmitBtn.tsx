import { MAX_UINT256 } from "@/config/constant";
import { getstrategyAddress, getTokenAddress } from "@/config/contracts";
import { SubmitBtn as SubmitButton } from "@/packages/uikit/src/components/InputGroup/TextInput";
import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import ERC20ABI from "@/config/ABI/ERC20ABI.json";
import { useFetchUserToken } from "@/hooks/useFetchUserToken";
import { ERC20TokenMap } from "@/config/token/tokenMap";
import { utils } from "ethers";

export interface SubmitBtnProps {
  ticker: string;
  contractType: string;
}

export interface ErrorBtnProps {
  text: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ ticker, contractType }) => {
  const { chain } = useNetwork();
  const {
    data: tokenData,
    isLoading: tokenIsLoading,
    error: tokenError,
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

  return (
    <SubmitButton
      error={tokenIsLoading && !tokenError}
      onClick={
        utils.formatUnits(
          tokenData?.allowanceBN,
          ERC20TokenMap[ticker].decimals
        ) //todo
          ? deposit()
          : approve()
      }
    >
      {tokenIsLoading
        ? "Loading"
        : tokenError
        ? `Failed fatch ${ticker} data`
        : utils.formatUnits(
            tokenData?.allowanceBN,
            ERC20TokenMap[ticker].decimals
          )
        ? "Deposit"
        : "Approve"}
    </SubmitButton>
  );
};

export default SubmitBtn;

export const ErrorBtn: React.FC<ErrorBtnProps> = ({ text }) => {
  return <SubmitButton error>{text}</SubmitButton>;
};
