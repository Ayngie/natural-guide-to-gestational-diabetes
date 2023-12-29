import { Link } from "react-router-dom";
import logo from "/G.png"
import { StyledLogoContainer, StyledLogoImg, StyledLogoText } from "../../styles/layout/header/StyledLogo";

export const PageLogo = () => {

  return (
      <Link to="/natural-guide-to-gestational-diabetes/" className="logo">     
        <StyledLogoContainer>
            <StyledLogoImg alt="G-logotype" src={logo}></StyledLogoImg>  
            <StyledLogoText>Din naturliga guide vid graviditetsdiabetes</StyledLogoText>    
        </StyledLogoContainer>
    </Link>
  );
};