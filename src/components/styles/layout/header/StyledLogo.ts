import styled from "styled-components";

export const StyledLogoContainer = styled.div`
    margin: 3%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 10px;

    @media screen and (min-width:400px) {
        justify-content: center;
    }
`;

export const StyledLogoImg = styled.img`
    height: 100px;
`;

export const StyledLogoText = styled.span `
    font-size: 0.6rem; 
    width: 40%;
    text-align: left;
    text-transform: uppercase;
    font-weight: bolder;
    color: rebeccapurple;

    @media screen and (min-width: 360px) { //Samsung Galaxy S8+
        font-size: 0.8rem; 
        width: auto;
    }
    @media screen and (min-width: 375px) { //Iphone SE
        font-size: 0.85rem; 
    }
    @media screen and (min-width: 400px) { //Samsung Galaxy S20 Ultra
        font-size: 1rem; 
    }
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

export const LogoWrapper = styled.div `
    width: 80%;
`;
