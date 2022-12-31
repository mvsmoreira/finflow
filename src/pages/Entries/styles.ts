import styled from 'styled-components'

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
  padding: 2rem 1.5rem;
  gap: 0.5rem;
`
TransactionsContainer.displayName = 'TransactionsContainer'

export const NewTransactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 68.5rem;
  margin-left: auto;
`
NewTransactionContainer.displayName = 'NewTransactionContainer'

export const TransactionButton = styled.button`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme.$main};
  border: none;
  border-radius: 4px;
  transition: filter 0.2s ease-in-out;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-800']};

  &:hover {
    filter: brightness(0.9);
  }
`
TransactionButton.displayName = 'TransactionButton'
