import { Currency, Installment } from '@gstore/core'
import { IconCreditCard } from '@tabler/icons-react'

export interface PaymentSummaryProps {
    itemsAmount: number
    total: number
    fullTotal: number
    installment: Installment
    finish: () => void
    className?: string
}

export default function PaymentSummary(props: PaymentSummaryProps) {
    return (
        <div
            className={`
                flex flex-col self-start gap-3 
                w-96 px-6 py-8
                bg-violet-dark rounded-xl
                ${props.className ?? ''}
            `}
        >
            <span className="text-xl font-semibold">Resumo:</span>
            <div className="flex justify-between">
                <span className="text-zinc-400">Forma de Pagamento:</span>
                <span>PIX/Boleto</span>
            </div>
            <div className="flex justify-between">
                <span className="text-zinc-400">Valor Total:</span>
                <span className="text-emerald-500 font-semibold">
                    {Currency.format(props.fullTotal)}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="text-zinc-400">Desconto:</span>
                <span className="text-red-500 font-semibold">
                    -{Currency.format(props.fullTotal - props.total)}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-zinc-400">à vista no PIX/Boleto</span>
                <span className="text-emerald-500 font-semibold text-2xl">
                    {Currency.format(props.total ?? 0)}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-sm text-zinc-300 mt-2">
                    Parcelamento no Cartão
                </span>
                <div className="text-sm text-zinc-300">
                    em até{' '}
                    <span className="text-white font-semibold">
                        {props.installment.amount}x
                    </span>{' '}
                    de{' '}
                    <span className="text-white font-semibold">
                        {Currency.format(props.installment.value)}
                    </span>
                </div>
            </div>
            <button
                onClick={props.finish}
                className="button bg-indigo-700 mt-7"
            >
                <IconCreditCard size={20} />
                <span>Finalizar Compra</span>
            </button>
        </div>
    )
}
