import { ethers } from "ethers";
import ERC20ABI from "@/config/ABI/ERC20ABI.json";
import { MAX_UINT256 } from "@/config/constant";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

export async function approve(
  // signer: ethers.Signer,
  tokenAddress: `0x${string}`,
  contractAddress: string
) {
  const { config } = usePrepareContractWrite({
    address: tokenAddress,
    abi: ERC20ABI,
    functionName: 'approve',
    args:[contractAddress, MAX_UINT256]
  })
  return useContractWrite(config)
  // const tokenContract = new ethers.Contract(tokenAddress, ERC20ABI, signer);
  // return await (await tokenContract.approve(contractAddress, MAX_UINT256)).wait();
}
