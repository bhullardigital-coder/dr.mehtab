import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-slate-400 mb-8 max-w-md">
        Could not find requested resource. The page might have been removed or the link might be broken.
      </p>
      <Link 
        href="/"
        className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700"
      >
        Return Home
      </Link>
    </div>
  );
}
