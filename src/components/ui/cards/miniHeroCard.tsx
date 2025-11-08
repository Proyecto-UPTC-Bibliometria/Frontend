import MiniHeroCardSkeleton from "../skeletons/miniHeroCardSkeleton";

export default function MiniHeroCard({
  title,
  amount,
  isLoading,
}: {
  title: string;
  amount: string;
  isLoading: boolean;
}) {
  return (
    <>
      {!isLoading ? (
        <article className="w-64 flex flex-col bg-neutral-100 dark:bg-neutral-800/50 dark:border-neutral-800 p-4 sm:rounded-2xl rounded-xl border border-neutral-200 items-center">
          <div className="flex items-center justify-between w-full">
            <h2 className="w-full text-neutral-500 dark:text-neutral-400 flex">
              {title.split(" ")[0]}
            </h2>

            <span className="sm:text-xl text-lg font-bold dark:text-neutral-100">
              {amount}
            </span>
          </div>
        </article>
      ) : (
        <MiniHeroCardSkeleton />
      )}
    </>
  );
}
