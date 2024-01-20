import styled from "styled-components";

export const StyledLogoContainer = styled.div`
    margin: 3%;
    display: flex;
    flex-direction: row;       
    justify-content: left;
    align-items: center;
    gap: 1px;

    @media screen and (min-width:400px) {
        justify-content: center;
    }
`;

export const LogoTextContainer = styled.div`
    display: flex;
    flex-direction: row;       
    flex-wrap: wrap;
`;

export const StyledLogoImg = styled.img`
    height: 100px;
`;

export const StyledLogoText = styled.span `
    font-size: 0.8em; 
    width: 52%;
    text-align: left;
    color: rebeccapurple;

    @media screen and (min-width: 360px) { //Samsung Galaxy S8+
        font-size: 1.3em; 
        width: auto;
    }
    @media screen and (min-width: 500px) {
        max-width: 80%;
    }
    @media screen and (min-width: 700px) {
        max-width: none;
    }
`;

export const LogoWrapper = styled.div `
    padding-top: 4%;
    width: 60%;
    @media screen and (min-width: 1200px) {
        padding: 1%;
        width: 100%;
    }

`;
