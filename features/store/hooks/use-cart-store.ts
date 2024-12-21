'use client';

import { useAtom } from 'jotai';
import { Product } from '../types';
import { cartItemsAtom, cartTotalAtom } from '../atoms';

export function useCartStore() {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [total] = useAtom(cartTotalAtom);

  const addToCart = (product: Product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(items =>
      quantity === 0
        ? items.filter(item => item.id !== id)
        : items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
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