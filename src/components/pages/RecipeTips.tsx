import React, { useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import articles from "../../data/articles.json";
import { IArticlesData } from "../../models/IArticlesData";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledRecipeArticle, IngredientsWrapper, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLink } from "../styles/StyledTexts";
import { StyledInput } from '../styles/StyledInput';

export const RecipeTips = () => {
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

  const sideNavLinksHtml = articlesData.recipes.map((article) => (
    <StyledSideNavLink key={`SideNavLink-${article.id}`}><AnchorLink href={`#${article.id}`}>{article.title}</AnchorLink></StyledSideNavLink>
  ));

  const articleSections = articlesData.recipes.map((article) => (
    <React.Fragment key={article.id}>
      <StyledRecipeArticle id={article.id}>
        <h3>{article.title}</h3>

        <IngredientsWrapper>
          <h4>Ingredienser:</h4>
          <ul>
            {article.ingredientsList.map((ingredient, index)=>(
              <li key={index}>
                <label>
                  <StyledInput type='checkbox'></StyledInput>
                  {ingredient}
                </label>
              </li>
            ))}
          </ul>
        </IngredientsWrapper>

        <ParagraphWrapper>
        <h4>Gör så här:</h4>
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