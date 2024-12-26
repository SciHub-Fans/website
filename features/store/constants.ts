import { PublicKey } from "@solana/web3.js";
import { Currency } from "./types";

export const STORE_WALLET = "0x123..."; // Replace with actual store wallet address

export const COUNTRIES = [
  { code: 'CN', name: 'China' },
] as const;

export const TOKEN_ADDRESS = {
  [Currency.SOL]: new PublicKey("So11111111111111111111111111111111111111112"),
  [Currency.USDC]: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
  [Currency.SCIHUB]: new PublicKey("GxdTh6udNstGmLLk9ztBb6bkrms7oLbrJp5yzUaVpump"),
}