import React, { useState, useEffect } from "react";
import Image from "next/image";
import STYLE_GROUPS from "../../utils/styles";
import { navLinks, NAVBAR_HEIGHT } from "../../constants";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setIsScrollUp(false);
    } else {
      setIsScrollUp(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const renderNavbar = (
    textColor: "white" | "black",
    logoColor: "white" | "red" | "blue"
  ) => (
    <nav className={`w-full flex justify-between items-center`}>
      <Image src={`/logo_${logoColor}.png`} alt="logo" width={75} height={59} />
      <ul className="flex flex-row flex-1 items-center justify-end">
        {navLinks.map((link, index) => (
          <li
            className={`uppercase cursor-pointer text-xl text-${textColor} ${textColor === "black" ? "font-semibold" : "font-normal"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${currentPath.includes(link.id) && "underline underline-offset-8"
              }`}
            key={link.id}>
            <a onClick={() => {
              router.push(`#${link.id}`);
            }}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return prevScrollPos <= NAVBAR_HEIGHT / 10 ? (
    // The initial navbar
    <div
      className={`bg-transparent px-8 py-2 ${STYLE_GROUPS.flexCenter} border-b-2 border-white`}
    >
      {renderNavbar("white", "white")}
    </div>
  ) : (
    <div
      className={`z-10 w-full flex flex-col ${STYLE_GROUPS.flexCenter
        } sticky navbar ${isScrollUp ? "show" : "hide"}`}
    >
      {/*The mutated navbar when page is scroll down*/}
      <div className={`bg-white px-8 py-2 ${STYLE_GROUPS.flexCenter} w-full`}>
        {renderNavbar("black", "red")}
      </div>
      <div className={`bg-red-600 w-[94%] h-[6px] ${STYLE_GROUPS.flexCenter}`}></div>
    </div>
  );
};

export default Navbar;
