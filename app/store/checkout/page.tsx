"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/features/store/hooks/use-cart-store";
import { CheckoutForm } from "@/features/store/components/checkout/checkout-form";
import { PaymentMethods } from "@/features/store/components/checkout/payment-methods";
import { OrderSummary } from "@/features/store/components/checkout/order-summary";
import { toast } from "sonner";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Header } from "@/features/store/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { createOrder, TCreateOrderBody } from "@/features/store/api/order";
import usePayment from "@/features/solana/hooks/use-payment";
import { Currency } from "@/features/store/types";
import { PublicKey } from "@solana/web3.js";

const checkoutSchema = z.object({
  solanaAddress: z.string().min(1, "Please enter Solana wallet address"),
  currency: z.string().min(1, "Please select payment token"),
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
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCartStore();
  const router = useRouter();
  const { connection } = useConnection();
  const { publicKey, connected } = useWallet();

  const { payment } = usePayment();
  const { mutate: createOrderMutate, isPending } = useMutation({
    mutationFn: async (data: TCreateOrderBody) => {
      const orderResponse = await createOrder(data);
      console.log(orderResponse);

      if (!orderResponse.receiverSolanaAddress) {
        toast.error("Order creation failed");
        return;
      }
      
      const result = await payment(orderResponse.currency, new PublicKey(orderResponse.receiverSolanaAddress), orderResponse.amount, orderResponse.id);
      if (result) {
        const confirmationStatus = await connection.confirmTransaction({
          signature: result.signature,
          ...result.latestBlockhash,
        });

        if (confirmationStatus.value.err) {
          toast.error("Transaction confirmation failed");
          return;
        }

        clearCart();
        toast.success("Order submitted", {
          description: "Thank you for your purchase!",
        });
      }

      return orderResponse;
    }
  });


  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      currency: "SCIHUB",
    },
  });

  const currency = form.watch("currency");

  const onSubmit = async (data: CheckoutFormData) => {
    if (!publicKey || !connected) {
      toast.error("Wallet not connected", {
        description: "Please connect your Solana wallet first",
      });
      return;
    }

    const createOrderData = {
      ...data,
      currency: data.currency as Currency, 
      orderProducts: cartItems.map((item) => ({
        variantId: item.selectedVariant.id,
        productId: item.selectedVariant.productId,
        quantity: item.buyQuantity,
      })),
    };

    createOrderMutate(createOrderData);
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
            onClick={() => router.push("/store")}
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
      <Header back />

      <div className="mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <PaymentMethods form={form} />
            <CheckoutForm form={form} />
          </div>
          <div className="lg:pl-8">
            <OrderSummary
              currency={currency as Currency}
              items={cartItems}
              total={total}
              loading={isPending}
              onSubmit={form.handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
