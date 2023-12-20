import AnchorLink from "react-anchor-link-smooth-scroll";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLinks } from "../styles/StyledTexts";

export const LifeAdvice = () => {
  return (
    <section>
      <StyledHeadingMobile>Levnadsråd för stabilare blodsocker</StyledHeadingMobile>

      <StyledGrid>
        <StyledAside>
          <nav>          
            <StyledSideNav>
              <StyledSideNavLinks><AnchorLink href="#Rutiner">Rutiner</AnchorLink></StyledSideNavLinks>
              <StyledSideNavLinks><AnchorLink href="#Stress">Stress</AnchorLink></StyledSideNavLinks>
              <StyledSideNavLinks><AnchorLink href="#Somn">Sömn</AnchorLink></StyledSideNavLinks>
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection>
          <StyledHeadingDesktop>Levnadsråd för stabilare blodsocker</StyledHeadingDesktop>

          <StyledArticle id="Rutiner">
            <h3>Rutiner:</h3>
            <ParagraphWrapper>
              <Paragraph>Rutiner hjälper kroppen hålla bättre blodsockerbalans. Att äta regelbundna måltider, att somna och vakna vid ungefär samma tid.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <LinkToTop/>

          <StyledArticle id="Stress">
            <h3>Stress:</h3>
            <ParagraphWrapper>
              <Paragraph>Stress påverkar blodsockret då kortisolet påverkar insulinresistensen i kroppen. Högre kortisol (som vid stress), ger högre insulinresistens (när kroppen redan har högre insulinbehov iom graviditeten och att man är två), vilket ger högre blodsocker.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <LinkToTop/>

          <StyledArticle id="Somn">
            <h3>Sömn:</h3>
            <ParagraphWrapper>
              <Paragraph>Om du sover för lite får du likaså högre kortisolnivå i kroppen, och högre insulinresistens. Sömnen är svårare som gravid, men det hjälper att göra vad man kan för att sova bättre. Tex. regelbundna läggningstider, sov med en gravidkudde mellan knäna, etc.</Paragraph>
            </ParagraphWrapper>
          </StyledArticle>

          <LinkToTop/>

        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};