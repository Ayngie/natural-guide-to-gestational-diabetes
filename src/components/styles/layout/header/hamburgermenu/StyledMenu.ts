import styled from "styled-components";

interface IStyledMenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<IStyledMenuProps>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffeafc;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  text-align: center;
  text-transform: uppercase;

  a {
    position: relative;
    left: 8%;
    padding: 2%;
    text-decoration: none;
    letter-spacing: 0.1rem;
    color: rebeccapurple;

    &:active {
      color: hotpink;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
