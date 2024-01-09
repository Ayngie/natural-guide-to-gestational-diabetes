import { useState } from "react";
import { Outlet } from "react-router";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = () => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

  return (
    <>
      <Header setBurgerMenuIsOpen={setBurgerMenuIsOpen}></Header>
      {!burgerMenuIsOpen &&
      <main>
        <Outlet></Outlet>
      </main>
      }
      <Footer></Footer>
    </>
  );
};