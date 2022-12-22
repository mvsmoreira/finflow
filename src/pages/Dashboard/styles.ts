import styled from "styled-components";

export const SummaryCardContainer = styled.div`
  display: flex;
  grid-area: summary-cards;
  justify-content: space-between;
  margin-top: 2rem;
`
SummaryCardContainer.displayName = 'SummaryCardContainer'

export const MainCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-area: cards;
  margin-top: 2rem;
  gap: 2rem;
`
MainCardContainer.displayName = 'MainCardContainer'