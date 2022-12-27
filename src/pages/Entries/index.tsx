import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { Search } from '../../components/Search'
import { Transaction } from '../../components/Transaction'
import { TransactionModal } from '../../components/TransactionModal'
import { api } from '../../libs/axios'
import {
  EntriesContainer,
  NewTransactionContainer,
  TransactionButton,
  TransactionsContainer,
} from './styles'

interface TransactionProps {
  id: number
  description: string
  type: 'revenue' | 'expense'
  amount: number
  category: string
  created_at: string
}

export const Entries = () => {
  const [open, setOpen] = useState(false)
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    async function fetchTransactions() {
      const response = await api.get('transactions', {
        params: {
          _sort: 'created_at',
          _order: 'desc',
        },
      })

      setTransactions(response.data)
    }
    fetchTransactions()
  }, [])

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
              amount={transaction.amount}
              category={transaction.category}
              date={transaction.created_at}
              title={transaction.description}
              type={transaction.type}
            />
          )
        })}
      </TransactionsContainer>
    </EntriesContainer>
  )
}
