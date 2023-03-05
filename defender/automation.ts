import { RelayerParams } from "defender-relay-client/lib/relayer";
import {
  DefenderRelaySigner,
  DefenderRelayProvider,
} from "defender-relay-client/lib/ethers";
import { Contract, ethers } from "ethers";

const KEEPER_ABI = [
  {
    inputs: [{ internalType: "bytes", name: "checkData", type: "bytes" }],
    name: "checkUpkeep",
    outputs: [
      { internalType: "bool", name: "upkeepNeeded", type: "bool" },
      { internalType: "bytes", name: "performData", type: "bytes" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "performData", type: "bytes" }],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

exports.main = async function (signer: DefenderRelaySigner) {
  const keeper = new Contract(
    "0x48F67Cc3D88F051491F51E4975E531ecE00d6e97",
    KEEPER_ABI,
    signer
  );
  const positionId = 10197;
  const encodedPositionId = ethers.utils.defaultAbiCoder.encode(
    ["bytes"],
    [positionId]
  );
  const checkUpkeep = await keeper.checkUpkeep(encodedPositionId);
  console.log("checkUpkeep response: ");
  console.log(checkUpkeep);
  if (checkUpkeep.upkeepNeeded) {
    try {
      await keeper.performUpkeep(checkUpkeep.performData);
    } catch (error) {
      console.log(`Failed with error: ${error}`);
    }
  }
};

// Entrypoint for the Autotask
export async function handler(credentials: RelayerParams) {
  // Initialize defender relayer provider and signer
  const provider = new DefenderRelayProvider(credentials);
  const signer = new DefenderRelaySigner(credentials, provider, {
    speed: "safeLow",
  });
  console.log(`Relayer address is ${await signer.getAddress()}`);
  return exports.main(signer);
}

// Sample typescript type definitions
type EnvInfo = {
  RELAYER_API_KEY: string;
  RELAYER_API_SECRET: string;
};

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  require("dotenv").config();
  const { RELAYER_API_KEY: apiKey, RELAYER_API_SECRET: apiSecret } =
    process.env as EnvInfo;
  console.log(`apiKey: ${apiKey}, apiSecret: ${apiSecret}`);
  handler({ apiKey, apiSecret })
    .then(() => process.exit(0))
    .catch((error: Error) => {
      console.error(error);
      process.exit(1);
    });
}

