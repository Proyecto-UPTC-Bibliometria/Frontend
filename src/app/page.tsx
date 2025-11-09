"use client";

import MobileMenu from "@/components/layout/mobileMenu";
import NavBar from "@/components/layout/navBar";
import Hero from "@/components/sections/hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (!window.localStorage.getItem("theme")) {
      const newTheme = window.matchMedia("(prefers-color-scheme: dark)")
        ? "dark"
        : "light";

      window.localStorage.setItem("theme", newTheme);
    }

    setTheme(window.localStorage.getItem("theme") ?? "");

    document.querySelector("html")?.classList.add(theme);
    document
      .querySelector("html")
      ?.classList.remove(theme === "dark" ? "light" : "dark");
  }, [theme]);

  const handleChangeTheme = () => {
    if (window.localStorage.getItem("theme") === "dark") {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <>
      <MobileMenu
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />

      <NavBar
        openMenu={() => setIsOpen(true)}
        changeTheme={handleChangeTheme}
      />
      <main className="h-full min-h-screen">
        <Hero />
      </main>
    </>
  );
}
