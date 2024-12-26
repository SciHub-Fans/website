'use client';

import { useState, useEffect } from 'react';
import { Order } from '../types';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const addOrder = (order: Order) => {
    const newOrders = [...orders, order];
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
  };

  const getOrdersByWallet = (walletAddress: string) => {
    return orders.filter(order => 
      order.solanaAddress.toLowerCase() === walletAddress.toLowerCase()
    );
  };

  return {
    orders,
    addOrder,
    getOrdersByWallet
  };
}