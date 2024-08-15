import { z, ZodObject, ZodUnion, ZodNull } from "zod";
import { userDataSchema } from "./user-data-schema";
import { mealDataSchema } from "./meal-data-schema";

export const mealReviewSchema: ZodObject<{
    nickname: z.ZodString;
    isConfirmed: z.ZodEffects<z.ZodBoolean>;
    meal: ZodUnion<[ZodNull, typeof mealDataSchema]>;
}> = userDataSchema.extend({
    meal: z.union([z.null(), mealDataSchema]),
});

export type MealReviewData = z.infer<typeof mealReviewSchema>;
