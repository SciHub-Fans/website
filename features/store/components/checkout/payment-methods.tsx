'use client';

import { UseFormReturn } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';

const TOKENS = [
  { symbol: 'SCIHUB', name: 'SciHub' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'USDC', name: 'USD Coin' },
];

interface PaymentMethodsProps {
  form: UseFormReturn<any>;
}

export function PaymentMethods({ form }: PaymentMethodsProps) {
  const {publicKey} = useWallet();

  useEffect(() => {
    if (publicKey) {
      form.setValue('solanaAddress', publicKey.toString());
    }
  }, [publicKey, form]);

  return (
    <Card>
      <CardHeader className='border-b-[0.5px] border-b-[#4A4A4A] border-solid'>
        <CardTitle className='text-white text-xl font-bold leading-[normal]'>Payment Methods</CardTitle>
      </CardHeader>
      <CardContent className='pt-4'>
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="solanaAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Solana Wallet Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Connect your Solana Wallet" readOnly {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentToken"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment tokens</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment token" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TOKENS.map(token => (
                        <SelectItem key={token.symbol} value={token.symbol}>
                          {token.name} ({token.symbol})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}