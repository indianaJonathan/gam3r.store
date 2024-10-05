import { Ionicons } from '@expo/vector-icons'
import { Currency, Installment } from '@gstore/core'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '@/src/data/constants/colors'

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
        <View style={styles.container}>
            <View style={styles.itemsValue}>
                <Text style={{ color: 'white' }}>Valor total ({props.itemsAmount} itens): </Text>
                <Text style={styles.highlightItemsValue}>{Currency.format(props.total)}</Text>
            </View>
            <Pressable style={styles.button} onPress={() => props.finish?.()}>
                <Ionicons name="cart-outline" size={22} style={styles.buttonText} />
                <Text style={styles.buttonText}>Finalizar Compra</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        paddingHorizontal: 60,
        paddingVertical: 20,
        backgroundColor: '#241440',
        borderRadius: 10,
        gap: 10,
    },
    itemsValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    highlightItemsValue: {
        color: '#34d399',
        fontWeight: 'bold',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        borderRadius: 9999,
        height: 40,
        paddingHorizontal: 45,
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
    },
})
