import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useBalance,
} from "wagmi";

import { isChainSupported, isChainTestnet } from "@/utils/wagmi";
import { TokensBalance } from "@/views/TokenBalance";

const Wallet = () => {
  const { address, connector, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { data } = useBalance({ address });

  return (
    <div>
      {/* wallet connection */}
      <div>
        <div>isConnected: {String(isConnected)}{address}</div>
      </div>
      {isConnected && chain ? (
        <div>
          <div>
            {" "}
            Network id: <>{String(chain.id)}</>{" "}
          </div>
          <div>isChainSupported: {String(isChainSupported(chain.id))}</div>
          <div>isChainTestnet: {String(isChainTestnet(chain.id) ?? false)}</div>
          <div>wallet address: {address}</div>
          <div>
            wallet balance: {data?.formatted} {data?.symbol}
          </div>
          <div>Wallet type: {connector?.name}</div>
          <button onClick={() => disconnect()}>Disconnect</button>
          <br />
          <TokensBalance />
        </div>
      ) : (
        <div>
          {connectors.map((connector, index) => (
            <button
              // disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
            >
              {/* {connector.name}
                  {!connector.ready && "(unsupported)"}
                  {isLoading &&
                    connector.id === pendingConnector?.id &&
                    "(connecting)"} */}
              connetor {index}
            </button>
          ))}
        </div>
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
};
export default Wallet;
