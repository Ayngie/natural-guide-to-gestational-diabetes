import { Link } from "react-router-dom";
import logoImg from "/G-logo.png";
import { LogoWrapper, StyledLogoContainer, StyledLogoImg, StyledLogoText } from "../../styles/layout/header/StyledLogo";

export const PageLogo = () => {

  return (
    <LogoWrapper>
      <Link to="/natural-guide-to-gestational-diabetes/" className="logo">     
        <StyledLogoContainer>
            <StyledLogoImg alt="G-logotype" src={logoImg}></StyledLogoImg>  
            <StyledLogoText>Din naturliga guide vid graviditetsdiabetes</StyledLogoText>    
        </StyledLogoContainer>
      </Link>
    </LogoWrapper>
  );
};