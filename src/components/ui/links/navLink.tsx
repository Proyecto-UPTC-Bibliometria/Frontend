"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const fullUrl = new URLSearchParams(window.location.href);

    setUrl(fullUrl.toString());
  }, [url]);

  const styles = url.includes(href.replace("/", ""))
    ? "text-neutral-900 before:scale-105 before:bg-neutral-200/60"
    : "text-neutral-500 hover:text-neutral-900 before:bg-transparent before:scale-50 hover:before:scale-105 hover:before:bg-neutral-200/60";

  return (
    <Link
      className={`transition-all ease-in-out duration-200 nav-link relative px-4 py-2 before:origin-center before:rounded-xl flex items-center gap-1 ${styles}`}
      href={href}
    >
      {children}
    </Link>
  );
}
