import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledFullSection, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeading, Paragraph, BoldText, StyledLinks, TextLink } from "../styles/StyledTexts";

export const Home = () => {
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
      <StyledHeading>Hej!</StyledHeading>
      <ParagraphWrapper>
        <Paragraph>Välkommen till din naturliga guide för att hantera och förebygga <BoldText>graviditetsdiabetes (GDM)</BoldText>. &#129328;</Paragraph>

        <h3>Vad är GDM?</h3>
        <Paragraph>
          När kvinnan har en bebis (eller fler) i magen behöver kroppen mer av hormonet insulin för att  
          hålla normala blodsockernivåer för mamma och bebis. Ibland blir behovet otillräckligt vilket  
          leder till graviditetsdiabetes (GDM). 
        </Paragraph>

        <Paragraph>
          Efter graviditeten återställs allt vanligen för kvinnan, men har hon en gång haft GDM har hon   
          ökad risk att utveckla diabetes mellitus typ 2 senare i livet. Har kvinnan en gång haft GDM är  
          även risken stor (50-70% risk -  <TextLink href="https://mellanarkiv-offentlig.vgregion.se/alfresco/s/archive/stream/public/v1/source/available/SOFIA/SKAS9716-1940753776-142/SURROGATE/Graviditetsdiabetes%20(GDM)%20-%20handl%c3%a4ggning.pdf" target="_blank"> källa </TextLink>) att få det vid framtida graviditeter.         
        </Paragraph>

        <h3>Vad kan jag själv göra?</h3>
        <Paragraph>
          Det finns dock mycket vi göra på naturlig väg för att hantera och även förebygga 
          graviditetsdiabetes! Det handlar i stora drag om levnadsfaktorer, träning, och kost. 
        </Paragraph>

        <h3>Vem är denna sida för?</h3>
        <Paragraph>
          Denna sida är för alla som vill ha tips på hur man på naturlig väg kan minska risk för eller 
          hantera en graviditetsdiabetes, vare sig du själv har det, du vill undvika att få det, eller om du 
          söker tips åt en närstående. 
        </Paragraph>

        <Paragraph>Dessa tips är inte menade att ersätta läkemedelsbehandling om sådan krävs, utan informationen på denna webbsida kan ses som hjälpmedel för att förebygga dem, eller även stötta kroppen under tiden man behandlas.</Paragraph>

        <Paragraph>                  
          Om du har en annars frisk graviditet och vill ha tips på naturliga hjälpmedel för att hålla stabilare blodsocker, då är detta sidan för dig!
        </Paragraph>

        <Paragraph>
        <BoldText>Obs!</BoldText>  Har du en mer komplicerad sjukdomshistorik, eller kanske en historik av ätstörningar, 
          rekommenderas du att fatta beslut i samråd med din vårdpersonal. Denna webbplats erbjuder 
          ej medicinsk rådgivning. Bara en samling av mina tips som hjälpte mig! &#9888;&#65039;
        </Paragraph>


        <h3>Vem har gjort denna sida?</h3>
        <Paragraph>
          En osteopat, frontendutvecklare och två-barnsmamma som själv har haft GDM och sett hur 
          svårt det är att hitta samlad info på hur man kan hantera den utan att behöva ta insulin. På 
          denna sida erbjuder jag mina samlade lärdomar.
        </Paragraph>
        
        <Paragraph>Jättekul om jag kan hjälpa någon med mina tips, jag vet vilken djungel det är. Lycka till och må så gott! &#128149;</Paragraph>

        <Paragraph> Läs mer på: <StyledLinks><Link to="/natural-guide-to-gestational-diabetes/about"> 'Om detta projekt' </Link></StyledLinks>.</Paragraph>
        
      </ParagraphWrapper>
    </StyledFullSection>
  );
};