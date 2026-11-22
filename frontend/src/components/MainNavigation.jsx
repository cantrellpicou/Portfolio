import LinkNav from "./LinkNav.jsx";

function MainNavigation() {
  return (
    <header className="flex h-24 items-center px-6 pl-12 lg:px-14 bg-(--color-accent)">
      <h3 className="text-xl font-sans tracking-widest uppercase font-thin max-[691px]:text-lg max-[600px]:text-base max-[538px]:text-sm">
        cantrell
      </h3>
      <LinkNav />
    </header>
  );
}

export default MainNavigation;
