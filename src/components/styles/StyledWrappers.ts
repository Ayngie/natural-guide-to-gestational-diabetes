import styled from "styled-components";

/* ----------------------  Basics  ---------------------- */

export const ParagraphWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Breadcrumbs = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* width: 50%; */
    padding: 3%;

    @media screen and (min-width: 1000px) {
        padding: 1%;
        width: 50%;
        justify-content: left;
        margin-left: 15%;

    }

`;
/* ----------------------  Full page Layout  ---------------------- */

export const StyledFullSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20%;
    height: 100%; //för att det skulle bli blått ända ned i mobile... */

    @media screen and (min-width: 1000px) {
        padding-bottom: 5%;
        height: 100%; //för att det skulle bli blått ända ned i desktop... */
    }
`;

export const StyledSearchSection = styled(StyledFullSection) `
    padding: 3em;
    gap: 3em;
    /* height: 100%; //för att det skulle bli blått ända ned i mobile...  */

    @media screen and (min-width: 1000px) { 
    height: 100vh; //för att det skulle bli blått ända ned i desktop...
    }
`;

export const StyledAboutSection = styled(StyledFullSection) `
    /* height: 100%; //för att det skulle bli blått ända ned i mobile... */

    @media screen and (min-width: 1000px) {
        height: 100vh; //för att det skulle bli blått ända ned i desktop...
    }
`;

export const StyledErrorPage = styled(StyledFullSection) `
    height: 100vh;

    /* @media screen and (min-width: 1000px) {
        height: 100vh; //för att det skulle bli blått ända ned i desktop...
    } */
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

    @media screen and (min-width: 1500px) {
        padding-left: 4%;
    }
    @media screen and (min-width: 2000px) {
        padding-left: 5%;
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
    
    @media screen and (min-width: 1500px) {
        padding-top: 45%;
    }

    @media screen and (min-width: 2000px) {
        padding-top: 30%;
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

export const StyledFullSearchResults = styled(StyledArticle) `
    padding: 0%;
    @media screen and (min-width: 1000px) {
        padding: 5%;
        padding-left: 20%;
        padding-right: 20%;
    }
`;

export const StyledFoodItemArticle = styled.article `
    margin: 5%;
    padding: 1rem;
    border: 1px solid #ededfa;
    background-color: white;
    text-align: left;
`;

export const ClickableWrapper = styled.article `
    cursor: pointer;
    margin: 5%;
    padding: 0.5rem;
    border: 1px solid #ededfa;
    border-radius: 20px;
    background-color: #ededfa;
    text-align: left;
`;