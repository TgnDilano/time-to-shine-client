import React, { useEffect, useState } from "react";
import appRoutes from "../routes/routes";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import { Button, useDisclosure } from "@chakra-ui/react";
import Inscription from "./inscription";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const pathname = location.pathname;

  const [currentRoute, setRoute] = useState();

  useEffect(() => {
    setRoute(pathname);
  }, [pathname]);

  console.log(currentRoute);

  return (
    <header className="sticky top-0 w-screen z-80 h-[5.2rem] bg-black shadow">
      <nav className="h-full w-full text-lg text-zinc-400 flex justify-between padx items-center">
        <Link className="p-1">
          <img src={logo} />
        </Link>
        <ul className="flex justify-between items-center gap-x-10">
          {Object.values(appRoutes).map((e, index) => (
            <Link to={e.path}>
              <li
                className={`hover:text-gold cursor-pointer ${
                  e.path === currentRoute ? "text-gold" : ""
                }`}
                key={e.name + index}
              >
                {e.name}
              </li>
            </Link>
          ))}
        </ul>
        <Button borderRadius={0} backgroundColor="blue.400" onClick={onOpen}>S'incrire</Button>
      </nav>
      <Inscription isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default NavBar;
