
import request from "@/lib/request";
import { Currency, Order } from "../types";

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

export const cancelOrder = async (id: string) => {
    const response = await request.post<Order>(`/order/${id}/cancel`);
    return response.data;
};

export const getOrdersByWalletAddress = async () => {
    const response = await request.get<Order[]>(`/order/all`);
    return response.data;
};