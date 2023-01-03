import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Search } from '../../components/Search'
import { Transaction } from '../../components/Transaction'
import { TransactionModal } from '../../components/TransactionModal'
import {
  Transaction as TransactionProps,
  TransactionsContext,
} from '../../contexts/TransactionsContext'
import {
  EntriesContainer,
  NewTransactionContainer,
  TransactionButton,
  TransactionsContainer,
} from './styles'

interface InputStateProps {
  query: string
  list: TransactionProps[]
}

export const Entries = () => {
  const { transactions } = useContext(TransactionsContext)

  const [inputValue, setInputValue] = useState<InputStateProps>({
    query: '',
    list: [],
  })

  useEffect(() => {
    setInputValue({
      query: '',
      list: transactions,
    })
  }, [transactions])

  const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const results = transactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    })
    setInputValue({
      query: event.target.value,
      list: results,
    })
  }

  return (
    <EntriesContainer>
      <NewTransactionContainer>
        <Search
          type="search"
          placeholder="Buscar lançamentos"
          value={inputValue.query}
          onChange={handleQuery}
        />
        <TransactionModal
          trigger={<TransactionButton>Novo Lançamento</TransactionButton>}
        />
      </NewTransactionContainer>
      <TransactionsContainer>
        {inputValue.list.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              transactionId={transaction.id}
              amount={transaction.amount}
              category={transaction.category}
              date={transaction.date}
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
