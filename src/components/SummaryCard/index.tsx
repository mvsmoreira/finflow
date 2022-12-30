import { ElementType } from 'react'
import { SummaryCardChart } from '../charts/SummaryCardChart'
import {
  CardContainer,
  ChartContainer,
  Icon,
  PriceContainer,
  SideInfoContainer,
} from './styles'

interface SummaryCardProps {
  icon: ElementType
  title: string
  amount: string
}

export const SummaryCard = ({ icon, title, amount }: SummaryCardProps) => {
  return (
    <CardContainer>
      <ChartContainer>
        <p>{title}</p>
        <SummaryCardChart />
      </ChartContainer>
      <SideInfoContainer>
        <Icon as={icon} />
        <PriceContainer>
          <span>{amount}</span>
        </PriceContainer>
      </SideInfoContainer>
    </CardContainer>
  )
}
