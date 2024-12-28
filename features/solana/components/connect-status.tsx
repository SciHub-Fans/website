'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { truncateAddress } from "@/lib/utils";
import { Wallet, Coins } from "lucide-react";

interface ConnectStatusProps {
  address: string;
  balance: number;
  onConnect: () => Promise<void>;
}

export function ConnectStatus({ address, balance, onConnect }: ConnectStatusProps) {
  if (!address) {
    return (
      <Button 
        onClick={onConnect}
        className="gap-2"
      >
        <Wallet className="h-4 w-4" />
        Connect Wallet
      </Button>
    );
  }

  return (
    <Card className="bg-background/60 backdrop-blur">
      <CardContent className="flex items-center gap-4 p-3">
        <div className="flex items-center gap-2 text-sm">
          <Wallet className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">
            {truncateAddress(address)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Coins className="h-4 w-4 text-muted-foreground" />
          <span>
            {balance.toFixed(4)} SOL
          </span>
        </div>
      </CardContent>
    </Card>
  );
}