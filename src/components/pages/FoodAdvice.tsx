import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import articles from "../../data/articles.json";
import { IArticlesData } from "../../models/IArticlesData";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLinks } from "../styles/StyledTexts";

export const FoodAdvice = () => {
  const articlesData = articles as IArticlesData;

  const sideNavLinksHtml = articlesData.food.map((article) => (
    <StyledSideNavLinks key={`SideNavLinks-${article.id}`}><AnchorLink href={`#${article.id}`}>{article.title}</AnchorLink></StyledSideNavLinks>
  ));

  const articleSections = articlesData.food.map((article) => (
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
      <StyledHeadingMobile>Kostråd för stabilt blodsocker</StyledHeadingMobile>
      <StyledGrid>
        <StyledAside>
          <nav>          
            <StyledSideNav>
              {sideNavLinksHtml}
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection>
          <StyledHeadingDesktop>Kostråd för stabilt blodsocker</StyledHeadingDesktop>
          {articleSections}
        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};