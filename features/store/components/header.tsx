"use client";

import Link from "next/link";
import { Cart } from "./cart";
import { Icons, StoreIcons } from "@/components/icons";
import ConnectWallet from "@/features/solana/components/connect-wallet";

interface HeaderProps {
  cartItems: any[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function Header({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: HeaderProps) {
  return (
    <header className="sci-container h-[104px] w-full flex justify-between items-center">
      <div className="flex h-14 justify-center items-center gap-2 [background:rgba(255,255,255,0.12)] backdrop-blur-[20px] p-4 rounded-[215.5px]">
        <Icons.newLogo className="w-7 h-7" />
        <span className="hidden md:inline-block text-white text-center text-base font-normal leading-[160%] lowercase">
          $scihub
        </span>
      </div>
      <div className="flex gap-4">
        <Cart
          items={cartItems}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
          onCheckout={onCheckout}
        />
        <Link
          href="/store/orders"
          target="_blank"
          className="flex justify-center items-center [background:rgba(255,255,255,0.12)] hover:[background:rgba(255,255,255,0.2)] backdrop-blur-[20px] p-4 rounded-full transition-all duration-300 cursor-pointer"
        >
          <StoreIcons.order className="w-6 h-6" />
        </Link>
        <ConnectWallet />
      </div>
    </header>
  );
}
