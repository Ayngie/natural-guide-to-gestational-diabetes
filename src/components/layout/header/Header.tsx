import { useState } from "react";
import { Link } from "react-router-dom";
import { Burger } from "./hamburgerMenu/Burger";
import { Menu } from "./hamburgerMenu/Menu";
import { PageLogo } from '../../styles/StyledTexts';
import { DesktopNavBar } from "./desktopNavBar/DesktopNavBar";
import { HamburgerMenuWrapper } from "../../styles/layout/header/hamburgermenu/HamburgerMenuWrapper";
import { StyledHeader } from "../../styles/layout/header/StyledHeader";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  return (
    <StyledHeader id="/natural-guide-to-gestational-diabetes/">
      <Link to="/natural-guide-to-gestational-diabetes/" className="logo">      
        <PageLogo>Din naturliga guide vid graviditetsdiabetes</PageLogo>
      </Link>
      <DesktopNavBar/>
      <HamburgerMenuWrapper>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId}></Burger>
        <Menu open={open} setOpen={setOpen}></Menu>
      </HamburgerMenuWrapper>
    </StyledHeader>
  );
};