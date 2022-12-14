import React, { useState, useEffect } from "react";
import STYLE_GROUPS from "../../utils/styles";
import { NAVBAR_HEIGHT } from "../../constants";
import { TComponent } from "../../utils/types";
import NavbarCore from "./NavbarCore";

type TSubComponent = {
  NavbarCore: typeof NavbarCore;
}

const Navbar: TComponent & TSubComponent = () => {
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

  return prevScrollPos <= (NAVBAR_HEIGHT / 10)
    ?
    ( // The initial navbar
      <div className={`bg-transparent px-8 py-2 ${STYLE_GROUPS.flexCenter} border-b-2 border-white`}>
        <Navbar.NavbarCore textColor="white" logoColor="white" />
      </div>
    )
    :
    (
      <div className={`z-10 w-full flex flex-col ${STYLE_GROUPS.flexCenter} sticky navbar ${isScrollUp ? "show" : "hide"}`}>
        {/*The mutated navbar when page is scroll down*/}
        <div className={`bg-white px-8 py-2 ${STYLE_GROUPS.flexCenter} w-full`}>
          <Navbar.NavbarCore textColor="black" logoColor="red" />
        </div>
        <div className={`bg-red-600 w-[94%] h-[6px] ${STYLE_GROUPS.flexCenter}`}>
        </div>
      </div>
    );
};

Navbar.NavbarCore = NavbarCore;

export default Navbar;
