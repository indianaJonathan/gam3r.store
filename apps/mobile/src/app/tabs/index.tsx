import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import Home from './home'
import Cart from './cart'
import User from './user'
import useCart from '@/src/data/hooks/useCart'

const Tab = createBottomTabNavigator()

export default function Tabs() {
    const { itemsAmount } = useCart();

    function tab(name: string, component: any, label: string, icon: string, amount?: number) {
        return (
            <Tab.Screen
                name={name}
                component={component}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.tabScreenFocus : styles.tabScreen}>
                            <Ionicons
                                name={icon as any}
                                size={22}
                                color={focused ? '#FFF' : '#CCC'}
                            />
                            <Text
                                style={{
                                    ...styles.tabScreenText,
                                    color: focused ? '#FFF' : '#CCC',
                                }}
                            >
                                {label}
                            </Text>
                            {!!amount && amount > 0 && (
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>
                                        {amount}
                                    </Text>
                                </View>
                            )}
                        </View>
                    ),
                }}
            />
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: '#7811F5',
                tabBarInactiveBackgroundColor: '#7811F5',
                tabBarStyle: {
                    backgroundColor: '#7811F5',
                    paddingVertical: 5,
                    height: 70,
                },
            }}
        >
            {tab('home', Home, 'Início', 'home-outline')}
            {tab('cart', Cart, 'Carrinho', 'cart-outline', itemsAmount)}
            {tab('user', User, 'Usuário', 'person-outline')}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabScreen: {
        alignItems: 'center',
        borderRadius: 10,
        minWidth: 80,
        paddingHorizontal: 5,
        paddingVertical: 10,
        position: 'relative',
    },
    tabScreenFocus: {
        alignItems: 'center',
        backgroundColor: '#00000030',
        borderRadius: 10,
        minWidth: 80,
        paddingHorizontal: 5,
        paddingVertical: 10,
        position: 'relative',
    },
    tabScreenText: {
        fontSize: 14,
    },
    tag: {
        alignItems: 'center',
        backgroundColor: '#ff00d4',
        borderRadius: 9999,
        height: 20,
        justifyContent: 'center',
        position: 'absolute',
        right: 15,
        top: 3,
        width: 20,
    },
    tagText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    }
})
