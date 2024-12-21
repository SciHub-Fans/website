'use client';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

interface PaymentStatusProps {
  status: 'idle' | 'connecting' | 'processing' | 'success' | 'error';
  error?: string;
  txHash?: string;
}

export function PaymentStatus({ status, error, txHash }: PaymentStatusProps) {
  if (status === 'idle') return null;

  if (status === 'connecting' || status === 'processing') {
    return (
      <Alert>
        <Loader2 className="h-4 w-4 animate-spin" />
        <AlertTitle>
          {status === 'connecting' ? '正在连接钱包...' : '正在处理支付...'}
        </AlertTitle>
        <AlertDescription>
          请在 MetaMask 中确认交易
        </AlertDescription>
      </Alert>
    );
  }

  if (status === 'error') {
    return (
      <Alert variant="destructive">
        <AlertTitle>支付失败</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (status === 'success') {
    return (
      <Alert>
        <AlertTitle>支付成功</AlertTitle>
        <AlertDescription>
          交易哈希: {txHash?.slice(0, 10)}...{txHash?.slice(-8)}
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}