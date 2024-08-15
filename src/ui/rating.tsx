import Image from 'next/image';
import { $RatingText } from './rating.styled';
import { MealData } from '../schemas/meal-data-schema';

interface RatingProps extends Pick<MealData, 'rating'> {
    shouldShowText?: boolean;
}

const MAX_RATING = 5;

export const Rating: React.FC<RatingProps> = ({ rating, shouldShowText }) => {
    return (
        <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
                <div className="mr-2" key={i}>
                    <Image
                        src={i < rating ? "/star-filled.svg" : "/star.svg"}
                        alt={`Star ${i + 1}`}
                        width={20}
                        height={20}
                    />
                </div>
            ))}
            {shouldShowText && (
                <$RatingText>{rating}/{MAX_RATING}</$RatingText>
            )}
        </div>
    );
};
