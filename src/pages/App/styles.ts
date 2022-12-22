import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-areas: 'header header' 'sidebar summary' 'sidebar summary-cards' 'sidebar cards';
  width: 100%;
  max-width: 1480px;
  margin: 1.5rem auto;
`
AppContainer.displayName = 'AppContainer'