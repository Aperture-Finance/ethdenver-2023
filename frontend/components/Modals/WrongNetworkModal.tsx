import { isChainSupported } from "@/utils/wagmi";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

const WrongNetworkModal = () => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  if (isConnected && chain && !isChainSupported(chain.id)) {
    return (
      <div>
        <span style={{color:'red'}}>Wrong Network Modal: Wrong Network!</span>
        <>
          {chain && <div>Current chain: {chain.name}</div>}
          Connet to chain:
          {chains.map((x) => (
            <button
              disabled={!switchNetwork || x.id === chain?.id}
              key={x.id}
              onClick={() => switchNetwork?.(x.id)}
            >
              {x.name}
              {isLoading && pendingChainId === x.id && " (switching)"}
            </button>
          ))}
          <div>{error && error.message}</div>
        </>
        <br/>
      </div>
    ); // todo: replace wrongnetwork modal here
  } else return <></>;
};

export default WrongNetworkModal;
