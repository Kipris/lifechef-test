import { z } from "zod";

export const mealComponentSchema = z.object({
    id: z.number(),
    title: z.string(),
    imageSrc: z.string(), // Убедитесь, что это поле присутствует
    rating: z.number().min(0).max(5),
    comment: z.string().optional(),
});

export const mealDataSchema = z.object({
    id: z.number(),
    title: z.string(),
    imageSrc: z.string(), // Добавьте, если нужно
    rating: z.number().min(0).max(5),
    comment: z.string().optional(),
    mealComponents: z.array(mealComponentSchema),
});

export type MealComponentData = z.infer<typeof mealComponentSchema>;
export type MealData = z.infer<typeof mealDataSchema>;