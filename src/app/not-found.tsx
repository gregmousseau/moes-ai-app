import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl mb-6">🤖</div>
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">
          Oops! This page got lost in the matrix.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/dashboard" 
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link 
            href="/" 
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
