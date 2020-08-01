import React from "react";
//import Footer from "./Footer";
import { NavMenu } from "./NavMenu";

export function Layout({ children }) {
  return (
    <>
      <NavMenu />
      <>
        {children}
      </>
    </>
  );
}
