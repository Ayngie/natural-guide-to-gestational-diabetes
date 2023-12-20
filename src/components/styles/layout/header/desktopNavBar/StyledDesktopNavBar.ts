import styled from "styled-components";

export const StyledDesktopNavBar = styled.nav`
.desktop-nav {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  
  li {
    display: none; // Mobile view = hamburgermeny instead.
    padding: 5px;
    padding-right: 30px;
    width: 100%;

    a {
      text-decoration: none;
      font-weight: 800;
      color: rebeccapurple;

      &:hover {
        color: rgb(162, 69, 255);
      }
    }
    
    @media screen and (min-width: 1200px) {
      display: flex;
      width: 100%;
      flex-direction: row;
    }
  }
}
`;
