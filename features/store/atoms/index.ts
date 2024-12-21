'use client';

import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { CartItem, Order } from '../types';

// Cart atoms
export const cartItemsAtom = atomWithStorage<CartItem[]>('cartItems', []);
export const cartTotalAtom = atom((get) => {
    const items = get(cartItemsAtom);
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// Orders atom
export const ordersAtom = atomWithStorage<Order[]>('orders', []);

// Wallet atoms
export const walletAddressAtom = atomWithStorage<string>('walletAddress', '');
export const walletBalanceAtom = atomWithStorage<number>('walletBalance', 0);

// Checkout form atom
export const checkoutFormAtom = atom({
    solanaAddress: '',
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    currency: 'SOL'
});