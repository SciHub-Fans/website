'use client';

import { CartItem } from "../../types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import ConnectWallet from "@/features/solana/components/connect-wallet";

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
  loading: boolean;
  onSubmit: () => void;
}

export function OrderSummary({ items, loading, onSubmit }: OrderSummaryProps) {
  const { connected } = useWallet();
  const subtotal = items.reduce((sum, item) => 
    sum + (item.selectedVariant.price || item.price) * item.quantity, 0
  );
  const shipping = 90;
  const totalUSD = subtotal + shipping;
  const solPrice = 89.2; // 这里应该从价格 API 获取实时汇率

  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div 
              key={`${item.id}-${item.selectedVariant.id}`} 
              className="flex items-start gap-4"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-400">
                  {item.selectedVariant.variantValues[0].value} size
                </p>
                <p className="text-sm">${item.selectedVariant.price || item.price}</p>
              </div>
              <div className="text-right">
                <span>x{item.quantity}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between text-gray-400 border-t border-gray-800 pt-3">
            <span>Total (USD)</span>
            <span>${totalUSD}</span>
          </div>
          <div className="flex justify-between text-xl font-bold pt-2">
            <span>Total</span>
            <span>{solPrice} SOL</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {connected ? (
          <Button
            className="w-full bg-white text-black hover:bg-gray-100 rounded-[44px]"
            size="lg"
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay now"}
          </Button>
        ) : (
          <ConnectWallet />
        )}
      </CardFooter>
    </Card>
  );
}