import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

export interface NotaReviewProps {
    score: number
    size?: number
}

export default function NotaReview(props: NotaReviewProps) {
    function scoreToStars(score: number) {
        const stars: any[] = []
        for (let i = 1; i <= 5; i++) {
            if (score >= i) {
                stars.push(
                    <Ionicons
                        key={i}
                        name="star"
                        size={16}
                        style={styles.icon}
                    />,
                )
            } else if (score >= i - 0.5) {
                stars.push(
                    <Ionicons
                        key={i}
                        name="star-half"
                        size={16}
                        style={styles.icon}
                    />,
                )
            } else {
                stars.push(
                    <Ionicons
                        key={i}
                        name="star-outline"
                        size={16}
                        style={styles.icon}
                    />,
                )
            }
        }
        return stars
    }

    return <View style={styles.container}>{scoreToStars(props.score)}</View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 0.5,
        color: '#34d399',
    },
    icon: {
        color: '#34d399',
    },
})
