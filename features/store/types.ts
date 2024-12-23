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

export interface CartItem extends Product {
    quantity: number;
    selectedVariant: ProductVariant;
}

export interface ShippingAddress {
    fullName: string;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    email: string;
    phone: string;
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
    items: OrderProduct[];
    total: number;
    status: 'pending' | 'paid' | 'shipped' | 'delivered';
    createdAt: string;
    address: ShippingAddress;
    walletAddress: string;
    transactionHash?: string;
}
