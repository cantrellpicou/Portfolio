import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

import { motion } from "framer-motion";

function SideBar({ onClose }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      key="sidebar-component"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeOutOut" }}
      className="w-[50%] absolute top-0 bottom-0 right-0 z-1"
    >
      <aside className="bg-black h-screen flex flex-col rounded-l-xl">
        <button
          className="flex justify-end h-24 items-center pr-5 pl-12 pt-2"
          onClick={onClose}
        >
          <X className="stroke-1 text-white size-8" />
        </button>
        <nav className="pl-6 h-full">
          <ul className="h-96 flex flex-col  gap-10">
            {["Home", "About", "Work", "Blog", "Contact"].map((name, i) => {
              let text =
                "decoration-0 font-sans tracking-widest uppercase font-extralight";

              if (
                isActive(
                  `${name.toLowerCase() == "home" ? "/" : `/${name.toLowerCase()}`}`,
                )
              ) {
                text += " underline underline-offset-4 underline-white";
              }

              return (
                <li key={i} className="text-white">
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
        </nav>
      </aside>
    </motion.div>
  );
}

export default SideBar;
