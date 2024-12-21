export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
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

export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'paid' | 'shipped' | 'delivered';
    createdAt: string;
    address: ShippingAddress;
    walletAddress: string;
    transactionHash?: string;
}