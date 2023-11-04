import React from "react";
import { Shadows_Into_Light } from "next/font/google";

const shadow = Shadows_Into_Light({ subsets: ["latin"], weight: ["400"] });
const Navbar = () => {
  return <div className={shadow.className}>Navbar</div>;
};

export default Navbar;
