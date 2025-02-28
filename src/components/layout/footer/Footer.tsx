import { StyledFooter } from '../../styles/layout/footer/StyledFooter';

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <StyledFooter>
      <p> &copy; Copyright {currentYear} Angelica Reuterswärd</p>
    </StyledFooter>
  );
};
