import { Link } from "react-router-dom";
import { StyledDesktopNavBar } from "../../../styles/layout/header/desktopNavBar/StyledDesktopNavBar";

export const DesktopNavBar = () => {
  return (
    <StyledDesktopNavBar>
        <ul className="desktop-nav">
            <li>
                <Link to={"/natural-guide-to-gestational-diabetes/"}>Start</Link>
            </li>
            <li>
                <Link to={"/natural-guide-to-gestational-diabetes/life"}>Levnadsråd</Link>
            </li>
            <li>
                <Link to={"/natural-guide-to-gestational-diabetes/training"}>Träning</Link>
            </li>
            <li>
                <Link to={"/natural-guide-to-gestational-diabetes/food"}>Kost</Link>
            </li>
            <li>
                <Link to={"/natural-guide-to-gestational-diabetes/recipes"}>Recept</Link>
            </li>
            <li>
                <Link to={"/natural-guide-to-gestational-diabetes/search"}>Sök livsmedel</Link>
            </li>
            <li>
                <Link to={"/natural-guide-to-gestational-diabetes/about"}>Om detta projekt</Link>
            </li>
        </ul>
    </StyledDesktopNavBar>
  );
};