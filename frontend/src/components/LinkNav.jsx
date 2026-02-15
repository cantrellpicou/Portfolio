import { Link, useLocation } from "react-router-dom";

function LinkNav({ name }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  let text =
    "decoration-0 font-sans tracking-widest uppercase font-extralight ";

  if (isActive(`/${name.toLowerCase()}`)) {
    text += " underline underline-offset-4";
  }

  return (
    <Link to={`/${name.toLowerCase()}`} className={text}>
      {name}
    </Link>
  );
}

export default LinkNav;
