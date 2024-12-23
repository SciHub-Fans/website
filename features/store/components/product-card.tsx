"use client";

import { Product } from "../types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../hooks/use-cart-store";
import { toast } from "sonner";
import SizeSelector from "./size-selector";
import { useState } from "react";
import { extractSizeOptions } from "../utils/variant-utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartStore();
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const sizeOptions = extractSizeOptions(product);

  const handleAddToCart = () => {
    if (!selectedVariantId) {
      toast.error("请选择尺码");
      return;
    }

    const variant = product.variants.find(v => v.id === selectedVariantId);
    if (!variant) {
      toast.error("商品变体不存在");
      return;
    }

    addToCart(product, variant);
    toast.success(`${product.name} 已成功添加到购物车`);
  };

  console.log(product);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg rounded-2xl">
      <CardContent className="p-0">
        <div className="group relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="flex flex-col">
            <h2 className="self-stretch text-white text-xl font-bold leading-[140%]">
              {product.name}
            </h2>
            <p className="mt-1 self-stretch text-[#A5A5A5] text-sm font-normal leading-[160%]">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between items-center">
            <h1 className="text-white text-[28px] font-bold leading-8">
              ${product.price}
            </h1>
            <SizeSelector 
              sizes={sizeOptions} 
              onSelect={setSelectedVariantId} 
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full rounded-[44px]" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
