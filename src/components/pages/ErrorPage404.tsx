import { StyledFullSection, ParagraphWrapper, StyledArticle } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph, StyledLinks } from "../styles/StyledTexts";
import { Link } from "react-router-dom";

export const ErrorPage404 = () => {
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


