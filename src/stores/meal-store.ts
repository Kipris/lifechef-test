import { createStore } from 'zustand/vanilla';
import { UserData } from '../schemas/user-data-schema';
import { mealReviewSchema } from '../schemas/meal-review-schema';
import { MealData } from '../schemas/meal-data-schema';

export type MealState = {
  meal: MealData | null;
}

export type MealActions = {
  setMealComment: (id: number, comment: string) => void;
  setMealComponentComment: (id: number, comment: string) => void;
  postMealReview: (userData: UserData) => Promise<void>;
}

export type MealStore = MealState & MealActions;

export const defaultInitState: MealState = {
  meal: null,
};

export const createMealStore = (initState: MealState = defaultInitState) => {
  return createStore<MealStore>()((set, get) => ({
    ...initState,

    setMealComment: (id, comment) => set((state) => {
      if (state.meal && state.meal.id === id) {
        return {
          meal: {
            ...state.meal,
            comment,
          },
        };
      }
      return state;
    }),

    setMealComponentComment: (componentId, comment) => set((state) => {
      if (state.meal) {
        const updatedComponents = state.meal.mealComponents.map((component) =>
          component.id === componentId ? { ...component, comment } : component
        );
        return {
          meal: {
            ...state.meal,
            mealComponents: updatedComponents,
          },
        };
      }
      return state;
    }),

    postMealReview: async (userData: UserData) => {
      const state = get();

      const mealReview = {
        ...userData,
        meal: state.meal ?? null,
      };
    
      try {
        const validatedMealReview = mealReviewSchema.parse(mealReview);
    
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/meal/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(validatedMealReview),
        });
    
        if (!response.ok) {
          throw new Error('Failed to post meal review');
        }
      } catch (error) {
        console.error(`Validation or submission failed: ${error}`);
      }
    },
  }));
}
