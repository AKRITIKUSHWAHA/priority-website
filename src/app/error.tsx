"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { RefreshCw, AlertTriangle, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service if needed
    console.error("Application Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-36 pb-20 px-4">
      <div className="max-w-xl w-full text-center space-y-8 p-8 rounded-2xl bg-white border border-slate-200 shadow-xl">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-600">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-navy-900">Something went wrong!</h2>
          <p className="text-slate-600">
            An unexpected error occurred while processing your request. Please try refreshing or return to the main operational portal.
          </p>
          {error.digest && (
            <p className="text-xs text-slate-400 font-mono">
              Error Digest: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button onClick={() => reset()} variant="primary" size="lg" className="w-full sm:w-auto">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button href="/" variant="outline" size="lg" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
