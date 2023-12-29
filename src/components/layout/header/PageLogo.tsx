import { Link } from "react-router-dom";
import { StyledLogoContainer, StyledLogoImg, StyledLogoText } from "../../styles/layout/header/StyledLogo";

export const PageLogo = () => {

  return (
      <Link to="/natural-guide-to-gestational-diabetes/" className="logo">     
        <StyledLogoContainer>
            <StyledLogoImg alt="G-logotype" src={process.env.PUBLIC_URL + "/G-logo.png"}></StyledLogoImg>  
            <StyledLogoText>Din naturliga guide vid graviditetsdiabetes</StyledLogoText>    
        </StyledLogoContainer>
    </Link>
  );
};