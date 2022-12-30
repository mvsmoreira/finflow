import { Info } from 'phosphor-react'
import { ReactElement } from 'react'
import { Icon } from '../SummaryCard/styles'
import {
  CardContainer,
  ChartContainer,
  Divider,
  InfoContainer,
  SideTotals,
  Text,
} from './styles'

interface MainCardProps {
  title: string
  amount?: string
  chart?: ReactElement
  sideTotals?: boolean
  totalRevenues?: string
  totalExpenses?: string
}

export const MainCard = ({
  amount,
  title,
  chart,
  sideTotals,
  totalExpenses,
  totalRevenues,
}: MainCardProps) => {
  return (
    <CardContainer>
      <InfoContainer>
        <div>
          <Text fontSize="1.3rem" fontWeight="500">
            {title}
          </Text>
          <Text fontSize="2rem" fontWeight="500">
            {amount}
          </Text>
          {amount && (
            <Text fontSize="0.8rem" fontWeight="400" color="gray-500">
              Total
            </Text>
          )}
        </div>
        <Icon as={Info} />
      </InfoContainer>
      <Divider />
      <ChartContainer>
        {chart}
        {sideTotals && (
          <SideTotals>
            <Text fontWeight="500" fontSize="1.5rem" color="green-500">
              {totalRevenues}
            </Text>
            <Text fontWeight="500" fontSize="1.5rem" color="red-500">
              {totalExpenses}
            </Text>
          </SideTotals>
        )}
      </ChartContainer>
    </CardContainer>
  )
}
