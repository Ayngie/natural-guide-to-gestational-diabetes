import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #FFFCFC;
    padding: 2%;
    padding-top: 5%;

    a {
        text-decoration: none;
    }

    @media screen and (min-width:400px) {
        padding-top: 3.5%;
    }

    @media screen and (min-width:500px) {
        padding-top: 3%;
    }
    @media screen and (min-width:640px) {
        padding-top: 2%;
    }

`;
