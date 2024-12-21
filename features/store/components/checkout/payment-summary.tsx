'use client';

import { Button } from "@/components/ui/button";

interface PaymentSummaryProps {
  total: number;
  loading: boolean;
}

export function PaymentSummary({ total, loading }: PaymentSummaryProps) {
  return (
    <div className="flex justify-between items-center pt-4">
      <div>
        <p className="text-lg font-semibold">总计：¥{total}</p>
        <p className="text-sm text-muted-foreground">使用 MetaMask 支付</p>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "处理中..." : "确认支付"}
      </Button>
    </div>
  );
}