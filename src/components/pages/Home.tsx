import { Link } from "react-router-dom";
import { StyledFullSection, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph, StyledLinks } from "../styles/StyledTexts";

export const Home = () => {
  return (
    <StyledFullSection>
      <StyledHeading>Hej!</StyledHeading>
      <ParagraphWrapper>
        <Paragraph>Här kan du läsa om hur man på naturlig väg kan hantera sin graviditetsdiabetes. &#129328;</Paragraph>
        <Paragraph>Jag har själv haft graviditetsdiabetes och sett hur svårt det är att hitta samlad info på hur man kan hantera sin graviditetsdiabetes utan att behöva ta insulin. På denna sida erbjuder jag mina samlade lärdomar.</Paragraph>
        <Paragraph>Om du har en annars frisk graviditet och vill ha tips på naturliga hjälpmedel för att hålla stabilare blodsocker, då är detta sidan för dig!</Paragraph>
        <Paragraph>&#9888;&#65039; OBS! Har du en mer komplicerad sjukdomshistorik, eller kanske en historik av ätstörningar, rekommenderas du att fatta beslut i samråd med din vårdpersonal. Denna webbplats erbjuder ej medicinsk rådgivning. Bara en samling av mina tips som hjälpte mig!</Paragraph>
        <Paragraph> Läs mer på: <StyledLinks><Link to="/about">'Om detta projekt'</Link></StyledLinks>.</Paragraph>
        <Paragraph>Jättekul om jag kan hjälpa någon med mina tips, jag vet vilken djungel det är. Lycka till och må så gott! &#128149;</Paragraph>
        <Paragraph>Bästa hälsningar, Angelica &#128075;</Paragraph>
      </ParagraphWrapper>
    </StyledFullSection>
  );
};