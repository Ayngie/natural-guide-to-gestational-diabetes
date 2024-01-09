import { useEffect, useState } from "react";
import { Burger } from "./hamburgerMenu/Burger";
import { Menu } from "./hamburgerMenu/Menu";
import { PageLogo } from '../header/PageLogo';
import { DesktopNavBar } from "./desktopNavBar/DesktopNavBar";
import { HamburgerMenuWrapper } from "../../styles/layout/header/hamburgermenu/HamburgerMenuWrapper";
import { StyledHeader } from "../../styles/layout/header/StyledHeader";

interface IHeaderProps {
  setBurgerMenuIsOpen: (show: boolean) => void;
}

export const Header = ( {setBurgerMenuIsOpen}:IHeaderProps) => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  useEffect(() => {
      open ? setBurgerMenuIsOpen(true) : setBurgerMenuIsOpen(false);
    }, [open, setBurgerMenuIsOpen]);

  return (
    <StyledHeader id="/natural-guide-to-gestational-diabetes/">
      <PageLogo/>
      <DesktopNavBar/>
      <HamburgerMenuWrapper>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId}></Burger>
        <Menu open={open} setOpen={setOpen}></Menu>
      </HamburgerMenuWrapper>
    </StyledHeader>
  );
};