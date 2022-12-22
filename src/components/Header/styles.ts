import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  grid-area: header;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  padding: 0 1rem;
  margin: 1rem auto 0;
  gap: 1.5rem;

  @media (max-width: 480px) {
    height: 0;
    gap: 0;
    margin: 0;
    padding: 1rem;
  }
`
HeaderContainer.displayName = 'HeaderContainer'