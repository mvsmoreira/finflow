import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../libs/axios'

interface Transaction {
  id: number
  description: string
  type: 'revenue' | 'expense'
  amount: number
  category: string
  observations: string
  paid?: boolean
  created_at: string
}

type CreateTransactionProps = Omit<Transaction, 'id' | 'created_at'>

interface TransactionContextProps {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionProps) => Promise<void>
  deleteTransaction: (id: number) => Promise<void>
  // patchTransaction: (id: number, field: any) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextProps)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = async (data: CreateTransactionProps) => {
    const response = await api.post('/transactions', {
      ...data,
      created_at: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  const deleteTransaction = async (id: number) => {
    const response = await api.delete(`/transactions/${id}`)

    setTransactions((state) =>
      state.filter((transaction) => transaction.id !== response.data.id),
    )

    fetchTransactions()
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
