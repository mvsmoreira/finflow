import styled from 'styled-components'

export const SummaryCardContainer = styled.div`
  display: grid;
  grid-area: summary-cards;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
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
