import { useEffect } from "react";
import { StyledFullSection, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph, BoldText, TextLink, MySignature } from "../styles/StyledTexts";

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
        <Paragraph>
          Denna webbplats är ett examensarbete gjort av frontendutvecklare <BoldText>Angelica Reuterswärd</BoldText>, på 
          utbildningen <TextLink href="https://medieinstitutet.se/utbildningar/front-end-developer/"> Frontend Developer på Medieinstitutet i Stockholm</TextLink>. &#128187;
        </Paragraph>

        <Paragraph>
          <BoldText>Inspirationen</BoldText> kommer från att jag själv haft graviditetsdiabetes - kanske vid min första 
          graviditet, och definitivt vid min andra. Jag vet vilken djungel det är att försöka hitta bra 
          information för att hålla sitt blodsocker i schack. Jag har själv känt stressen av ett ständigt 
          stigande blodsocker, och själv velat undvika att ta insulinsprutor (om möjligt) och istället lyckas 
          hantera jämnt blodsocker på naturlig väg. 
        </Paragraph>
        
        <Paragraph>
          Tack vare mycket efterforskningar och hårt arbete lyckades jag slippa insulinet, ha en hälsosam graviditet, 
          och fick en fantastiskt hälsosam och fin bebis (som var aldeles lagom stor :). &#129328;  
        </Paragraph>

        <Paragraph>
          <BoldText>Målet med detta projekt</BoldText> var att försöka skapa en tydlig och strukturerad webbplats som 
          erbjuder naturliga tips och info för att hjälpa hålla jämnare blodsocker och bättre hantera sin 
          graviditetsdiabetes.            
        </Paragraph>

        <Paragraph> Jag har utgått från de kunskaper och tips som hjälpte mig med min GDM.</Paragraph>

        <Paragraph>
          <BoldText>Obs!</BoldText> Att denna webbplats EJ erbjuder medicinsk rådgivning, utan du som läsare är 
          ansvarig för din egen vård och dina egna beslut. Har du en mer komplicerad sjukdomshistorik, 
          eller kanske en historik av ätstörningar, rekommenderas du att fatta beslut i samråd med din 
          vårdpersonal. &#9888;&#65039; 
        </Paragraph>

        <Paragraph>
          <BoldText>Jag hoppas</BoldText> att mina tips kan ge någon annan en skjuts på vägen för att hålla sin 
          graviditetsdiabetes under kontrol och må så bra som möjligt under sin gravidresa! &#129336; &#8205; 
        </Paragraph>

        <Paragraph>Vill du komma i kontakt med mig kan du prova att 
          <TextLink href="mailto:angelica.reutersward@medieinstitutet.se?subject=Angående ditt examensarbete om graviditetsdiabetes&body=Hej Angelica! Jag heter..."> maila mig!</TextLink>
        </Paragraph>

        <Paragraph>Med det sagt, önskar jag trevlig läsning & må så gott! &#128149;</Paragraph>
        <Paragraph>Bästa hälsningar, </Paragraph>
        <Paragraph><MySignature>Angelica </MySignature> &#128075;</Paragraph>
      </ParagraphWrapper>
    </StyledFullSection>
  );
};