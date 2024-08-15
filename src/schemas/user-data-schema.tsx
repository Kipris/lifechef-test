import { z, ZodObject } from "zod";

export const userDataSchema: ZodObject<{
    nickname: z.ZodString;
    isConfirmed: z.ZodEffects<z.ZodBoolean>;
  }> = z.object({
    nickname: z.string().trim().min(2, {
        message: "Nickname must be at least 2 characters",
    }),
    isConfirmed: z.boolean().refine((value) => value, {
        message: "Confirmation is required",
    }),
});

export type UserData = z.infer<typeof userDataSchema>;
