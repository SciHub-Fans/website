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
          {status === 'connecting' ? 'Connecting wallet...' : 'Processing payment...'}
        </AlertTitle>
        <AlertDescription>
          Please confirm the transaction in MetaMask
        </AlertDescription>
      </Alert>
    );
  }

  if (status === 'error') {
    return (
      <Alert variant="destructive">
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (status === 'success') {
    return (
      <Alert>
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Transaction hash: {txHash?.slice(0, 10)}...{txHash?.slice(-8)}
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}