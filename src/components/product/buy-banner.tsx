"use client"

import{ Currency, type Product } from "@/core";
import useInstallment from "@/data/hooks/useInstallment";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface BuyBannerProps {
    product: Product;
}

export default function BuyBanner(props: BuyBannerProps) {
    const router = useRouter();
    const { product } = props;
    const addItem = (prod: Product) => { return prod };
    const installment = useInstallment(product.promo);

    return (
        <div className="flex">
            <div className="flex flex-col border-r border-zinc-500 pr-5">
                <div className="line-through text-zinc-400">de R$ {product.base}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-zinc-300">por</span>{' '}
                    <span className="text-emerald-500">R$ {product.promo}</span>{' '}
                    <span className="text-base text-zinc-300">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
                <span className="text-base text-zinc-300">{installment.amount}x de</span>
                {Currency.format(installment.value)}{' '}
            </div>
            <div className="flex gap-2 items-center">
                <button
                    type="button"
                    className="flex-1 button bg-pink-600"
                    onClick={() => addItem(product)}
                >
                    <IconShoppingCart size={20} />
                    <span>Adicionar</span>
                </button>
                <button
                    type="button"
                    className="flex-1 button bg-violet-700"
                    onClick={() => {
                        addItem(product);
                        router.push("/checkout/payment");
                    }}
                >
                    <IconCreditCard size={20} />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    );
}
