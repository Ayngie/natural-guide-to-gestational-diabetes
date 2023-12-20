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
                <Link to={"life"}>Levnadsråd</Link>
            </li>
            <li>
                <Link to={"training"}>Träning</Link>
            </li>
            <li>
                <Link to={"/food"}>Kost</Link>
            </li>
            <li>
                <Link to={"/recipes"}>Recept</Link>
            </li>
            <li>
                <Link to={"/search"}>Sök livsmedel</Link>
            </li>
            <li>
                <Link to={"/about"}>Om detta projekt</Link>
            </li>
        </ul>
    </StyledDesktopNavBar>
  );
};