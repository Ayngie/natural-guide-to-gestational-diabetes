import { NavLink } from 'react-router-dom';
import { StyledDesktopNavBar } from '../../../styles/layout/header/desktopNavBar/StyledDesktopNavBar';

export const DesktopNavBar = () => {
  return (
    <StyledDesktopNavBar>
      <ul className="desktop-nav">
        <li>
          <NavLink to="/" end data-cy="desktop-nav-home-link">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink to="/life" data-cy="desktop-nav-life-link">
            Levnadsråd
          </NavLink>
        </li>
        <li>
          <NavLink to="/training" data-cy="desktop-nav-training-link">
            Träning
          </NavLink>
        </li>
        <li>
          <NavLink to="/food" data-cy="desktop-nav-food-link">
            Kost
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes" data-cy="desktop-nav-recipes-link">
            Recept
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" data-cy="desktop-nav-search-link">
            Sök livsmedel
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" data-cy="desktop-nav-about-link">
            Om detta projekt
          </NavLink>
        </li>
      </ul>
    </StyledDesktopNavBar>
  );
};
