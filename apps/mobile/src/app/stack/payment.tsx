import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'
import CheckoutHeader from '@/src/components/checkout/checkout-header'
import DeliveryForm from '@/src/components/checkout/payment/delivery-form'
import PaymentSummary from '@/src/components/checkout/payment/payment-summary'
import PaymentMethodSelect from '@/src/components/checkout/payment/payment-method-select'
import useCart from '@/src/data/hooks/useCart'
import usePayment from '@/src/data/hooks/usePayment'


export default function Payment() {
    const { installment, itemsAmount, total, fullTotal } = useCart()
    const { delivery, paymentMethod, updateDelivery, updatePaymentMethod, finish } = usePayment()

    return (
        <SafeAreaView style={styles.container}>
            <CheckoutHeader step="payment" />
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Text style={styles.titulo}>Forma de Pagamento</Text>
                <PaymentMethodSelect
                    paymentMethod={paymentMethod}
                    onPaymentMethodChange={updatePaymentMethod}
                />

                <Text style={styles.titulo}>Dados da Entrega</Text>
                <DeliveryForm delivery={delivery} onDeliveryChange={updateDelivery} />
            </ScrollView>

            <PaymentSummary
                itemsAmount={itemsAmount}
                total={total}
                fullTotal={fullTotal}
                installment={installment}
                finish={finish}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
    },
    containerScroll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
})
