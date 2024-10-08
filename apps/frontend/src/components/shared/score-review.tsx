import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export interface ScoreReviewProps {
    score: number;
    size?: number;
}

export default function ScoreReview(props: ScoreReviewProps) {
    function scoreToStars(score: number) {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= score) {
                stars.push(<IconStarFilled key={`start-filled-${i}`} size={props.size} />);
            } else if (score >= 1 - 0.5) {
                stars.push(<IconStarHalfFilled key={`start-half-${i}`} size={props.size} />);
            } else {
                stars.push(<IconStar key={`start-empty-${i}`} size={props.size} />);
            }
        }
        return stars;
    }

    return <div className="flex gap-0.5 text-emerald-400">
        {scoreToStars(props.score)}
    </div>;
}
