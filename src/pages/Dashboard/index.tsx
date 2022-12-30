import { EyeSlash, MinusCircle, PlusCircle } from 'phosphor-react'
import { BalanceChart } from '../../components/charts/BalanceChart'
import { ExpensesByCategoryChart } from '../../components/charts/ExpensesByCategoryChart'
import { MainCard } from '../../components/MainCard'
import { SummaryCard } from '../../components/SummaryCard'
import { useSummary } from '../../hooks/useSummary'
import { amountFormatter } from '../../utils/formatter'
import { MainCardContainer, SummaryCardContainer } from './styles'

export const Dashboard = () => {
  const summary = useSummary()
  return (
    <>
      <SummaryCardContainer>
        <SummaryCard
          icon={EyeSlash}
          title="Saldo Geral"
          amount={amountFormatter.format(summary.balance)}
        />
        <SummaryCard
          icon={PlusCircle}
          title="Receitas"
          amount={amountFormatter.format(summary.revenue)}
        />
        <SummaryCard
          icon={MinusCircle}
          title="Despesas"
          amount={amountFormatter.format(summary.expense)}
        />
      </SummaryCardContainer>
      <MainCardContainer>
        <MainCard
          title="Balanço mensal"
          amount={amountFormatter.format(summary.balance)}
          totalRevenues={amountFormatter.format(summary.revenue)}
          totalExpenses={amountFormatter.format(summary.expense)}
          chart={
            <BalanceChart
              revenuePercent={summary.revenuePercent}
              expensePercent={summary.expensePercent}
            />
          }
          sideTotals
        />
        <MainCard
          title="Gastos por categoria"
          chart={<ExpensesByCategoryChart />}
        />
      </MainCardContainer>
    </>
  )
}
