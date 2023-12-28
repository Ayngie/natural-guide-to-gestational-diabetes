import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import articles from "../../data/articles.json";
import { IArticlesData } from "../../models/IArticlesData";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLinks } from "../styles/StyledTexts";

export const TrainingAdvice = () => {
  const articlesData = articles as IArticlesData;

  const sideNavLinksHtml = articlesData.training.map((article) => (
    <StyledSideNavLinks key={`SideNavLinks-${article.id}`}><AnchorLink href={`#${article.id}`}>{article.title}</AnchorLink></StyledSideNavLinks>
  ));

  const articleSections = articlesData.training.map((article) => (
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
      <StyledHeadingMobile>Träningstips för stabilare blodsocker</StyledHeadingMobile>
      <StyledGrid>
        <StyledAside>
          <nav>
            <StyledSideNav>
              {sideNavLinksHtml}
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection className="articles-section">
          <StyledHeadingDesktop>Träningstips för stabilare blodsocker</StyledHeadingDesktop>
          {articleSections}
        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};