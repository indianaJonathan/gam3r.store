import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import ProductItem from '../../components/product/product-item'
import useProducts from '@/src/data/hooks/useProducts'

export default function Inicio({ navigation }: any) {
    const { products } = useProducts()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingVertical: 20, width: '100%' }}>
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        selectedProduct={() => {
                            navigation.navigate('product-details', { product })
                        }}
                    />
                ))}
            </ScrollView>
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
})
