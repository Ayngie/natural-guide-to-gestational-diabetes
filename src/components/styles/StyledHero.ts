import styled from "styled-components";
import flowers from "/flowers.jpg";


export const StyledHero = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255, 255, 255, 0.8)), url(${flowers});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 80vh;
    font-size: 1rem;

    margin-bottom: 10%;

    @media screen and (min-width: 380px) {
        font-size: 1.3rem;
    }
    @media screen and (min-width: 1000px) {
        height: 80vh;
        font-size: 2rem;
        margin-bottom: 3%;
    }

`;