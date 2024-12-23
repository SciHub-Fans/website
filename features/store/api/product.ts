import request from "@/lib/request";
import { Product } from "../types";

export const getProducts = async () => {
    const response = await request.get<Product[]>('/product/all');
    return response.data;
};

export const getProduct = async (id: string) => {
    const response = await request.get<Product>(`/product/${id}`);
    return response.data;
};