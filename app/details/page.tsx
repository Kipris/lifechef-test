import { mealDataSchema } from "@/src/schemas/meal-data-schema";
import { MealReview } from "@/src/views/meal-review";
import { Title } from "@/src/ui/title";

async function fetchMealData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/meal/`);

  if (!response.ok) {
    throw new Error('Failed to fetch meal data');
  }

  const data = await response.json();
  const validatedMeal = mealDataSchema.safeParse(data);

  if (!validatedMeal.success) {
    throw new Error('Invalid meal data');
  }

  return validatedMeal.data;
}

export default async function Details() {
  const mealData = await fetchMealData();

  if (!mealData) {
    return <Title tag="h1">No meal data available</Title>;
  }

  return <MealReview mealData={mealData} />;
}
