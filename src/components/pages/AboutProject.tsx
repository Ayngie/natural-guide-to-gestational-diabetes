import { useEffect } from "react";
import { ExternalLink } from "react-external-link";
import { StyledFullSection, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph, StyledLinks, BoldText } from "../styles/StyledTexts";

export const AboutProject = () => {
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
      <StyledHeading>Om detta projekt</StyledHeading>
      <ParagraphWrapper>
        <Paragraph>Denna webbplats är ett examensarbete gjort av frontendutvecklare <BoldText>Angelica Reuterswärd</BoldText>, på utbildningen        
          <StyledLinks>
            <ExternalLink href="https://medieinstitutet.se/utbildningar/front-end-developer/">
              <span> Frontend Developer på Medieinstitutet i Stockholm</span>
            </ExternalLink>
          </StyledLinks>. &#128187;
        </Paragraph>
        <Paragraph>Inspirationen kommer från att jag själv haft graviditetsdiabetes - kanske vid min första graviditet, och definitivt vid min andra. Jag vet vilken djungel det är att försöka hitta bra information för att hålla sitt blodsocker i schack. Jag har själv känt stressen av ett ständigt stigande blodsocker, och själv velat undvika att ta insulinsprutor (om möjligt) och istället lyckas hantera jämnt blodsocker på naturlig väg. </Paragraph>
        <Paragraph>Tack vare mycket efterforskningar och hårt arbete lyckades jag slippa insulinet, ha en hälsosam graviditet, och fick en fantastiskt hälsosam och fin bebis (som var aldeles lagom stor :). &#129328;  </Paragraph>
        <Paragraph><BoldText>Målet med denna webbplats</BoldText> var att jag ville försöka skapa en webbplats som erbjuder en överblick av de kunskaper jag lyckades samla på mig, och som hjälpte mig. Min strävan var att skapa en tydlig och strukturerad webbplats med info för att hjälpa hålla jämnare blodsocker och på naturlig väg bättre hantera sin graviditetsdiabetes. </Paragraph>
        <Paragraph>&#9888;&#65039; OBS! Att denna webbplats EJ utger sig för att ge medicinska råd, utan du som läsare är ansvarig för din egen vård och dina egna beslut. Har du en mer komplicerad sjukdomshistorik, eller kanske en historik av ätstörningar, rekommenderas du att fatta beslut i samråd med din vårdpersonal. Denna webbplats erbjuder ej medicinsk rådgivning. Bara en samling av mina tips som hjälpte mig!</Paragraph>
        <Paragraph>Jag hoppas att mina tips kan ge någon annan en skjuts på vägen för att hålla sin graviditetsdiabetes under kontrol och må så bra som möjligt under sin gravidresa! &#129336; &#8205; </Paragraph>
        <Paragraph>Vill du komma i kontakt med mig kan du prova att 
          <StyledLinks><a href="mailto:angelica.reutersward@medieinstitutet.se?subject=Angående ditt examensarbete om graviditetsdiabetes&body=Hej Angelica! Jag heter..."> maila mig</a>!</StyledLinks>
        </Paragraph>
        <Paragraph>Med det sagt, önskar jag trevlig läsning & må så gott! &#128149;</Paragraph>
        <Paragraph>Bästa hälsningar, Angelica &#128075;</Paragraph>
      </ParagraphWrapper>
    </StyledFullSection>
  );
};


