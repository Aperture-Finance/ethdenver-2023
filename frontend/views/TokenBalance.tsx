import { ERC20TokenMap } from "@/config/token/tokenMap";
import { getTokenAddress, getstrategyAddress } from "@/config/contracts";
import { useNetwork, useProvider, useSigner } from "wagmi";
import { useFetchUserToken } from "@/hooks/useFetchUserToken";
import { utils } from "ethers";
import { approve } from "@/transactions/tokenApproval";

import { ethers } from "ethers";
import ERC20ABI from "@/config/ABI/ERC20ABI.json";
import { MAX_UINT256 } from "@/config/constant";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export const TokensBalance = () => {
  return (
    <div>
      <br />
      <div>Token balance</div>
      {Object.keys(ERC20TokenMap)
        .filter((key: string) => !ERC20TokenMap[key].native)
        .map((key: string) => (
          <TokenBalance ticker={key} key={key} />
        ))}
    </div>
  );
};

const TokenBalance = (props: { ticker: string }) => {
  const { ticker } = props;

  if ( ERC20TokenMap[ticker]) {
    const address = getTokenAddress(ticker, 80001);
    const contractAddress = getstrategyAddress("limitOrder", 80001);
    const { data, isLoading, error } = useFetchUserToken(
      getTokenAddress(ticker, 80001),
      getstrategyAddress("limitOrder", 80001)
    );

    const { config } = usePrepareContractWrite({
      address: address,
      abi: ERC20ABI,
      functionName: "approve",
      args: [contractAddress, MAX_UINT256],
    });
    const {
      data: approveData,
      isLoading: isApproveLoading,
      isSuccess: isApproveSuccess,
      write,
    } = useContractWrite(config);
    // console.log(approveData, isApproveLoading, isApproveSuccess);

    return (
      <div>
        <div>Key: {ticker}</div>
        <div>Address: {address}</div>
        {!isLoading && !error ? (
          <div>
            balance:{" "}
            {utils.formatUnits(data?.balanceBN, ERC20TokenMap[ticker].decimals)}{" "}
            {ticker} <br />
            approved:{" "}
            {utils.formatUnits(
              data?.allowanceBN,
              ERC20TokenMap[ticker].decimals
            )}{" "}
            <button disabled={!write} onClick={() => write?.()}>
              {" "}
              approve {ticker}
              {}
            </button>
          </div>
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          <div>Loading...</div>
        )}

        <br />
      </div>
    );
  }

  return <></>;
};

const ApprovalButtonContext = (props: {
  tokenAddress: `0x${string}`;
  contractAddress: string;
}) => {
  const { config } = usePrepareContractWrite({
    address: props.tokenAddress,
    abi: ERC20ABI,
    functionName: "approve",
    args: [props.contractAddress, MAX_UINT256],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isSuccess) {
    return <div>Approved</div>;
  } else {
    return <div>Failed </div>;
  }
};
