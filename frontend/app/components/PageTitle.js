"use client";
import { Title } from "../styles/AllStyles";
import { Shadows_Into_Light_Two } from "next/font/google";

const shadow = Shadows_Into_Light_Two({ subsets: ["latin"], weight: ["400"] });
const PageTitle = () => {
  return <Title style={shadow.style}>Todo-List</Title>;
};

export default PageTitle;
