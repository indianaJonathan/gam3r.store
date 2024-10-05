import {
    PaymentMethod,
    OrderItem,
    Order,
    OrderDelivery,
    Status,
    CartItem,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useCart from '../hooks/useCart'
import useAPI from '../hooks/useAPI'

export interface PaymentContextProps {
    paymentMethod: PaymentMethod
    delivery: Partial<OrderDelivery>
    updatePaymentMethod: (paymentMethod: PaymentMethod) => void
    updateDelivery: (delivery: Partial<OrderDelivery>) => void
    finish: () => void
}

const PaymentContext = createContext<PaymentContextProps>({} as any)

export function PaymentProvider(props: any) {
    const { httpPost } = useAPI()
    const { items, total, clearCart } = useCart()
    const { save, get } = useLocalStorage()

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
        PaymentMethod.PIX,
    )
    const [delivery, setDelivery] = useState<Partial<OrderDelivery>>({})

    function updatePaymentMethod(paymentMethod: PaymentMethod) {
        save('payment', paymentMethod)
        setPaymentMethod(paymentMethod)
    }

    function updateDelivery(delivery: Partial<OrderDelivery>) {
        save('delivery', delivery)
        setDelivery(delivery)
    }

    async function finish() {
        const order: Partial<Order> = {
            date: new Date(),
            paymentMethod,
            total,
            delivery: delivery as OrderDelivery,
            status: Status.RECEBIDO,
            items: items.map(
                (item: CartItem) =>
                    ({
                        product: item.product,
                        quantity: item.quantity,
                        unitPrice: item.product.promo,
                    }) as OrderItem,
            ),
        }

        await httpPost('/orders', order)
        clearCart()
    }

    useEffect(() => {
        get('delivery').then((delivery) => {
            setDelivery(delivery ?? {})
        })
        get('payment').then((paymentMethod) => {
            setPaymentMethod(paymentMethod ?? PaymentMethod.PIX)
        })
    }, [get])

    return (
        <PaymentContext.Provider
            value={{
                delivery,
                paymentMethod,
                updateDelivery,
                updatePaymentMethod,
                finish,
            }}
        >
            {props.children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext
