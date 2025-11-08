"use client";

import MobileMenu from "@/components/layout/mobileMenu";
import NavBar from "@/components/layout/navBar";
import Hero from "@/components/sections/hero";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MobileMenu
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />

      <NavBar openMenu={() => setIsOpen(true)} />
      <main className="h-full min-h-screen">
        <Hero />
      </main>
    </>
  );
}
