import styled from "styled-components";

/* ----------------------  Basics  ---------------------- */

export const ParagraphWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* ----------------------  Full page Layout  ---------------------- */

export const StyledFullSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20%;
    height: 100%; //för att det skulle bli blått ända ned i mobile... */

    @media screen and (min-width: 1000px) {
        padding-bottom: 0%;
        height: 100vh; //för att det skulle bli blått ända ned i desktop... */
    }
`;


/* ----------------------  Split page Layout  ---------------------- */

export const StyledGrid = styled.section `
    display: flex;
    flex-direction: column;
    background-color: white;
    @media screen and (min-width: 1000px) {
        flex-direction: row;
        /* justify-content: center; */
    }
`;
export const StyledAside = styled.aside `
    background-color: aliceblue;
    width: 100%;

    @media screen and (min-width: 1000px) {
        width: 15%;
        padding-left: 3%;
        text-align: left;

        border: 2px solid white;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        border-left: none;
    }
`;
export const StyledSplitSection = styled.section `
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;


    @media screen and (min-width: 1000px) {
        width: 85%;

        border: 2px solid white;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-right: none;
        border-left: 1px;
    }
`;

export const StyledSideNav = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10%;
    list-style: none;

    @media screen and (min-width: 1000px) {
        flex-direction: column;
        gap: 0%;
        padding-top: 60%;
        }
`;


/* ----------------------  Articles  ---------------------- */

export const StyledArticle = styled.article `
    margin-top: 10%;
    padding-top: 2.5%; 
    padding-bottom: 5%; 
    background-color: white;
    border-top: 2px solid #ededfa;
    border-bottom: 2px solid #ededfa;
    border-radius: 15px;
    width: 90%;
    @media screen and (min-width: 1000px) {
        width: 75%;
        margin-top: 0;
    }
`;

export const StyledRecipeArticle = styled(StyledArticle) `
    width: 90%;

    @media screen and (min-width: 1000px) {
        width: 60%;
    }

`;

export const IngredientsWrapper = styled.section `
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

/* ----------------------  Search  ---------------------- */

export const StyledSearchSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 3em;
    gap: 3em;
`;
