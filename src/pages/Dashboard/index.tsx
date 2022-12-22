import { EyeSlash, MinusCircle, PlusCircle } from "phosphor-react"
import { BalanceChart } from "../../components/charts/BalanceChart"
import { ExpensesByCategoryChart } from "../../components/charts/ExpensesByCategoryChart"
import { MainCard } from "../../components/MainCard"
import { SummaryCard } from "../../components/SummaryCard"
import { MainCardContainer, SummaryCardContainer } from "./styles"

export const Dashboard = () => {
  return (
    <>
      <SummaryCardContainer>
        <SummaryCard icon={EyeSlash} title='Saldo Geral' />
        <SummaryCard icon={PlusCircle} title='Receitas' />
        <SummaryCard icon={MinusCircle} title='Despesas' />
      </SummaryCardContainer >
      <MainCardContainer>
        <MainCard title="Balanço mensal" amount={5450.00} chart={<BalanceChart />} sideTotals />
        <MainCard title="Balanço mensal" amount={5450.00} chart={<ExpensesByCategoryChart />} />
      </MainCardContainer>
    </>
  )
}