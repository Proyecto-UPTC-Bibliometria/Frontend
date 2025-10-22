import Link from "next/link";

export default function MainButton({
  children,
  href,
  primary,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  return (
    <>
      {primary ? (
        <Link
          className="group text-center bg-amber-300 px-5 py-3.5 font-normal rounded-2xl hover:scale-105 button hover:bg-[#f8cc2e] text-neutral-950 shadow-yellow-center/70 flex gap-1 items-center justify-center"
          href={href}
        >
          {children}
        </Link>
      ) : (
        <Link
          className="bg-neutral-200 text-center px-5 py-3.5 font-normal rounded-2xl hover:scale-105 button hover:bg-neutral-300/75 shadow-black-center/15 flex gap-1 items-center justify-center"
          href={href}
        >
          {children}
        </Link>
      )}
    </>
  );
}
