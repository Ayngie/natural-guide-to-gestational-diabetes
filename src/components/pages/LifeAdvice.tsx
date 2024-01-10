import React, { useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import articles from "../../data/articles.json";
import { IArticlesData } from "../../models/IArticlesData";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLink, TextLink, BoldText } from "../styles/StyledTexts";

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
            <h4>Mobilappen T1D:</h4>
            <Paragraph>Detta är en jättebra app för typ I diabetes som gärna kan användas vid andra sorters diabetes enligt min mening. Appen har en superbra sökfunktion för livsmedel och bra allmän info. Rekommenderas varmt!</Paragraph>
            <Paragraph>Ladda ned här: 
              <TextLink href="https://play.google.com/store/apps/details?id=se.tad1.t1d&hl=en_US" target="_blank"> T1D (Google Play)</TextLink>, eller här:
              <TextLink href="https://apps.apple.com/se/app/t1d/id1532900106" target="_blank"> T1D (App Store)</TextLink>.
            </Paragraph>
          </ParagraphWrapper>
        </StyledArticle>

        <LinkToTop/>

        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};