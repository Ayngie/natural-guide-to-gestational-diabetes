import AnchorLink from "react-anchor-link-smooth-scroll";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, UpSymbol, StyledSideNavLinks } from "../styles/StyledTexts";

export const TrainingAdvice = () => {
  return (
    <section>
      <StyledHeadingMobile>Träningstips för stabilare blodsocker</StyledHeadingMobile>

      <StyledGrid>
        <StyledAside>
          <nav>
            <StyledSideNav>
                <StyledSideNavLinks><AnchorLink href="#NarTrana">När ska jag träna</AnchorLink></StyledSideNavLinks>
                <StyledSideNavLinks><AnchorLink href="#Styrketraning">Styrketräning</AnchorLink></StyledSideNavLinks>
                <StyledSideNavLinks><AnchorLink href="#Kondition">Kondition</AnchorLink></StyledSideNavLinks>
                <StyledSideNavLinks><AnchorLink href="#Promenader">Promenader</AnchorLink></StyledSideNavLinks>
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection className="articles-section">
          <StyledHeadingDesktop>Träningstips för stabilare blodsocker</StyledHeadingDesktop>

          <StyledArticle id="NarTrana">
            <h3>När ska jag träna:</h3>
            <ParagraphWrapper>
              <Paragraph>Om du gör någon form av träning direkt efter att du har ätit, kommer du att minska insulintoppen på det du ätit, och så kunna hålla ett bättre blodsockervärde. Man kan få stor effekt på sitt blodsocker av att direkt efter lunchen tex., gå ut på en power-walk. </Paragraph>
              <Paragraph>Instinkten kan ibland vara att 'vila på maten', eftersom det är lätt att känna sig trött som gravid och framförallt vid graviditetsdiabetes. Man kan dock vinna energi och bättre blodsocker av att röra på sig direkt efter maten.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

          <StyledArticle id="Styrketraning">
            <h3>Styrketräning:</h3>
            <ParagraphWrapper>
              <Paragraph>Ju mer muskler, deste lättare för kroppen att hålla jämnt blodsocker.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

          <StyledArticle id="Kondition">
            <h3>Kondition:</h3>
            <ParagraphWrapper>
              <Paragraph>Konditionsträning kan vara lågintensiva promenader, power-walks, spinning (om ditt bäcken tål det), eller liknande. Som regel gäller att det du kunnat göra och gjort mycket av innan du blev gravid kan du fortsätta med så länge det känns bra.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

          <StyledArticle id="Promenader">
            <h3>Promenader:</h3>
            <ParagraphWrapper>
              <Paragraph>Raska promenader är fantastisk träning - ett tips som ofta kanske inte lyssnas på då det kan kännas för enkelt. Dagliga powerwalksen, om du har möjlighet, kan dock hjälpa dig hålla blodsockret i schack. Kan du inte gå varje dag har forskning visat effekt av att åtminstone gå varannan dag, då viss effekt håller i sig ett dygn efter.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};