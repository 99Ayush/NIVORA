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


export async function submitOwnerApplicationAction(formData: any) {
  // In a real application, you would use a transactional email service
  // like SendGrid, Resend, or AWS SES to send an email to the admin.
  // You would also save this data to a database with a 'pending' status.

  console.log("--- New Owner Application ---");
  console.log("Owner Name:", formData.name);
  console.log("Owner Email:", formData.email);
  console.log("Property Name:", formData.propertyName);
  console.log("City:", formData.city);
  console.log("Pincode:", formData.pincode);
  console.log("Nearest Colleges:", formData.colleges);
  console.log("-----------------------------");
  console.log("An admin would receive this information via email.");
  console.log("The email would contain 'Accept' and 'Reject' links.");
  console.log("--- End of Submission ---");

  // This return value signals to the client that the submission was successful.
  return { success: true, message: "Submission received." };
}
