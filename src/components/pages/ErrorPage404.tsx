import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledFullSection, ParagraphWrapper, StyledArticle } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph, StyledLinks } from "../styles/StyledTexts";

export const ErrorPage404 = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
          window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
          });
      }, 0);
    } catch (error) {
      // fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);
  
  return (
    <StyledFullSection>
        <StyledHeading>Error - 404</StyledHeading>
        <StyledArticle>
            <ParagraphWrapper>
                <h3>Ooops!</h3>
                <Paragraph>Något gick fel och sidan kunde inte laddas. Kontrollera stavningen i din url eller försök igen senare!</Paragraph>      
                <Paragraph><StyledLinks><Link to="/natural-guide-to-gestational-diabetes/about">Tillbaka till startsidan</Link></StyledLinks>!</Paragraph>
            </ParagraphWrapper>
        </StyledArticle>
    </StyledFullSection>
  );
};


