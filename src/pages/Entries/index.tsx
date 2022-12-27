import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Search } from '../../components/Search'
import { Transaction } from '../../components/Transaction'
import { TransactionModal } from '../../components/TransactionModal'
import {
  EntriesContainer,
  NewTransactionContainer,
  TransactionButton,
  TransactionsContainer,
} from './styles'

export const Entries = () => {
  const [open, setOpen] = useState(false)

  return (
    <EntriesContainer>
      <NewTransactionContainer>
        <Search />
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <TransactionButton>Novo Lançamento</TransactionButton>
          </Dialog.Trigger>
          <TransactionModal state={setOpen} />
        </Dialog.Root>
      </NewTransactionContainer>
      <TransactionsContainer>
        <Transaction
          amount="R$ 5000,00"
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
