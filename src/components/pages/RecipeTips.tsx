import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import articles from "../../data/articles.json";
import { IArticlesData } from "../../models/IArticlesData";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledRecipeArticle, IngredientsWrapper, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLinks } from "../styles/StyledTexts";

export const RecipeTips = () => {
  const articlesData = articles as IArticlesData;

  const sideNavLinksHtml = articlesData.recipes.map((article) => (
    <StyledSideNavLinks key={`SideNavLinks-${article.id}`}><AnchorLink href={`#${article.id}`}>{article.title}</AnchorLink></StyledSideNavLinks>
  ));

  const articleSections = articlesData.recipes.map((article) => (
    <React.Fragment key={article.id}>
      <StyledRecipeArticle id={article.id}>
        <h3>{article.title}</h3>

        <IngredientsWrapper>
          <h4>Ingredienser:</h4>
          <ul>
            {article.ingredientsList.map((ingredient, index)=>(
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </IngredientsWrapper>

        <ParagraphWrapper>
          {article.paragraphList.map((paragraph, index)=>(
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
        </ParagraphWrapper>
      </StyledRecipeArticle>

      <LinkToTop/>
    </React.Fragment>
  ));

  return (
    <section>
      <StyledHeadingMobile>Recepttips för ett stabilare blodsocker</StyledHeadingMobile>

      <StyledGrid>
        <StyledAside>
          <nav>          
            <StyledSideNav>
            {sideNavLinksHtml}
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection>
          <StyledHeadingDesktop>Recepttips för ett stabilare blodsocker</StyledHeadingDesktop>
            {articleSections}
        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};