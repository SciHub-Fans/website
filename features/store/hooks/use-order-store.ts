'use client';

import { useAtom } from 'jotai';
import { Order } from '../types';
import { ordersAtom } from '../atoms';

export function useOrderStore() {
  const [orders, setOrders] = useAtom(ordersAtom);

  const addOrder = (order: Order) => {
    setOrders(prev => [...prev, order]);
  };

  const getOrdersByWallet = (walletAddress: string) => {
    return orders.filter(order => 
      order.walletAddress.toLowerCase() === walletAddress.toLowerCase()
    );
  };

  return {
    orders,
    addOrder,
    getOrdersByWallet
  };
}