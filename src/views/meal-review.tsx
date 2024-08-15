'use client';

import { useMemo } from "react";
import { MealStoreProvider } from "../providers/meal-store-provider";
import { DialogProvider } from "../providers/dialog-store-provider";
import { createMealStore } from "../stores/meal-store";
import { Title } from "../ui/title";
import { MealComponentList } from "../components/meal-component-list";
import { ReviewForm } from "../components/review-form";
import { MealSummary } from "../components/meal-summary";
import { MealData } from "../schemas/meal-data-schema";
import { $Hr } from "../ui/hr.styled";

interface MealReviewProps {
    mealData: MealData;
}

export const MealReview: React.FC<MealReviewProps> = ({ mealData }) => {
    const mealStore = useMemo(() => createMealStore({ meal: mealData }), [mealData]);

    return (
        <MealStoreProvider initialState={mealStore.getState()}>
            <DialogProvider>
                <Title tag="h1">Meal Review</Title>
                <MealComponentList />
                <$Hr />
                <MealSummary />
                <ReviewForm />
            </DialogProvider>
        </MealStoreProvider>
    );
};
