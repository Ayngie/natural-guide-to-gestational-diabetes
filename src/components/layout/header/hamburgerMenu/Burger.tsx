import { StyledBurger } from "../../../styles/layout/header/hamburgermenu/StyledBurger";

interface IBurgerProps {
  open: boolean;
  setOpen(show: boolean): void;
}

export const Burger = ({ open, setOpen }: IBurgerProps) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      data-cy="mobile-nav-burger"
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}>
      <span className="first"/>
      <span className="second"/>
      <span className="third"/>
    </StyledBurger>
  );
};
