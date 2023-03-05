import { RelayerParams } from "defender-relay-client/lib/relayer";
import {
  DefenderRelaySigner,
  DefenderRelayProvider,
} from "defender-relay-client/lib/ethers";
import { Contract, ethers } from "ethers";
import axios from 'axios';

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

const tenderlyUser = "Aperture";
const tenderlyProject = "project";
const tenderlyKey = ""; // Read this from dotenv.

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

  const unsignedTx = await keeper.populateTransaction.checkUpkeep(encodedPositionId);
  const rawData = unsignedTx.data;
  console.log(`raw data: ${rawData}`);

  // const resp = await axios.post(
  //   `https://api.tenderly.co/api/v1/account/${tenderlyUser}/project/${tenderlyProject}/simulate`,
  //   // the transaction
  //   {
  //     /* Simulation Configuration */
  //     save: false, // if true simulation is saved and shows up in the dashboard
  //     save_if_fails: false, // if true, reverting simulations show up in the dashboard
  //     simulation_type: 'quick', // full or quick (full is default)

  //     network_id: '80001', // network to simulate on

  //     /* Standard EVM Transaction object */
  //     from: '0x8F826f2ed5eaf1B53A478ed3236D234122FE8312',
  //     to: '0x48F67Cc3D88F051491F51E4975E531ecE00d6e97',
  //     input: rawData,
  //     gas: 8000000,
  //     gas_price: 0,
  //     value: 0,
  //   },
  //   {
  //     headers: {
  //       'X-Access-Key': tenderlyKey as string,
  //     },
  //   }
  // );
  // console.log("Simulation status from tenderly");
  // console.log(resp.data.simulation.status);

  // if (resp.data.simulation.status) {
  const checkUpkeep = await keeper.checkUpkeep(encodedPositionId);
  // } // Uncomment this part to enable Tenderly.
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

