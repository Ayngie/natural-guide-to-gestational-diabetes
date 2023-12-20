import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    
    @media screen and (min-width: 600px) {
        flex-direction: row;
    }
`;

export const StyledInput = styled.input`
    padding: 0.75em;
    padding-left: 3em;
    padding-right: 3em;
    /* min-height: 3em; */
    height: 3em;
    border: 2px solid #ededfa;
    border-radius: 3em;
    font-size: 1em;
    font-weight: 500;
`;

export const StyledButton = styled.button`
    padding: 0.75em;
    padding-left: 3em;
    padding-right: 3em;
    height: 4em;

    border: 2px solid rebeccapurple;
    border-radius: 3em;
    font-size: 1em;
    font-weight: 500;

    cursor: pointer;
    /* margin-left: 0.32em; */
    background-color: rebeccapurple;
    color: white;
`;
