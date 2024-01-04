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
    <StyledMenu open={open} aria-hidden={!isHidden} data-cy="mobile-nav-menu">
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/"}
        end
        data-cy="mobile-nav-home-link"
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Start
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/life"}
        data-cy="mobile-nav-life-link"
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Levnadsråd
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/training"}
        data-cy="mobile-nav-training-link"
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Träning
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/food"}
        data-cy="mobile-nav-food-link"
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Kost
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/recipes"}
        data-cy="mobile-nav-recipes-link"
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Recept
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/search"}
        data-cy="mobile-nav-search-link"
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Sök livsmedel
      </NavLink>
      <NavLink
        to={"/natural-guide-to-gestational-diabetes/about"}
        data-cy="mobile-nav-about-link"
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Om detta projekt
      </NavLink>
    </StyledMenu>
  );
};
