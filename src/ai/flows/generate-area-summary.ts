'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a summary of user reviews and feedback for accommodations near a specific college and pincode.
 *
 * - generateAreaSummary - An async function that takes college name and pincode as input and returns a summary of reviews.
 * - GenerateAreaSummaryInput - The input type for the generateAreaSummary function.
 * - GenerateAreaSummaryOutput - The output type for the generateAreaSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAreaSummaryInputSchema = z.object({
  collegeName: z.string().describe('The name of the college.'),
  pincode: z.string().describe('The pincode of the area.'),
});
export type GenerateAreaSummaryInput = z.infer<
  typeof GenerateAreaSummaryInputSchema
>;

const GenerateAreaSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of user reviews and feedback.'),
});
export type GenerateAreaSummaryOutput = z.infer<
  typeof GenerateAreaSummaryOutputSchema
>;

export async function generateAreaSummary(
  input: GenerateAreaSummaryInput
): Promise<GenerateAreaSummaryOutput> {
  return generateAreaSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAreaSummaryPrompt',
  input: {schema: GenerateAreaSummaryInputSchema},
  output: {schema: GenerateAreaSummaryOutputSchema},
  prompt: `You are an AI assistant designed to summarize user reviews and feedback for accommodations near a specific college and pincode.

  Given the following college name and pincode, please provide a concise summary of the general sentiment and feedback from multiple sources regarding accommodations in that area.

  College Name: {{{collegeName}}}
  Pincode: {{{pincode}}}
  `,
});

const generateAreaSummaryFlow = ai.defineFlow(
  {
    name: 'generateAreaSummaryFlow',
    inputSchema: GenerateAreaSummaryInputSchema,
    outputSchema: GenerateAreaSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
