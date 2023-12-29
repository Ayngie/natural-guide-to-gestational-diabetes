import { Link } from "react-router-dom";
// import logo from "/G.png"
import { StyledLogoContainer, StyledLogoImg, StyledLogoText } from "../../styles/layout/header/StyledLogo";

export const PageLogo = () => {

  const logoImgURL = new URL("../../../../public/G-logo.png", import.meta.url).href;

  return (
      <Link to="/natural-guide-to-gestational-diabetes/" className="logo">     
        <StyledLogoContainer>
            <StyledLogoImg alt="G-logotype" src={logoImgURL}></StyledLogoImg>  
            <StyledLogoText>Din naturliga guide vid graviditetsdiabetes</StyledLogoText>    
        </StyledLogoContainer>
    </Link>
  );
};