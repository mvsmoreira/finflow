import styled from "styled-components";

export const EntriesContainer = styled.section`
  grid-area: cards;
  display: flex;
  flex-direction: column;
  width: 78.5rem;
  gap: 2rem;
  margin: 2rem 0;
`
EntriesContainer.displayName = 'EntriesContainer'

export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  background: ${(props) => props.theme['gray-200']};
  width: 68.5rem;
  margin-left: auto;
  padding: 2rem;
`
TransactionsContainer.displayName = 'TransactionsContainer'