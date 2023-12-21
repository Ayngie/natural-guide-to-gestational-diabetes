import { NavLink } from "react-router-dom";
import { StyledMenu } from "../../../styles/layout/header/hamburgermenu/StyledMenu";

interface IMenuProps {
  open: boolean;
  setOpen(show: boolean): void;
}

export const Menu = ({ open, setOpen }: IMenuProps) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const handleClick = () => {
    setOpen(false);
  };
  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/"}
        end
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Start
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/life"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Levnadsråd
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/training"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Träning
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/food"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Kost
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/recipes"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Recept
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/search"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Sök livsmedel
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/about"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Om detta projekt
      </NavLink>
    </StyledMenu>
  );
};
