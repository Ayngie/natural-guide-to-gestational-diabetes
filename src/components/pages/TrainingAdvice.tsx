import React, { useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import articles from "../../data/articles.json";
import { IArticlesData } from "../../models/IArticlesData";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLink, TextLink } from "../styles/StyledTexts";

export const TrainingAdvice = () => {
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

  const sideNavLinksHtml = articlesData.training.map((article) => (
    <StyledSideNavLink key={`SideNavLink-${article.id}`}><AnchorLink href={`#${article.id}`}>{article.title}</AnchorLink></StyledSideNavLink>
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
      <StyledHeadingMobile>Träningstips för ett stabilare blodsocker</StyledHeadingMobile>
      <StyledGrid>
        <StyledAside>
          <nav>
            <StyledSideNav>
              {sideNavLinksHtml}
              <StyledSideNavLink><AnchorLink href="#links">Länkar</AnchorLink></StyledSideNavLink>
            </StyledSideNav>
          </nav>
        </StyledAside>

        <StyledSplitSection className="articles-section">
          <StyledHeadingDesktop>Träningstips för ett stabilare blodsocker</StyledHeadingDesktop>
          {articleSections}

          <StyledArticle id="links">
          <h3>Länkar</h3>
          <ParagraphWrapper> 
            <h4>Fler tips om träning för ett stabilare blodsocker:</h4>
            <Paragraph><TextLink href="https://diabetes.nu/diabetes-och-styrketraning/" target="_blank"> Diabetes.nu om styrketräning</TextLink>.</Paragraph>
            <Paragraph><TextLink href="https://www.diabetes.se/diabetes/diabetes-typ-2/traning/" target="_blank"> Svenska Diabetesförbundet om träning</TextLink>.</Paragraph>
            <Paragraph><TextLink href="https://www.fyss.se/wp-content/uploads/2018/01/Diabetes-TYP-2.pdf" target="_blank"> Fysisk aktivitet vid diabetes mellitus typ II</TextLink>(PDF).</Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper> 
            <h4>Positiva hälsoeffekter av fysisk aktivitet:</h4>
            <Paragraph><TextLink href="https://lakartidningen.se/klinik-och-vetenskap-1/artiklar-1/temaartikel/2022/09/fysisk-aktivitet-kan-ha-omedelbar-effekt-pa-depression-och-angest/" target="_blank"> Läkartidningen artikel</TextLink>.</Paragraph>
          </ParagraphWrapper>
          </StyledArticle>

          <LinkToTop/>

        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};


