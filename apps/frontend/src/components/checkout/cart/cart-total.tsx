import { IconShoppingCart } from '@tabler/icons-react'
import { Currency } from '@gstore/core'
import Link from 'next/link'

export interface CartTotalProps {
    itemsAmount: number
    total: number
}

export default function CartTotal(props: CartTotalProps) {
    return (
        <div className="flex justify-end items-center gap-7 bg-violet-dark h-24 rounded-xl px-7">
            <div className="flex flex-col">
                <span className="text-zinc-400">
                    Total ({props.itemsAmount}{' '}
                    {props.itemsAmount === 1 ? 'item' : 'itens'}):
                </span>
                <span className="text-emerald-500 text-2xl font-semibold">
                    {Currency.format(props.total ?? 0)}
                </span>
            </div>
            {props.itemsAmount > 0 && <Link
                href={props.total === 0 ? '/checkout/cart' :`/checkout/payment`}
                className={`
                    button
                    ${props.total === 0 
                        ? 'bg-indigo-400 cursor-not-allowed'
                        : 'button bg-indigo-700'
                    }
                `}
            >
                <IconShoppingCart size={20} />
                <span>Continuar</span>
            </Link>}
        </div>
    )
}
