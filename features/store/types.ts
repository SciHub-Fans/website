export enum Currency {
    SOL = 'SOL',
    USDC = 'USDC',
    SCIHUB = 'SCIHUB',
}

export enum OrderStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    EXPIRED = 'EXPIRED',
    FAIL = 'FAIL',
}

export interface VariantValue {
    id: string;
    productVariantOptionId: string;
    value: string;
    variantId: string;
}

export interface ProductVariant {
    id: string;
    sku: string;
    productId: string;
    price?: number;
    quantity: number;
    variantValues: VariantValue[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductVariantOption {
    id: string;
    productId: string;
    name: string;
    values: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    currency: Currency;
    variants: ProductVariant[];
    variantOptions: ProductVariantOption[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CartItem {
    product: Product;
    selectedVariant: ProductVariant;
    buyQuantity: number;
}

export interface OrderProduct {
    productId: string;
    variantId: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
    variantValues: {
        name: string;
        value: string;
    }[];
}

export interface Order {
    id: string;
    solanaAddress: string;
    receiverSolanaAddress: string;
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
    status: OrderStatus;
    amount: string;
    uiAmount: number;
    currency: Currency;
    orderProducts: OrderProduct[];
    canceledAt?: Date;
    completedAt?: Date;
    expiredAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateOrderResponse {
    amount: string;
    createdAt: string;
    expiresAt: string;
    orderId: string;
    status: string;
    uiAmount: number;
    updatedAt: string;
    receiverSolanaAddress: string;
}