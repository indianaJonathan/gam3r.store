"use client"

import { Currency, type Product } from "@gstore/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import ScoreReview from "../shared/score-review";

export interface ProductItemProps {
    product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
    return (
        <Link
            href={`/products/${product.id}`}
            className="flex flex-col bg-violet-dark border border-white/10 p-4 rounded-lg relative"
        >
            <div className="absolute flex justify-end top-2.5 right-2.5">
                <ScoreReview score={product.score} size={20}/>
            </div>
            <div className="w-full h-48 relative">
                <Image
                    src={product.image}
                    fill
                    alt={product.name}
                    className="object-contain"
                />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
                <span className="text-ld font-semibold">{product.name}</span>
                <div className="self-start text-sm border-b border-dashed">
                    <span className="text-xs">{product.specifications.highlight}</span>
                </div>
                <div className="flex-1">

                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        de {Currency.format(product.base)}
                    </span>
                    <span className="text-xl font-semibold text-emerald-400">
                        por {Currency.format(product.promo)}
                    </span>
                    {/* <span>
                        até {installment.amount}x de {' '}
                        {Currency.format(installment.value)}
                    </span> */}
                </div>
                <button
                    type="button"
                    className="flex justify-center items-center gap-2 h-8 bg-violet-700 hover:bg-violet-600 transition-colors group"
                    onClick={(e) => {
                        e.preventDefault();
                        // adicionarItem(props.product);
                    }}
                >
                    <IconShoppingCartPlus size={20} />
                    <span className="group-hover:font-semibold">Adicionar</span>
                </button>
            </div>
        </Link>
    );
}
