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
        <p className="text-lg font-semibold">Total: ¥{total}</p>
        <p className="text-sm text-muted-foreground">Pay with MetaMask</p>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm Payment"}
      </Button>
    </div>
  );
}