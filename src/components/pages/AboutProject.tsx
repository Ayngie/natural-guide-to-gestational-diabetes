import { useEffect } from "react";
import envelopeIcon from "/envelope-heart-fill.svg";
import linkedInIcon from "/linkedin.svg";
import gitHubIcon from "/github.svg";
import { LinkToTop } from "../LinkToTop";
import { StyledAboutSection, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph, BoldText, TextLink, MySignature } from "../styles/StyledTexts";
import { StyledIcon } from "../styles/StyledIcon";

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
    <StyledAboutSection>
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
          Då jag har jobbat som osteopat med egen klinik i 10 år, har jag en del tidigare allmänna kunskaper inom medicin och hälsa, samt även ett stort intresse för att förebygga problem på naturlig väg. 
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
          <TextLink href="mailto:angelica.reutersward@medieinstitutet.se?subject=Angående ditt examensarbete om graviditetsdiabetes&body=Hej Angelica! Jag heter..."> maila mig <StyledIcon src={envelopeIcon} alt="Envelope Icon"></StyledIcon> ! </TextLink>
        </Paragraph>

        <Paragraph>Med det sagt, önskar jag trevlig läsning & må så gott! &#128149;</Paragraph>
        <Paragraph>Bästa hälsningar, </Paragraph>
        <Paragraph><MySignature>Angelica </MySignature> &#128075;</Paragraph>

        <Paragraph>P.s. Jag finns även på 
          <TextLink href="https://www.linkedin.com/in/angelicareutersward/" target="_blank" aria-label="Link to go to LinkedIn profile page."> LinkedIn <StyledIcon src={linkedInIcon} alt="LinkedIn Icon"></StyledIcon> </TextLink>
          , och på
          <TextLink href="https://github.com/Ayngie" target="_blank" aria-label="Link to go to GitHub page."> GitHub <StyledIcon src={gitHubIcon} alt="GitHub Icon"></StyledIcon> </TextLink>
          !
        </Paragraph>

        <LinkToTop/>
        
      </ParagraphWrapper>
    </StyledAboutSection>
  );
};