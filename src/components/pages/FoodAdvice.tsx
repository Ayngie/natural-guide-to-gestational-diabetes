import React, { useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import articles from "../../data/articles.json";
import { IArticlesData } from "../../models/IArticlesData";
import { LinkToTop } from "../LinkToTop";
import { StyledGrid, StyledAside, StyledSideNav, StyledSplitSection, StyledArticle, ParagraphWrapper } from "../styles/StyledWrappers";
import { StyledHeadingMobile, StyledHeadingDesktop, Paragraph, StyledSideNavLink, TextLink } from "../styles/StyledTexts";

export const FoodAdvice = () => {
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

  const sideNavLinksHtml = articlesData.food.map((article) => (
    <StyledSideNavLink key={`SideNavLink-${article.id}`}><AnchorLink href={`#${article.id}`}>{article.title}</AnchorLink></StyledSideNavLink>
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
      <StyledHeadingMobile>Kostråd för ett stabilare blodsocker</StyledHeadingMobile>
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
          <StyledHeadingDesktop>Kostråd för ett stabilare blodsocker</StyledHeadingDesktop>
          {articleSections}

          <StyledArticle id="links">
          <h3>Länkar</h3>
          <ParagraphWrapper> 
            <h4>Fler tips om bra mat för ett stabilare blodsocker:</h4>
              <Paragraph><TextLink href="https://www.diabetes.se/contentassets/8458e645a4414f69a592b1b3490631ef/sv_diabetes_typ2_a4_mat.pdf" target="_blank">Diabetes.se</TextLink> (Obs! PDF).</Paragraph>
              <Paragraph>
                Appen T1D - ladda ned:
                <TextLink href="https://play.google.com/store/apps/details?id=se.tad1.t1d&hl=en_US" target="_blank"> Google Play</TextLink>,
                <TextLink href="https://apps.apple.com/se/app/t1d/id1532900106" target="_blank"> App Store</TextLink>.
              </Paragraph>
              <Paragraph><TextLink href="https://www.instagram.com/glucosegoddess/?hl=sv" target='_blank'>Glucose goddess på instagram</TextLink>.</Paragraph>
          </ParagraphWrapper>

          <ParagraphWrapper> 
            <h4>Forskning om Alfa-liponsyra (ALA) och graviditet:</h4>
              <Paragraph><TextLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7778749/" target="_blank">Effect of alpha-lipoic acid supplementation on the lipid profile and lipid ratios in women with gestational diabetes mellitus: A clinical trial study</TextLink> (studie från 2020).</Paragraph>
              <Paragraph><TextLink href="https://www.mdpi.com/2039-7283/13/5/100" target="_blank">Effect of Oral High Molecular Weight Hyaluronic Acid (HMWHA), Alpha Lipoic Acid (ALA), Magnesium, Vitamin B6 and Vitamin D Supplementation in Pregnant Women: A Retrospective Observational Pilot Study</TextLink> (studie från 2023).</Paragraph>
              <Paragraph><TextLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8438679/" target="_blank">Benefits of α-lipoic acid in high-risk pregnancies (Review)</TextLink> (studie från 2021).</Paragraph>
              <Paragraph><TextLink href="https://pubmed.ncbi.nlm.nih.gov/29028075/" target="_blank">Safety of oral alpha-lipoic acid treatment in pregnant women: a retrospective observational study</TextLink> (studie från 2017).</Paragraph>
          </ParagraphWrapper>

        </StyledArticle>

        <LinkToTop/>

        </StyledSplitSection>
      </StyledGrid>
    </section>
  );
};