import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.paid && transaction.type === 'revenue') {
        acc.revenue += transaction.amount
        acc.balance += transaction.amount
      } else if (transaction.paid) {
        acc.expense += transaction.amount
        acc.balance -= transaction.amount
      }

      acc.sum = acc.revenue + acc.expense
      acc.revenuePercent = acc.revenue / acc.sum
      acc.expensePercent = acc.expense / acc.sum

      return acc
    },
    {
      revenue: 0,
      expense: 0,
      balance: 0,
      sum: 0,
      revenuePercent: 0,
      expensePercent: 0,
      expenseByCategory: [],
    },
  )
  return summary
}
