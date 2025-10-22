export default function MiniHeroCardSkeleton() {
  return (
    <div className="w-64 flex flex-col justify-between bg-neutral-200/50 p-4 rounded-2xl border border-neutral-200 hover:scale-105 transition-all ease-bounce duration-300 animate-pulse">
      <div className="flex items-center justify-between w-full">
        <div className="flex bg-neutral-300/50 w-24 h-6 rounded-md" />
        <div className="flex bg-neutral-300/50 w-15 h-7 rounded-md" />
      </div>
    </div>
  );
}
