import { StyleSheet, SafeAreaView, ScrollView, Pressable, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CartItem as CartItemModel } from '@gstore/core'
import CheckoutHeader from '@/src/components/checkout/checkout-header'
import CartItem from '../../components/checkout/cart/cart-item'
import EmptyCart from '@/src/components/checkout/cart/empty-cart'
import Colors from '@/src/data/constants/colors'
import useCart from '@/src/data/hooks/useCart'

export default function Cart({ navigation }: any) {
    const { items, itemsAmount, addItem, removeItem, removeProduct } = useCart()

    return (
        <SafeAreaView style={styles.container}>
            {itemsAmount > 0 && <CheckoutHeader step="cart" />}
            <ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%', display: 'flex', flex: 1 }}>
                {items.length === 0 && <EmptyCart navigation={navigation} />}
                {items.map((item: CartItemModel) => (
                    <CartItem
                        key={item.product.id}
                        item={item}
                        addItem={() => addItem(item.product)}
                        removeItem={() => removeItem(item.product)}
                        removeProduct={() => removeProduct(item.product)}
                    />
                ))}
            </ScrollView>
            {itemsAmount > 0 && (
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('payment')
                    }}
                >
                    <Ionicons name="card-outline" size={22} style={styles.buttonText} />
                    <Text style={styles.buttonText}>Continuar</Text>
                </Pressable>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        alignSelf: 'center',
        borderRadius: 9999,
        height: 40,
        marginVertical: 20,
        paddingHorizontal: 50,
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
    },
})
