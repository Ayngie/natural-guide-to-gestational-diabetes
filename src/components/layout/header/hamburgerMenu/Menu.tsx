import { Link } from "react-router-dom";
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
      <Link
        to={"/natural-guide-to-gestational-diabetes/"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Start
      </Link>
      <Link
        to={"/life"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Levnadsråd
      </Link>
      <Link
        to={"/training"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Träning
      </Link>
      <Link
        to={"/food"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Kost
      </Link>
      <Link
        to={"/recipes"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Recept
      </Link>
      <Link
        to={"/search"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Sök livsmedel
      </Link>
      <Link
        to={"/about"}
        onClick={handleClick}
        tabIndex={tabIndex}
        aria-hidden={true}>
        Om detta projekt
      </Link>
    </StyledMenu>
  );
};
