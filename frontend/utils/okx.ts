import { Chain } from "wagmi";
import { InjectedConnector } from "@wagmi/core/connectors/injected";

export class OKXWalletConnector extends InjectedConnector {
  readonly id = "okxWallet";
  readonly name = "OKX Wallet";
  readonly ready = true;
  readonly package = true;

  constructor(config: { chains?: Chain[] }) {
    super(config);
  }

  async getProvider() {
    let provider = null;
    //@ts-ignore
    if (typeof window.okxwallet !== "undefined") {
      //@ts-ignore
      provider = window.okxwallet;
      try {
        await provider.request({ method: "eth_requestAccounts" });
      } catch (error) {
        throw new Error("User Rejected");
      }
    } else {
      throw new Error("No OKX Chain Wallet found");
    }
    return provider;
  }
}
