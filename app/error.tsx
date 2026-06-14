'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        Something went wrong!
      </h2>
      <button 
        onClick={() => reset()}
        className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700"
      >
        Try again
      </button>
    </div>
  );
}