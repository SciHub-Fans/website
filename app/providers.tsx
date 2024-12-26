"use client";

import AppWalletProvider from "@/features/solana/provider/app-wallet-provider";
import { Provider as JotaiProvider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <AppWalletProvider>{children}</AppWalletProvider>
      </JotaiProvider>
    </QueryClientProvider>
  );
};

export default Providers;
