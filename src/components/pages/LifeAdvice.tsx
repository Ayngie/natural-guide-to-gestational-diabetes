import React, { useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import articles from "../../data/articles.json";
import { IArticlesData } from "../../models/IArticlesData";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLink, TextLink } from "../styles/StyledTexts";

export const LifeAdvice = () => {
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
  
  const articlesData = articles as IArticlesData;

  const sideNavLinksHtml = articlesData.life.map((article) => (
    <StyledSideNavLink key={`SideNavLink-${article.id}`}><AnchorLink href={`#${article.id}`}>{article.title}</AnchorLink></StyledSideNavLink>
  ));

  const articleSections = articlesData.life.map((article) => (
    <React.Fragment key={article.id}>
      <StyledArticle id={article.id}>
        <h3>{article.title}</h3>

        <ParagraphWrapper>
          {article.paragraphList.map((paragraph, index)=>(
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
        </ParagraphWrapper>
      </StyledArticle>

      <LinkToTop/>
    </React.Fragment>
  ));

  return (
    <section>
      <StyledHeadingMobile>Levnadsråd för ett stabilare blodsocker</StyledHeadingMobile>
      <StyledGrid>
        <StyledAside>
          <nav>          
            <StyledSideNav>
              {sideNavLinksHtml}
              <StyledSideNavLink><AnchorLink href="#links">Länkar</AnchorLink></StyledSideNavLink>
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection>
          <StyledHeadingDesktop>Levnadsråd för ett stabilare blodsocker</StyledHeadingDesktop>
          {articleSections}
          
          <StyledArticle id="links">
          <h3>Länkar</h3>
          <ParagraphWrapper> 
            <h4>Fler tips om bra livsstil för ett stabilare blodsocker:</h4>
            <Paragraph><TextLink href="https://www.diabetes.se/diabetes/diabetes-typ-1/ovrig-information-om-typ-1-diabetes/graviditet-och-diabetes/" target='_blank'>Svenska Diabetesförbundet - om graviditetsdiabetes</TextLink>.</Paragraph>
            <Paragraph><TextLink href="https://www.diabetes.se/diabetes/diabetes-typ-1/ovrig-information-om-typ-1-diabetes/graviditet-och-diabetes/bebisen-i-fokus-med-nya-gransvarden/" target='_blank'>Svenska Diabetesförbundet - om gränsvärden för GDM</TextLink>.</Paragraph>
            <Paragraph><TextLink href="https://www.healthline.com/nutrition/14-ways-to-lower-blood-sugar" target='_blank'>Healthline article - lower blood sugar levels naturally</TextLink>.</Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper> 
            <h4>Mobilappen T1D:</h4>
            <Paragraph>Detta är en jättebra app för typ I diabetes som gärna kan användas vid andra sorters diabetes enligt min mening. Appen har en superbra sökfunktion för livsmedel och bra allmän info. Rekommenderas varmt!</Paragraph>
            <Paragraph>Ladda ned här: 
              <TextLink href="https://play.google.com/store/apps/details?id=se.tad1.t1d&hl=en_US" target="_blank"> T1D (Google Play)</TextLink>, eller här:
              <TextLink href="https://apps.apple.com/se/app/t1d/id1532900106" target="_blank"> T1D (App Store)</TextLink>.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper> 
            <h4>Hur du mäter ditt blodsocker - steg för steg:</h4>
            <Paragraph><TextLink href="https://www.terveyskyla.fi/diabetestalo/sv/egenv%C3%A5rd-av-diabetes/sj%C3%A4lvuppf%C3%B6ljning-av-blodsocker/blodsockerm%C3%A4tning-steg-f%C3%B6r-steg" target='_blank'>Hälsobyn.fi</TextLink>.</Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper> 
            <h4>Exempel på små lancetter:</h4>
            <Paragraph><TextLink href="https://swemed.se/168733/forbrukning-medicinsk-material/sjukvardsmaterial/diabetes/blodsocker-ketonmatning/lansett/lansett-wellion-33g-020mm-gul-200-p-200st/?gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wYsSSeu6ZKje1RuMcLZTuRawbOHu2fQXQjCCTMXJGUahZjAPAxc40kaAiK_EALw_wcB" target='_blank'>Lansett Wellion - 33G (0,20mm) gul 200-p - 200 st</TextLink>.</Paragraph>
          </ParagraphWrapper>

        </StyledArticle>

        <LinkToTop/>

        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};