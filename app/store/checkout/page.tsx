"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/features/store/hooks/use-cart-store";
import { CheckoutForm } from "@/features/store/components/checkout/checkout-form";
import { PaymentMethods } from "@/features/store/components/checkout/payment-methods";
import { OrderSummary } from "@/features/store/components/checkout/order-summary";
import { toast } from "sonner";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { Header } from "@/features/store/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const checkoutSchema = z.object({
  solanaAddress: z.string().min(1, "Please enter Solana wallet address"),
  paymentToken: z.string().min(1, "Please select payment token"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(1, "Please select a country"),
  firstName: z.string().min(1, "Please enter first name"),
  lastName: z.string().min(1, "Please enter last name"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  address: z.string().min(1, "Please enter address"),
  address2: z.string().optional(),
  city: z.string().min(1, "Please enter city"),
  state: z.string().min(1, "Please enter state/province"),
  zip: z.string().min(1, "Please enter postal code"),
  currency: z.string().min(1, "Please select payment token"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connected } = useWallet();

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      currency: "SCIHUB",
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    console.log(cartItems);
    console.log(total);
    console.log(data);

    if (!publicKey || !connected) {
      toast.error("Wallet not connected", {
        description: "Please connect your Solana wallet first",
      });
      return;
    }

    setLoading(true);
    try {
      // 获取最新的 blockhash
      const latestBlockhash = await connection.getLatestBlockhash("finalized");

      const transaction = new Transaction({
        feePayer: publicKey,
        ...latestBlockhash,
      });

      const transferInstruction = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(data.solanaAddress),
        lamports: LAMPORTS_PER_SOL * 0.0001,
      });

      transaction.add(transferInstruction);

      const signature = await sendTransaction(transaction, connection, {
        maxRetries: 5,
      });

      toast.info("Transaction submitted", {
        description: "Waiting for confirmation...",
      });

      const confirmationStatus = await connection.confirmTransaction(
        {
          signature,
          ...latestBlockhash,
        },
        "confirmed"
      );

      if (confirmationStatus.value.err) {
        throw new Error("Transaction confirmation failed");
      }

      clearCart();

      toast.success("Order submitted", {
        description: "Thank you for your purchase!",
      });

      // router.push("/orders");
    } catch (error: any) {
      console.error("Transaction error:", error);
      toast.error("Payment failed", {
        description: error.message || "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Cart is empty</h2>
          <p className="text-muted-foreground mb-4">
            Please add items to your cart first
          </p>
          <button
            onClick={() => router.push("/")}
            className="text-primary hover:underline"
          >
            Return to store
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen sci-container relative z-1">
      <Header />

      <div className="mx-auto px-4 py-8">
        <Link href="/store" className="block mb-4 flex items-center gap-2">
          <Button size="icon" className="w-8 h-8">
            <ArrowLeftIcon className="w-4 h-4" />
          </Button>
          <span className="text-sm">Back to store</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <PaymentMethods form={form} />
            <CheckoutForm form={form} />
          </div>
          <div className="lg:pl-8">
            <OrderSummary
              items={cartItems}
              total={total}
              loading={loading}
              onSubmit={form.handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
