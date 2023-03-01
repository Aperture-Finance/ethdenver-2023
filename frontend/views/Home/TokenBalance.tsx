import { ERC20TokenMap } from "@/config/token/tokenMap";
import { getTokenAddress, getstrategyAddress } from "@/config/contracts";
import { useNetwork } from "wagmi";
import { useFetchUserToken } from "@/hooks/useFetchUserToken";
import { utils } from "ethers";

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
  const { chain } = useNetwork();
  const { ticker } = props;

  if (chain && chain.id && ERC20TokenMap[ticker]) {
    const address = getTokenAddress(ticker, chain.id);
    const contractAddress = getstrategyAddress("limitOrder", chain.id);
    const { data, isLoading, error } = useFetchUserToken(
      address,
      contractAddress
    );
    return (
      <div>
        <div>Key: {ticker}</div>
        <div>Address: {address}</div>
        {!isLoading && !error ? (
          <div>
            balance:{" "}
            {utils.formatUnits(data?.balanceBN, ERC20TokenMap[ticker].decimals)}{" "}
            {ticker}{" "}<br/>
            approved:{" "}
            {utils.formatUnits(data?.allowanceBN, ERC20TokenMap[ticker].decimals)}{" "}
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
