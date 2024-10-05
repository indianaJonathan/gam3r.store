'use client'
import CheckoutHeader from '@/components/checkout/checkout-header'
import DeliveryForm from '@/components/checkout/payment/delivery-form'
import PaymentSummary from '@/components/checkout/payment/payment-summary'
import PaymentMethodSelect from '@/components/checkout/payment/payment-method-select'
import useCart from '@/data/hooks/useCart'
import usePayment from '@/data/hooks/usePayment'

export default function Page() {
    const { installment, itemsAmount, total, fullTotal } = useCart()
    const { delivery, paymentMethod, updateDelivery, updatePaymentMethod, finish } = usePayment()

    return (
        <div className="flex flex-col gap-7 container">
            <CheckoutHeader step='payment' />
            <div className="flex gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <PaymentMethodSelect
                        paymentMethod={paymentMethod}
                        onPaymentMethodChange={updatePaymentMethod}
                    />
                    <DeliveryForm delivery={delivery} onDeliveryChange={updateDelivery} />
                </div>
                <PaymentSummary
                    itemsAmount={itemsAmount}
                    total={total}
                    fullTotal={fullTotal}
                    installment={installment}
                    finish={finish}
                    className="mt-12"
                />
            </div>
        </div>
    )
}
