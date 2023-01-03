import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../libs/axios'

export interface Transaction {
  id: number
  description: string
  type: 'revenue' | 'expense'
  amount: number
  category: string
  observations: string
  paid: boolean
  date: Date
  created_at: string
}

type CreateOrUpdateTransactionProps = Omit<Transaction, 'id' | 'created_at'>

interface TransactionContextProps {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateOrUpdateTransactionProps) => Promise<void>
  deleteTransaction: (id: number) => Promise<void>
  updateTransaction: (
    id: number,
    data: CreateOrUpdateTransactionProps,
  ) => Promise<void>
  setIsPaid: (id: number, isPaid: boolean) => Promise<void>
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
        _sort: 'date',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = async (data: CreateOrUpdateTransactionProps) => {
    const response = await api.post('/transactions', {
      ...data,
      created_at: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
    fetchTransactions()
  }

  const updateTransaction = async (
    id: number,
    data: CreateOrUpdateTransactionProps,
  ) => {
    const response = await api.patch(`/transactions/${id}`, {
      ...data,
    })

    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === id) {
        return (transaction = {
          created_at: transaction.created_at,
          id: transaction.id,
          ...response.data,
        })
      }
      return transaction
    })

    setTransactions(updatedTransactions)
    fetchTransactions()
  }

  const setIsPaid = async (id: number, isPaid: boolean) => {
    const response = await api.patch(`/transactions/${id}`, {
      paid: isPaid,
    })

    const updatedIsPaid = transactions.map((transaction) => {
      if (transaction.id === id) {
        return (transaction = {
          created_at: transaction.created_at,
          id: transaction.id,
          paid: isPaid,
          ...response.data,
        })
      }
      return transaction
    })

    setTransactions(updatedIsPaid)
    fetchTransactions()
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
        updateTransaction,
        setIsPaid,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
