import LinkNav from "./LinkNav.jsx";

function MainNavigation() {
  return (
    <header className="flex h-24 items-center px-6 pl-12 lg:px-14 bg-[var(--color-accent)]">
      <h3 className="text-xl font-sans tracking-widest uppercase font-thin">
        cantrell
      </h3>
      <nav className="ml-auto">
        <ul className="flex gap-8">
          {["Home", "About", "Work", "Blog", "Contact"].map((item, i) => (
            <li key={i} className="hover:underline underline-offset-4">
              <LinkNav name={item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
