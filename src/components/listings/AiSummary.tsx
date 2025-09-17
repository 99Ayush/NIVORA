"use client";

import { useEffect, useState } from "react";
import { Sparkles, ServerCrash } from "lucide-react";
import { getAiSummaryAction } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AiSummaryProps {
  collegeName: string;
  pincode: string;
}

export default function AiSummary({ collegeName, pincode }: AiSummaryProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        setLoading(true);
        setError(null);
        const result = await getAiSummaryAction(collegeName, pincode);
        setSummary(result.summary);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    }
    fetchSummary();
  }, [collegeName, pincode]);

  if (loading) {
    return (
      <Card className="mb-8 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            AI-Powered Area Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-8">
        <ServerCrash className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Card className="mb-8 shadow-lg border-accent/50">
       <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="h-6 w-6 text-accent animate-pulse" />
          AI-Powered Area Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90">{summary}</p>
      </CardContent>
    </Card>
  );
}
