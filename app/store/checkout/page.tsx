'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/features/store/hooks/use-cart-store';
import { useOrderStore } from '@/features/store/hooks/use-order-store';
import { useToast } from '@/hooks/use-toast';
import { CheckoutForm } from '@/features/store/components/checkout/checkout-form';
import { PaymentMethods } from '@/features/store/components/checkout/payment-methods';
import { OrderSummary } from '@/features/store/components/checkout/order-summary';

const checkoutSchema = z.object({
  solanaAddress: z.string().min(1, '请输入 Solana 钱包地址'),
  email: z.string().email('请输入有效的邮箱地址'),
  country: z.string().min(1, '请选择国家'),
  firstName: z.string().min(1, '请输入名字'),
  lastName: z.string().min(1, '请输入姓氏'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, '请输入有效的电话号码'),
  address: z.string().min(1, '请输入地址'),
  address2: z.string().optional(),
  city: z.string().min(1, '请输入城市'),
  state: z.string().min(1, '请输入省份'),
  zip: z.string().min(1, '请输入邮政编码'),
  currency: z.string().min(1, '请选择支付代币')
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCartStore();
  const { addOrder } = useOrderStore();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      currency: 'SOL'
    }
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setLoading(true);
    try {
      // 这里实现 Solana 支付逻辑
      const order = {
        id: Date.now().toString(),
        items: cartItems,
        total,
        status: 'paid',
        createdAt: new Date().toISOString(),
        address: {
          fullName: `${data.firstName} ${data.lastName}`,
          streetAddress: data.address,
          address2: data.address2,
          city: data.city,
          state: data.state,
          country: data.country,
          postalCode: data.zip,
          email: data.email,
          phone: data.phone
        },
        walletAddress: data.solanaAddress,
        currency: data.currency
      };

      addOrder(order);
      clearCart();
      
      toast({
        title: "订单提交成功",
        description: "感谢您的购买！"
      });
      
      router.push('/orders');
    } catch (error: any) {
      toast({
        title: "支付失败",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">购物车为空</h2>
          <p className="text-muted-foreground mb-4">请先添加商品到购物车</p>
          <button
            onClick={() => router.push('/')}
            className="text-primary hover:underline"
          >
            返回商城
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative z-1">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CheckoutForm form={form} />
            <PaymentMethods form={form} />
          </div>
          <div className="lg:pl-8">
            <OrderSummary
              items={cartItems}
              total={total}
              loading={loading}
              onSubmit={form.handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}