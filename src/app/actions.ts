"use server";

import { generateAreaSummary } from "@/ai/flows/generate-area-summary";
import type { GenerateAreaSummaryOutput } from "@/ai/flows/generate-area-summary";

export async function getAiSummaryAction(collegeName: string, pincode: string): Promise<GenerateAreaSummaryOutput> {
  try {
    const result = await generateAreaSummary({ collegeName, pincode });
    return result;
  } catch (error) {
    console.error("Error generating AI summary:", error);
    throw new Error("Failed to generate AI summary. Please try again later.");
  }
}
