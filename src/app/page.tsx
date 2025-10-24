import NavBar from "@/components/layout/navBar.js";
import Hero from "@/components/sections/hero.js";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="h-full min-h-screen">
        <Hero />
      </main>
    </>
  );
}
