import Colors from '@/src/data/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Pressable } from 'react-native'

interface EmptyCartProps {
    navigation: any;
}

export default function EmptyCart({ navigation }: EmptyCartProps) {
    return (
        <View style={styles.container}>
            <View style={styles.cartContainer}>
                <Ionicons name="cart-outline" size={60} color="#999" />
                <Text style={styles.text}>Carrinho está Vazio</Text>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => { navigation.navigate('home') }}
            >
                <Text style={styles.buttonText}>Voltar às compras</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    cartContainer: {
        alignItems: 'center',
        backgroundColor: '#24144099',
        borderRadius: 8,
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        marginVertical: 10,
        padding: 50,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: Colors.PRIMARY,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    text: {
        color: '#999',
        fontWeight: '400',
    },
})
