import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-slate-200 border-t-accent-500 rounded-full animate-spin" />
        <div className="absolute w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center text-white text-sm font-extrabold transform -skew-x-12">
          P
        </div>
      </div>
      <p className="text-slate-500 text-sm font-medium tracking-wide animate-pulse">
        Loading Priority Hauliers Portal...
      </p>
    </div>
  );
}
