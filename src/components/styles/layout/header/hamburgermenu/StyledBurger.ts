import styled from "styled-components";

interface IStyledMenuProps {
  open: boolean;
}

export const StyledBurger = styled.button<IStyledMenuProps>`
  position: absolute;
  top: 3rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2.2rem;
    height: 0.25rem;
    background: rebeccapurple;
    border-radius: 10px;
    position: relative;
    transition: transform 0.3s linear, opacity 0.3s linear;
  }
  .first {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  .second {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }
  .third {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
