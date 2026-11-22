import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import SideBar from "./SideBar.jsx";

function LinkNav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 516) {
        setOpen(false);
      }
    });

    return () => {};
  });

  return (
    <>
      <AnimatePresence>
        {open ? (
          <SideBar onClose={() => setOpen(false)} />
        ) : (
          <ul className="hidden min-[516px]:flex gap-8 ml-auto">
            {["Home", "About", "Work", "Blog", "Contact"].map((name, i) => {
              let text =
                "decoration-0 font-sans tracking-widest uppercase font-extralight max-[691px]:text-sm max-[600px]:text-[12px] max-[538px]:text-[10px]";

              if (isActive(`/${name.toLowerCase()}`)) {
                text += " underline underline-offset-4";
              }

              return (
                <li key={i} className="hover:underline underline-offset-4">
                  <Link
                    to={`${name.toLowerCase() == "home" ? "/" : name.toLowerCase()}`}
                    className={text}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </AnimatePresence>

      {!open && (
        <button
          className="min-[516px]:hidden ml-auto"
          onClick={() => setOpen(true)}
        >
          <Menu className="stroke-1 w-6 h-6 text-black" />
        </button>
      )}
    </>
  );
}

export default LinkNav;
