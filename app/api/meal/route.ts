import { NextRequest, NextResponse } from "next/server";
import { mealDataSchema } from "@/src/schemas/meal-data-schema";
import { mealReviewSchema } from "@/src/schemas/meal-review-schema";
import meal from "./data.json";

export async function GET(request: NextRequest) {
  try {
    const validatedMeal = mealDataSchema.parse(meal);
    return NextResponse.json(validatedMeal, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Invalid meal data, ${JSON.stringify(error)}` }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    mealReviewSchema.parse(body);
    return NextResponse.json({ message: "Review posted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `An error occurred ${JSON.stringify(error)}` }, { status: 500 });
  }
}
