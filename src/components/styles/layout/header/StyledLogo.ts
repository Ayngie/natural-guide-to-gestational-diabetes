import styled from "styled-components";
import GradientBackground from "/GradientBackground.png"



export const StyledLogoContainer = styled.div`
    margin: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    /* background-image: url(${GradientBackground});
    border-radius: 5px; */
    /* background-position: center; */
    
    @media screen and (min-width: 900px) {
        margin: 2%;
    }
`;

export const StyledLogoImg = styled.img`
    height: 100px;
    /* width: 100px; */
`;

export const StyledLogoText = styled.span `
    font-size: 1rem; 
    text-align: left;
    text-transform: uppercase;
    font-weight: bolder;
    color: rebeccapurple;

    @media screen and (min-width: 500px) {
        max-width: 70%;
    }
    @media screen and (min-width: 700px) {
        max-width: none;
    }

    @media screen and (min-width: 900px) {
        font-size: 1.5rem;
    }
`;

export const StyledLogoTextOld = styled.h2 `
    max-width: 60%;
    padding-left: 4%;
    font-size: 1.3rem;
    text-align: left;
    text-transform: uppercase;
    font-weight: bolder;
    color: rebeccapurple;

    @media screen and (min-width: 440px) {
        font-size: 1.5rem;
    }    
    @media screen and (min-width: 500px) {
        font-size: 1.7rem;
    }
    @media screen and (min-width: 600px) {
        font-size: 1.9rem;
    }    
    @media screen and (min-width: 700px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1200px) {
        max-width: none;
        padding: 3%;
        text-align: center;
        font-size: 2rem;
        letter-spacing: 1px;
    }
`;

