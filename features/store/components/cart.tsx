"use client";

import { CartItem } from "../types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { StoreIcons } from "@/components/icons";
import { toast } from "sonner";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, variantId: string, quantity: number) => void;
  onRemoveItem: (id: string, variantId: string) => void;
  onCheckout: () => void;
}

export function Cart({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartProps) {
  console.log(items);
  const total = items.reduce(
    (sum, item) => sum + (item.selectedVariant.price || item.product.price) * item.buyQuantity,
    0
  );

  const handleRemove = (id: string, variantId: string, name: string) => {
    onRemoveItem(id, variantId);
    toast.success(`${name} removed from cart`);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative flex justify-center items-center [background:rgba(255,255,255,0.12)] hover:[background:rgba(255,255,255,0.2)] backdrop-blur-[20px] p-4 rounded-full transition-all duration-300 cursor-pointer">
          <StoreIcons.shopcart className="w-6 h-6" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {items.reduce((sum, item) => sum + item.buyQuantity, 0)}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.selectedVariant.id}`} className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{item.product.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.product.variantOptions[0].name}: {item.selectedVariant.variantValues[0].value}
                </p>
                <p className="text-sm text-muted-foreground">
                  ¥{item.selectedVariant.price || item.product.price}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onUpdateQuantity(item.product.id, item.selectedVariant.id, item.buyQuantity - 1)}
                  disabled={item.buyQuantity <= 1}
                >
                  -
                </Button>
                <span>{item.buyQuantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onUpdateQuantity(item.product.id, item.selectedVariant.id, item.buyQuantity + 1)}
                  disabled={item.buyQuantity >= item.selectedVariant.quantity}
                >
                  +
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive/90"
                  onClick={() => handleRemove(item.product.id, item.selectedVariant.id, item.product.name)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 ? (
          <div className="mt-8">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>¥{total}</span>
            </div>
            <Button className="mt-4 w-full rounded-[44px]" onClick={onCheckout}>
              Checkout
            </Button>
          </div>
        ) : (
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">Cart is empty</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
