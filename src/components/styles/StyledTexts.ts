import styled from "styled-components";

/* ----------------------  Headings  ---------------------- */

export const StyledHeading = styled.h2 `
    padding: 1%;
    letter-spacing: 1px;
    font-size: 2em;
    color: pink;
    text-shadow: 2px 2px hotpink;
    text-align: center;
`;

export const StyledHeadingMobile = styled(StyledHeading) `
    display: block;
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const StyledHeadingDesktop = styled(StyledHeading) `
    display: none;
    @media screen and (min-width: 1000px) {
        display: block;
    }
`;

/* ----------------------  Regular texts  ---------------------- */

export const Paragraph = styled.p `
    margin-top: 0;
    width: 75%;
    font-family: 'Nunito Sans', sans-serif;
    font-size: large;
    @media screen and (min-width: 1200px) {
        width: 60%;
    }
`;

export const RightCenteredText = styled.p `
text-align: right;
text-decoration: underline;
font-size: smaller;
color: rebeccapurple;
padding-right: 20px;
`;


export const BoldText = styled.span `
    font-weight: 800;
`;

export const ItalicText = styled.span `
font-style: italic;
`;

export const MySignature = styled.span `
    font-family: 'Dancing Script', cursive;
    font-size: 1.5em;
    font-weight: 600;
`;

/* ----------------------  Link texts  ---------------------- */

export const StyledSideNavLink = styled.li `
    cursor: pointer;
    padding: 10px;
    font-weight: 800;

    a {
        color: rebeccapurple;
        text-shadow: 1px 1px white;
        text-decoration: none;    
      
        &:hover {
            color: rgb(162, 69, 255);
            text-decoration: 2px solid underline;
            text-decoration-color: rgb(162, 69, 255);
            text-underline-position: under;      
        }
    }
`;

export const StyledLinks = styled.span `
    a {
        color: rebeccapurple;
        text-decoration: none;
    }
`;

export const TextLink = styled.a `
    color: rebeccapurple;
`;

export const StyledBreadcrumb = styled(TextLink) `
    color: rebeccapurple;
    padding: 10px;
`;

export const IconLink = styled.a `
    color: rebeccapurple;
    text-decoration: none;
`;

/* ----------------------  Special symbols  ---------------------- */

export const UpSymbol = styled.p `
    width: 40px;
    font-weight: 800;
    font-size: 1.7em;
    a {
        display: block;
        width: 100%;
        color: rebeccapurple;
        text-decoration: none;
    }
`;

export const StyledForwardSlash = styled.span `
    padding-left: 10px;
    padding-right: 10px;
`;