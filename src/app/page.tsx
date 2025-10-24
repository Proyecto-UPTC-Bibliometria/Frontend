import NavBar from "@/components/layout/navBar";
import Hero from "@/components/sections/hero";

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
