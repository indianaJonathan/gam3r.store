import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Specifications from '../../components/product/speficitations'
import BuyBanner from '../../components/product/buy-banner'
import Colors from '@/src/data/constants/colors'
import PriceMeter from '@/src/components/product/price-meter'
import UsersReviews from '@/src/components/product/users-reviews'

export default function ProductDetails(props: any) {
    const { product } = props.route.params
    if (!product) return null

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productInfo}>
                <Text style={styles.title}>{product.name}</Text>
                <View style={styles.bgImage}>
                    <Image source={{uri: product.image}} style={styles.image} />
                </View>
                <Specifications product={product} />
            </View>
            <BuyBanner product={product} />
            <PriceMeter product={product} />
            <UsersReviews product={product} />
            <View style={{ height: 50 }} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        gap: 10,
        backgroundColor: Colors.BG_PRIMARY,
    },
    productInfo: {
        backgroundColor: Colors.BG_SECONDARY,
        padding: 20,
        gap: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    bgImage: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        padding: 20,
        height: 230,
    },
    image: {
        width: '80%',
        height: '100%',
        borderRadius: 10,
    },
})
