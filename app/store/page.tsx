"use client";

import { Header } from "@/features/store/components/header";
import { ProductCard } from "@/features/store/components/product-card";
import { useCartStore } from "@/features/store/hooks/use-cart-store";
import { products } from "@/features/store/mock/products";
import { useRouter } from "next/navigation";

const StorePage = () => {
  const { cartItems, addToCart, updateQuantity, removeFromCart, total } =
    useCartStore();
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/store/checkout");
  };

  return (
    <div className="flex-1 sci-container relative z-1">
      <Header
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Official Merchandise
            </h2>
            <p className="text-muted-foreground">
              Discover Unique Products Made for Fans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StorePage;
