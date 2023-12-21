import { NavLink } from "react-router-dom";
import { StyledDesktopNavBar } from "../../../styles/layout/header/desktopNavBar/StyledDesktopNavBar";

export const DesktopNavBar = () => {
  return (
    <StyledDesktopNavBar>
        <ul className="desktop-nav">
            <li>
                <NavLink to="/natural-guide-to-gestational-diabetes/" end>Start</NavLink>
            </li>
            <li>
                <NavLink to="/natural-guide-to-gestational-diabetes/life">Levnadsråd</NavLink>
            </li>
            <li>
                <NavLink to="/natural-guide-to-gestational-diabetes/training">Träning</NavLink>
            </li>
            <li>
                <NavLink to="/natural-guide-to-gestational-diabetes/food">Kost</NavLink>
            </li>
            <li>
                <NavLink to="/natural-guide-to-gestational-diabetes/recipes">Recept</NavLink>
            </li>
            <li>
                <NavLink to="/natural-guide-to-gestational-diabetes/search">Sök livsmedel</NavLink>
            </li>
            <li>
                <NavLink to="/natural-guide-to-gestational-diabetes/about">Om detta projekt</NavLink>
            </li>
        </ul>

    </StyledDesktopNavBar>
  );
};