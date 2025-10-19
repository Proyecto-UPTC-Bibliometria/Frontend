export default function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="transition-all ease-in-out duration-200 nav-link relative px-2 py-2 before:origin-center before:rounded-xl flex items-center gap-1 text-neutral-500 hover:text-neutral-900 before:bg-transparent before:scale-50 hover:before:scale-105 hover:before:bg-neutral-200/60 cursor-pointer">
      {children}
    </button>
  );
}
