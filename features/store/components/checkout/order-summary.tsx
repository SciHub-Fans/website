'use client';

import { CartItem } from "../../types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
  loading: boolean;
  onSubmit: () => void;
}

export function OrderSummary({ items, total, loading, onSubmit }: OrderSummaryProps) {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>订单摘要</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    数量: {item.quantity}
                  </p>
                  <p className="text-sm font-medium">
                    ¥{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="w-full flex justify-between text-lg font-semibold">
          <span>总计</span>
          <span>¥{total}</span>
        </div>
        <Button
          className="w-full"
          size="lg"
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? "处理中..." : "确认支付"}
        </Button>
      </CardFooter>
    </Card>
  );
}