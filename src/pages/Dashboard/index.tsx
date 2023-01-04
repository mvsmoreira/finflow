import { EyeSlash, MinusCircle, PlusCircle } from 'phosphor-react'
import { BalanceChart } from '../../components/charts/BalanceChart'
import { ExpensesByCategoryChart } from '../../components/charts/ExpensesByCategoryChart'
import { MainCard } from '../../components/MainCard'
import { SummaryCard } from '../../components/SummaryCard'
import { useSummary } from '../../hooks/useSummary'
import { MainCardContainer, SummaryCardContainer } from './styles'

export const Dashboard = () => {
  const summary = useSummary()
  return (
    <>
      <SummaryCardContainer>
        <SummaryCard
          icon={EyeSlash}
          title="Saldo Geral"
          amount={summary.balance}
        />
        <SummaryCard
          icon={PlusCircle}
          title="Receitas"
          amount={summary.revenue}
          type="revenue"
        />
        <SummaryCard
          icon={MinusCircle}
          title="Despesas"
          amount={summary.expense}
          type="expense"
        />
      </SummaryCardContainer>
      <MainCardContainer>
        <MainCard
          title="Balanço mensal"
          amount={summary.balance}
          totalRevenues={summary.revenue}
          totalExpenses={summary.expense}
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
