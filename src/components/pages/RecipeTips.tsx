import AnchorLink from "react-anchor-link-smooth-scroll";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledRecipeArticle, IngredientsWrapper, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, UpSymbol, StyledSideNavLinks } from "../styles/StyledTexts";

export const RecipeTips = () => {
  return (
    <section>
      <StyledHeadingMobile>Recepttips för ett stabilare blodsocker</StyledHeadingMobile>

      <StyledGrid>
        <StyledAside >
          <nav>          
            <StyledSideNav >
              <StyledSideNavLinks><AnchorLink href="#Broccolisoppa">Broccolisoppa</AnchorLink></StyledSideNavLinks>
              <StyledSideNavLinks><AnchorLink href="#Fröknäckemacka">Fröknäckemacka</AnchorLink></StyledSideNavLinks>
              <StyledSideNavLinks><AnchorLink href="#Smoothie">Smoothie</AnchorLink></StyledSideNavLinks>
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection>
          <StyledHeadingDesktop>Recepttips för ett stabilare blodsocker</StyledHeadingDesktop>

          <StyledRecipeArticle id="Broccolisoppa">
            <h3>Broccolisoppa:</h3>
            <IngredientsWrapper>
              <h4>Ingredienser:</h4>
              <ul>
                <li>ca 500 g broccoli</li>
                <li>1 st gul lök</li>
                <li>9 dl vatten</li>
                <li>2 st buljongtärningar</li>
                <li>1 tsk vitvinsvinäger</li>
                <li>1-1,25 dl grädde</li>
                <li>salt och peppar efter smak</li>
              </ul>
            </IngredientsWrapper>
            <ParagraphWrapper>
              <h4>Gör så här:</h4>
              <Paragraph>Skär löken i bitar och dela broccolin i buketter (även finare delar av rotstocken kan användas). Lägg grönsakerna i en stor, tjockbottnad kastrull/gryta. Tillsätt vatten, buljong, vinäger. Låt blandningen få ett uppkok och skruva sedan ned värmen och låt sjuda under lock tills broccolin är mjuk, ca 15 minuter.</Paragraph>
              <Paragraph>Fiska upp en tredjedel av brollolin med en hålslev och lägg åt sidan. Tillsätt vatten och grädde i soppan och mixa slät. Smaka av med salt och peppar. Lägg tillbaka de hela buketterna i soppan och värm upp. Om man tycker om en len och tjockare soppa utan hela bitar, kan man mixa i all broccoli.</Paragraph>
            </ParagraphWrapper>
          </StyledRecipeArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

          <StyledRecipeArticle id="Fröknäckemacka">
            <h3>Fröknäckemacka:</h3>
            <IngredientsWrapper>
              <h4>Ingredienser:</h4>
              <ul>
                <li>Fröknäcke med lågt kolhydratinnehåll</li>
                <li>1 st fetaost</li>
                <li>1 burk tapenade (med lägre kolhydratinnehåll)</li>
                <li>Extra virgin olivolja</li>
                <li>Ekologisk torkad oregano</li>
                <li>salt och peppar efter smak</li>
              </ul>
            </IngredientsWrapper>
            <ParagraphWrapper>
              <h4>Gör så här:</h4>
              <Paragraph>Bred ut lite tapenade på en fröknäckeskiva. Dela fetaosten och ta 1/4 och lägg på tapenaden. Ringla lite olivolja över, och strö lite oregano på toppen. Salta och peppra efter smak.</Paragraph>
            </ParagraphWrapper>
          </StyledRecipeArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

          <StyledRecipeArticle id="Smoothie">
            <h3>Smoothie:</h3>
            <IngredientsWrapper>
              <h4>Ingredienser:</h4>
              <ul>
                <li>Mandelmjölk (osockrad)</li>
                <li>Ett par dl frysta hallon</li>
                <li>Några buketter fryst broccoli</li>
                <li>En näve ekologiska sötmandlar</li>
                <li>3 st ekologiska färska dadlar</li>
                <li>Ekologisk Ceylonkanel, kardemumma, och bourbonvaniljpulver efter smak</li>
              </ul>
            </IngredientsWrapper>
            <ParagraphWrapper>
              <h4>Gör så här:</h4>
              <Paragraph>Mixa alla ingredienser efter tyck och smak. Häll upp i glas och njut!</Paragraph>
            </ParagraphWrapper>
          </StyledRecipeArticle>

          <UpSymbol><AnchorLink href="#/">^</AnchorLink></UpSymbol>

        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};