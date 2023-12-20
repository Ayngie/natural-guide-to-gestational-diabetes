import { Outlet } from "react-router";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};