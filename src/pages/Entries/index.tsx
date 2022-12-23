import { NewTransactionButton } from "../../components/NewTransactionButton"
import { Transaction } from "../../components/Transaction"
import { EntriesContainer, TransactionsContainer } from "./styles"

export const Entries = () => {
  return (
    <EntriesContainer>
      <NewTransactionButton />
      <TransactionsContainer>
        <Transaction
          amount='R$ 5000,00'
          category="Alimentação"
          date="22/12/2022"
          paid
          title="Pastel"
          type="expense"
          observations="Test"
        />
        <Transaction
          amount='R$ 5000,00'
          category="Alimentação"
          date="22/12/2022"
          paid
          title="Pastel"
          type="expense"
          observations="Test"
        />
      </TransactionsContainer>
    </EntriesContainer>
  )
}