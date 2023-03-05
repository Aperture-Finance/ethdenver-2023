import { EthereumIcon, AvalancheIcon, UsdtEIcon } from "@/packages/assetkit/src/images";
const styles = {width:'100%', height:'100%', position: 'absolute', zIndex:'0', opacity:'1', right:'-40%', bottom:'-30%'}

export const productsList = [
    // {
    //   networkIcon: <UsdtEIcon style={styles} />,
    //   title: "Terra: PDN",
    //   description: "i cant write shit, pls help me",
    // },
    // {
    //   networkIcon: <AvalancheIcon style={styles} />,
    //   title: "PDN: Crab market",
    //   description: "i cant write shit, pls help me",
    // },
    // {
    //   networkIcon: <AvalancheIcon style={styles} />,
    //   title: "PDN: Crab market",
    //   description: "i cant write shit, pls help me",
    // },
    {
      networkIcon: <EthereumIcon style={styles} />,
      title: "Univ3: Range Order",
      description: "Target An Average Price, You EARN The Fees 💕",
    },
    {
      networkIcon: <EthereumIcon style={styles} />,
      title: "Univ3: Limit Order",
      description: "Target An Average Price, Earn the Fees (Don't Pay Them >:) ⭐",
    },
    // {
    //   networkIcon: <EthereumIcon style={styles} />,
    //   title: "Univ3: Take Profit & Stop Loss ",
    //   description: "i cant write shit, pls help me",
    // },
    // {
    //   networkIcon: <EthereumIcon style={styles} />,
    //   title: "Univ3: DCA",
    //   description: "i cant write shit, pls help me",
    // },
  ];