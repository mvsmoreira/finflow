import { FilterBar } from "../../components/FilterBar"
import { NewTransactionButton } from "../../components/NewTransactionButton"
import { EntriesContainer, TransactionsContainer } from "./styles"

export const Entries = () => {
  return (
    <EntriesContainer>
      <TransactionsContainer>
        <NewTransactionButton />
      </TransactionsContainer>
    </EntriesContainer>
  )
}