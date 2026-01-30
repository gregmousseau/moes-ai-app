export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-xl">M</span>
        </div>
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}
