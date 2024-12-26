import request from "@/lib/request";
import { Currency } from "../types";

export const convertUsdToToken = async (currency: Currency, usd: number): Promise<{uiAmount: number, amount: string}> => {
  const response = await request.get<{uiAmount: number, amount: string}>(`/token/convert?currency=${currency}&usd=${usd}`);
  return response.data;
};