"use client";

import AppWalletProvider from "@/features/solana/provider/app-wallet-provider";
import { Provider as JotaiProvider } from "jotai";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <AppWalletProvider>{children}</AppWalletProvider>
    </JotaiProvider>
  );
};

export default Providers;
