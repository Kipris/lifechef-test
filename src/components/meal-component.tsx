'use client';

import Image from "next/image";
import { Rating } from "../ui/rating";
import { Input } from "../ui/input";
import { Title } from "../ui/title";
import { useMealStore } from "@/src/providers/meal-store-provider";
import { useCallback, useState } from "react";
import { debounce } from "../utils/debounce";
import { MealComponentData } from "../schemas/meal-data-schema";

interface MealComponentProps extends MealComponentData { }

export const MealComponent: React.FC<MealComponentProps> = ({ id, title, imageSrc, rating, comment }) => {
    const [inputValue, setInputValue] = useState(comment);
    const setMealComponentComment = useMealStore((state) => state.setMealComponentComment);

    const debouncedSetComment = useCallback(
        debounce((newComment: string) => {
            setMealComponentComment(id, newComment);
        }, 300), 
        [id, setMealComponentComment]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        debouncedSetComment(newValue);
    };

    return (
        <div className="my-4">
            <div className="grid grid-cols-[218px_1fr] gap-7">
                <div className="flex">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={72}
                        height={72}
                        className="scale-125"
                    />
                    <div className="mt-1 ml-2">
                        <Title tag="h3">{title}</Title>
                        <Rating rating={rating} />
                    </div>
                </div>
                <div>
                    <Input
                        placeholder="Your thoughts about the component"
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                </div>
            </div>
        </div>
    );
}
