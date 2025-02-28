import { Link } from 'react-router-dom';
import logoImg from '/G-logo.png';
import {
  LogoTextContainer,
  LogoWrapper,
  StyledLogoContainer,
  StyledLogoImg,
  StyledLogoText,
} from '../../styles/layout/header/StyledLogo';

export const PageLogo = () => {
  return (
    <LogoWrapper>
      <Link to="/" className="logo">
        <StyledLogoContainer>
          <StyledLogoImg
            alt="G-logotype, a lower case letter 'g', with an oval-shaped, light purble background. The bottom half of the letter 'g' has a small dot in it - making it resemple a navel, i.e. giving the letter the likeness of a pregnant woman's belly."
            src={logoImg}></StyledLogoImg>
          <LogoTextContainer>
            <StyledLogoText>Graviditetsdiabetes</StyledLogoText>
            <StyledLogoText>guiden</StyledLogoText>
          </LogoTextContainer>
        </StyledLogoContainer>
      </Link>
    </LogoWrapper>
  );
};
