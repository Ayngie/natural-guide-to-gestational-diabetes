import { StyledHero } from "./styles/StyledHero";
import { StyledHeading, Paragraph, BoldText, ItalicText } from "./styles/StyledTexts";
import { ParagraphWrapper } from "./styles/StyledWrappers";


export const Hero = () => {
    return (
    <StyledHero>
        <ParagraphWrapper>
            <StyledHeading>Välkommen!</StyledHeading>
            <Paragraph>Graviditetsdiabetesguiden - din naturliga guide för att hantera och förebygga <BoldText>graviditetsdiabetes (GDM)</BoldText>. &#129328;</Paragraph>
        </ParagraphWrapper>
        <Paragraph><ItalicText>Läs mer nedan!</ItalicText></Paragraph>
    </StyledHero>
    );
};