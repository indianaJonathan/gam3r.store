import { Fontisto, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Product } from '@gstore/core'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '@/src/data/constants/colors'

export interface PriceMeterProps {
    product: Product
}

export default function PriceMeter(props: PriceMeterProps) {
    const {
        lower: min,
        higher: max,
        promo: current,
        avarage,
    } = props.product

    let percent
    if (current > avarage) {
        percent = ((current - avarage) / (max - avarage)) * 50 + 50
    } else {
        percent = (1 - (avarage - current) / (avarage - min)) * 50
    }

    return (
        <View style={styles.container}>
            <View style={styles.priceStatus}>
                {percent >= 40 && percent < 60 ? (
                    <Fontisto
                        name="confused"
                        size={40}
                        style={{ color: '#eab308' }}
                    />
                ) : percent >= 60 ? (
                    <Fontisto
                        name="mad"
                        size={40}
                        style={{ color: '#ef4444' }}
                    />
                ) : (
                    <Fontisto
                        name="smiley"
                        size={40}
                        style={{ color: '#22c55e' }}
                    />
                )}
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white' }}>
                            O preço do produto está{' '}
                        </Text>
                        <Text
                            style={{
                                color: Colors.HIGHLIGHT_TEXT_1,
                                fontWeight: 'bold',
                            }}
                        >
                            {percent >= 40 && percent < 60
                                ? 'na média'
                                : percent >= 60
                                  ? 'acima da média'
                                  : 'abaixo da média'}
                        </Text>
                    </View>
                    <Text style={{ color: 'white' }}>
                        Com base no preço dos últimos 30 dias.
                    </Text>
                </View>
            </View>
            <View style={{ position: 'relative' }}>
                <LinearGradient
                    colors={['#22c55e', '#facc15', '#ef4444']}
                    start={{ x: 0, y: 0.75 }}
                    end={{ x: 1, y: 0.25 }}
                    style={styles.priceBar}
                ></LinearGradient>
                <View
                    style={{ ...styles.pricePosition, left: `${percent}%` }}
                >
                    <Ionicons
                        name="chevron-down"
                        size={20}
                        style={{ color: Colors.HIGHLIGHT_TEXT_1 }}
                    />
                    <View style={styles.externalPriceCircle}>
                        <View style={styles.internalPriceCircle} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    priceStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    priceBar: {
        position: 'relative',
        height: 7,
        borderRadius: 9999,
    },
    pricePosition: {
        position: 'absolute',
        alignItems: 'center',
        top: -25,
    },
    externalPriceCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 18,
        width: 18,
        borderRadius: 9999,
    },
    internalPriceCircle: {
        backgroundColor: Colors.HIGHLIGHT_TEXT_1,
        height: 13,
        width: 13,
        borderRadius: 9999,
    },
})
