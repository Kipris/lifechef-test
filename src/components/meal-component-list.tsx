'use client';

import { MealComponent } from "./meal-component";
import { Title } from "../ui/title";
import { useMealStore } from "@/src/providers/meal-store-provider";

export const MealComponentList = () => {
    const mealComponents = useMealStore((state) => state.meal?.mealComponents);

    return (
        <>
            <Title tag="h2">Meal Components</Title>
            <div className="mt-7">
                <div className="mt-7 space-y-4">
                    {mealComponents?.map((mealComponent) => (
                        <MealComponent key={mealComponent.id} {...mealComponent} />
                    ))}
                </div>
            </div>
        </>
    )
}
