"use client";

import Link from "next/link";

export default function MobileLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <>
      <Link
        className={`text-4xl w-full text-neutral-600 gap-2 transition-all ease-in-out duration-200 nav-link relative py-2 before:origin-center before:rounded-xl flex items-center hover:text-neutral-900 hover:scale-105`}
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
