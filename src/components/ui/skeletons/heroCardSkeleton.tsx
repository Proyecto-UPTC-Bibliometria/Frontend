export default function HeroCardSkeleton() {
  return (
    <div className="w-full min-h-43.5 flex flex-col justify-between bg-neutral-200/50 dark:bg-neutral-800/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:scale-105 transition-all ease-bounce duration-300 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="flex bg-neutral-300/50 dark:bg-neutral-700/50 w-28 h-6 rounded-md" />
        <div className="flex bg-neutral-300/50 dark:bg-neutral-700/50 w-6 h-6 rounded-md" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex bg-neutral-300/50 dark:bg-neutral-700/50 w-20 h-8 rounded-md" />
        <div className="flex bg-neutral-300/50 dark:bg-neutral-700/50 w-24 h-4 rounded-sm" />
      </div>
    </div>
  );
}
