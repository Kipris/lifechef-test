'use client';

import Image from "next/image";
import { Rating } from "@/src/ui/rating";
import { Title } from "../ui/title";
import { useMealStore } from "@/src/providers/meal-store-provider";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "../utils/debounce";
import { $Container } from "./meal-summary.styled";

export const MealSummary = () => {
    const { meal, setMealComment } = useMealStore((state) => ({
        meal: state.meal,
        setMealComment: state.setMealComment,
    }));
    const [inputValue, setInputValue] = useState<string>(meal?.comment || '');

    useEffect(() => {
        setInputValue(meal?.comment || '');
    }, [meal?.comment]);

    const debouncedSetComment = useCallback(
        debounce((newComment: string) => {
            if (!meal) return;

            setMealComment(meal.id, newComment);
        }, 300),
        [meal, setMealComment]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        debouncedSetComment(newValue);
    };

    return (
        <div className="mb-32">
            <Title tag="h2">Meal Review</Title>
            {meal ? (
                <div className="grid grid-cols-[235px_1fr] gap-4">
                    <$Container className="p-4">
                        <Image
                            src={meal.imageSrc}
                            alt="Description"
                            width={202}
                            height={151.5}
                        />
                        <Title tag="h3" className="mt-4 mb-5">{meal.title}</Title>
                        <Rating rating={meal.rating} shouldShowText={true} />
                    </$Container>
                    <textarea
                        value={inputValue}
                        onChange={handleInputChange}
                        className="py-4 px-3 text-base w-full resize-none"
                        placeholder="Meal Summary Review"
                    />
                </div>
            ) : (
                <Title tag="h3">No meal data available</Title>
            )}
        </div>
    );
}
