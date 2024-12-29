"use client"

import { useWallet } from "@solana/wallet-adapter-react";
import { Header } from "@/features/store/components/header";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { getOrdersByWalletAddress } from "@/features/store/api/order";
import { isLoginAtom } from "@/features/auth/atom/auth";
import { useAtomValue } from "jotai";

const StorePage = () => {
    const { publicKey, connected } = useWallet();
    const isLogin = useAtomValue(isLoginAtom);
    const { data: orders } = useQuery({
        queryKey: ["orders"],
        queryFn: () => getOrdersByWalletAddress(),
        enabled: connected && publicKey !== null && isLogin,
        refetchInterval: 30000,
    });
    return (
        <div className="flex-1 sci-container relative z-1">
            <Header back />
            {publicKey && <div className="flex-1 sci-container relative z-1">
                <h1>My Orders</h1>
                <Table>
                    <TableCaption>Orders</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead className="min-w-[180px]">Product</TableHead>
                            <TableHead className="min-w-[150px]">Total Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Shiping Infomation</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders?.map((order, index) => (
                            <TableRow key={index}>
                                <TableCell className="max-w-[100px] md:max-w-full">
                                    <div>
                                        <div className="truncate">{order.id}</div>
                                        <div className="text-xs text-[#A5A5A5]">{(new Date(order.createdAt)).toLocaleDateString()}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{order.orderProducts.map((product) => {
                                    return (<div key={product.productId}>
                                        <div>{product.name}</div>
                                        <div>({product.variantValues.map(v => `${v.name} ${v.value}`).join(", ")}, {product.quantity} pc)</div>
                                    </div>)
                                })}</TableCell>
                                <TableCell>{order.uiAmount} {order.currency}</TableCell>
                                <TableCell><div className={`${order.status === "PENDING" ? "text-yellow-500" : order.status === "COMPLETED" ? "text-green-500" : "text-red-500"}`}>{order.status}</div></TableCell>
                                <TableCell>
                                    <div>
                                        <div>Name: {order.firstName} {order.lastName}</div>
                                        <div>Address: {order.address}</div>
                                        <div>Postal Code: {order.zip}</div>
                                        <div>Phone: {order.phone}</div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>}
            {(!connected || !publicKey) && <div className="flex-1 sci-container relative z-1 text-center">
                <h1>Please connect your wallet to view your orders</h1>
            </div>}
        </div>
    )
}

export default StorePage;