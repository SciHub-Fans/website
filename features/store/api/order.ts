
import request from "@/lib/request";
import { CreateOrderResponse, Currency, Order } from "../types";

export type TCreateOrderBody = {
    solanaAddress: string;
    email: string;
    country: string;
    firstName: string;
    lastName: string;
    phone?: string;
    address: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    currency: Currency;
    orderProducts: {
        productId: string;
        quantity: number;
        variantId: string;
    }[];
};

export const createOrder = async (body: TCreateOrderBody) => {
    const response = await request.post<Omit<Order, 'orderProducts'>>('/order', body);
    return response.data;
};

export const getOrders = async () => {
    const response = await request.get<Order[]>('/orders');
    return response.data;
};

export const getOrder = async (id: string) => {
    const response = await request.get<Order>(`/order/${id}`);
    return response.data;
};

export const cancelOrder = async (id: string) => {
    const response = await request.post<Order>(`/order/${id}/cancel`);
    return response.data;
};

export const getOrdersByWalletAddress = async (walletAddress: string) => {
    const response = await request.get<Order[]>(`/order/all/${walletAddress}`);
    return response.data;
};