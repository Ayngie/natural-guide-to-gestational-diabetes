import { Link } from "react-router-dom";
import logoImg from "/G-logo.png";
import { LogoTextContainer, LogoWrapper, StyledLogoContainer, StyledLogoImg, StyledLogoText, LetterG } from "../../styles/layout/header/StyledLogo";

export const PageLogo = () => {

  return (
    <LogoWrapper>
      <Link to="/natural-guide-to-gestational-diabetes/" className="logo">     
        <StyledLogoContainer>
            <StyledLogoImg alt="G-logotype" src={logoImg}></StyledLogoImg>  
            <LogoTextContainer>
              <StyledLogoText>raviditetsdiabetes</StyledLogoText>    
              <StyledLogoText><LetterG>g</LetterG>uiden</StyledLogoText>    
            </LogoTextContainer>
        </StyledLogoContainer>
      </Link>
    </LogoWrapper>
  );
};