import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x66DEa16A8302E4e3d66517F86A712DF8AC4a07a3";
const rewardTokenContractAddress = "0x54e975CE9713Fac10D2155ca1E4780E46ecd22dc";
const stakingContractAddress = "0xD849c1D1D89B2Feb0c45b9D930A0015Fae81fBB1";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});