import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledErrorPage, ParagraphWrapper, StyledArticle } from "../styles/StyledWrappers";
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
    <StyledErrorPage>
        <StyledHeading>Error - 404</StyledHeading>
        <StyledArticle>
            <ParagraphWrapper>
                <h3>Ooops!</h3>
                <Paragraph>Åh nej... Något gick fel...! </Paragraph>      
                <Paragraph><StyledLinks><Link to="/natural-guide-to-gestational-diabetes/">Ta mig tillbaka till startsidan för att börja om</Link></StyledLinks>!</Paragraph>
            </ParagraphWrapper>
        </StyledArticle>
    </StyledErrorPage>
  );
};


