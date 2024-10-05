import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'

export interface ReviewScoreProps {
    score: number
    size?: number
}

export default function ReviewScore(props: ReviewScoreProps) {
    function scoreToStars(score: number) {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (score >= i) {
                stars.push(<IconStarFilled key={i} size={props.size ?? 12} />)
            } else if (score >= i - 0.5) {
                stars.push(<IconStarHalfFilled key={i} size={props.size ?? 12} />)
            } else {
                stars.push(<IconStar key={i} size={props.size ?? 12} />)
            }
        }
        return stars
    }

    return <div className="flex gap-0.5 text-emerald-400">{scoreToStars(props.score)}</div>
}
