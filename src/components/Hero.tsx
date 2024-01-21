import { StyledHero } from "./styles/StyledHero";
import { StyledHeading, Paragraph, BoldText, ItalicText } from "./styles/StyledTexts";


export const Hero = () => {
    return (
    <StyledHero>
        <StyledHeading>Välkommen!</StyledHeading>
        <Paragraph>Graviditetsdiabetesappen - din naturliga guide för att hantera och förebygga <BoldText>graviditetsdiabetes (GDM)</BoldText>. &#129328;</Paragraph>
        <Paragraph><ItalicText>Läs mer nedan!</ItalicText></Paragraph>
    </StyledHero>
    );
};