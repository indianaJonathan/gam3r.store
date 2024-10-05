import { Ionicons } from '@expo/vector-icons'
import { Text, StyleSheet, SafeAreaView, Pressable, Alert } from 'react-native'
import Colors from '@/src/data/constants/colors'
import Profile from '@/src/components/profile/profile'

export default function User({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Profile name="Usuário" email="teste@teste.com" phone="9 9999-9999" />
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate('last-purchases')
                }}
            >
                <Ionicons name="cart-outline" size={22} style={styles.buttonText} />
                <Text style={styles.buttonText}>Últimas compras</Text>
            </Pressable>
            <Pressable
                style={styles.logoutButton}
                onPress={() => {
                    Alert.alert('Logout', 'Logout feito com sucesso!', [{ text: 'OK' }])
                }}
            >
                <Ionicons name="log-out-outline" size={22} style={styles.buttonText} />
                <Text style={styles.buttonText}>Sair</Text>
            </Pressable>
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
    logoutButton: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3030',
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
