import AnchorLink from "react-anchor-link-smooth-scroll";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, UpSymbol, StyledSideNavLinks } from "../styles/StyledTexts";

export const FoodAdvice = () => {
  return (
    <section>
      <StyledHeadingMobile>Kostråd för stabilt blodsocker</StyledHeadingMobile>

      <StyledGrid>
        <StyledAside>
          <nav>          
            <StyledSideNav>
                <StyledSideNavLinks><AnchorLink href="#Regelbundenhet">Regelbundenhet</AnchorLink></StyledSideNavLinks>
                <StyledSideNavLinks><AnchorLink href="#SammansattningMaltid">Sammansättning av måltid</AnchorLink></StyledSideNavLinks>
                <StyledSideNavLinks><AnchorLink href="#FarreKolhydrater">Färre kolhydrater</AnchorLink></StyledSideNavLinks>
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection>
          <StyledHeadingDesktop>Kostråd för stabilt blodsocker</StyledHeadingDesktop>

          <StyledArticle id="Regelbundenhet">
            <h3>Regelbundenhet:</h3>
            <ParagraphWrapper>
            <Paragraph>Att äta regelbundna måltider har en stor påverkan på blodsockret.</Paragraph>
            <Paragraph>Ju mer regelbudna måltider och mellanmål, desto mindre risk att äta för mycket på grund av att man annars hunnit bli alltför hungrig. Viktigt är att mellanmålen är stadiga och lagom matiga.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

          <StyledArticle id="SammansattningMaltid">
            <h3>Sammansättning av måltid:</h3>
            <ParagraphWrapper>
              <Paragraph>Det är inte bara vad du äter som spelar roll, utan även hur du äter det. Om du äter kolhydrater men samtidigt äter fett och protein, så sker matsmältningen på ett annorlunda sätt än om du bara äter kolhydrater. När allt spjälkas samtidigt blir det inte lika hög glukostopp. </Paragraph>
              <Paragraph>Likaså har man sett att om du äter grönsaker en stund innan du äter dina kolhydrater så har det en skyddande effekt mot glukostoppar.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

          <StyledArticle id="FarreKolhydrater">
            <h3>Färre kolhydrater:</h3>
            <ParagraphWrapper>
              <Paragraph>'Klassiska kolhydrater' som vete, ris, och vitt bröd är något som blir allt svårare för kroppen att klara av insulinbehov till allteftersom graviditeten fortskrider. Därför hjälper det blodsockret att istället för kolhydrater äta mer protein och fett.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};