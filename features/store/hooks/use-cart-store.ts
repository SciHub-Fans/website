'use client';

import { useAtom } from 'jotai';
import { Product, ProductVariant } from '../types';
import { cartItemsAtom, cartTotalAtom } from '../atoms';

export function useCartStore() {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [total] = useAtom(cartTotalAtom);

  const addToCart = (product: Product, selectedVariant: ProductVariant) => {
    setCartItems(items => {
      const existingItem = items.find(
        item => 
          item.product.id === product.id && 
          item.selectedVariant.id === selectedVariant.id
      );
      
      if (existingItem) {
        return items.map(item =>
          item.product.id === product.id && item.selectedVariant.id === selectedVariant.id
            ? { ...item, buyQuantity: item.buyQuantity + 1 }
            : item
        );
      }
      
      return [...items, { 
        product, 
        buyQuantity: 1, 
        selectedVariant 
      }];
    });
  };

  const updateQuantity = (id: string, variantId: string, quantity: number) => {
    setCartItems(items =>
      quantity === 0
        ? items.filter(item => item.product.id !== id || item.selectedVariant.id !== variantId)
        : items.map(item =>
            item.product.id === id && item.selectedVariant.id === variantId
              ? { ...item, buyQuantity: quantity }
              : item
          )
    );
  };

  const removeFromCart = (id: string, variantId: string) => {
    setCartItems(items => 
      items.filter(item => 
        item.product.id !== id || item.selectedVariant.id !== variantId
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    total,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  };
}