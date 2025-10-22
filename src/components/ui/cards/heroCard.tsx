import HeroCardSkeleton from "../skeletons/heroCardSkeleton";

export default function HeroCard({
  title,
  Icon,
  amount,
  text,
  isLoading,
}: {
  title: string;
  Icon: React.ElementType;
  amount: string;
  text: string;
  isLoading: boolean;
}) {
  return (
    <>
      {!isLoading ? (
        <article className="w-full flex flex-col gap-10 bg-neutral-100 p-6 rounded-2xl border border-neutral-200 hover:scale-105 transition-all ease-bounce duration-300">
          <header className="flex justify-between items-center">
            <h2 className="hidden w-full text-neutral-500 2xl:flex">{title}</h2>
            <h2
              className="flex w-full text-neutral-500 2xl:hidden"
              aria-hidden="true"
            >
              {title.split(" ")[0]}
            </h2>
            <Icon className="text-amber-400" size={24} />
          </header>

          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold">{amount}</span>
            <span className="text-sm text-neutral-400">{text}</span>
          </div>
        </article>
      ) : (
        <HeroCardSkeleton />
      )}
    </>
  );
}
