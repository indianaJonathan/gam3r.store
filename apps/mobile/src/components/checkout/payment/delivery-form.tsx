import { OrderDelivery } from '@gstore/core'
import { TextInput, StyleSheet, View } from 'react-native'
import React from 'react'

export interface DeliveryFormProps {
    delivery: Partial<OrderDelivery>
    onDeliveryChange: (delivery: Partial<OrderDelivery>) => void
    className?: string
}

export default function DeliveryForm(props: DeliveryFormProps) {
    const { delivery, onDeliveryChange } = props

    function updateAttribute(attribute: string) {
        return (value: any) => {
            onDeliveryChange({ ...delivery, [attribute]: value })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={delivery.name}
                onChangeText={updateAttribute('name')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={delivery.email}
                onChangeText={updateAttribute('email')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={delivery.document}
                onChangeText={updateAttribute('document')}
                keyboardType="numeric"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Logradouro"
                value={delivery.address}
                onChangeText={updateAttribute('address')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Complemento"
                value={delivery.complement}
                onChangeText={updateAttribute('complement')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={delivery.city}
                onChangeText={updateAttribute('city')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={delivery.state}
                onChangeText={updateAttribute('state')}
                placeholderTextColor="#999"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        height: 40,
        width: 300,
        color: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#241440',
    },
})
