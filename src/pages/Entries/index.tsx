import * as Dialog from '@radix-ui/react-dialog'
import { useContext, useState } from 'react'
import { Search } from '../../components/Search'
import { Transaction } from '../../components/Transaction'
import { TransactionModal } from '../../components/TransactionModal'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  EntriesContainer,
  NewTransactionContainer,
  TransactionButton,
  TransactionsContainer,
} from './styles'

export const Entries = () => {
  const [open, setOpen] = useState(false)
  const { transactions } = useContext(TransactionsContext)

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
        {transactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              transactionId={transaction.id}
              amount={transaction.amount}
              category={transaction.category}
              date={transaction.created_at}
              title={transaction.description}
              type={transaction.type}
              observations={transaction.observations}
              paid={transaction.paid}
            />
          )
        })}
      </TransactionsContainer>
    </EntriesContainer>
  )
}
