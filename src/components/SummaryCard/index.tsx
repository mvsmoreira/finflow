import { ElementType } from 'react'
import { amountFormatter } from '../../utils/formatter'
import { CardContainer, Icon } from './styles'

interface SummaryCardProps {
  icon: ElementType
  title: string
  amount: number
  type?: 'revenue' | 'expense'
}

export const SummaryCard = ({
  icon,
  title,
  amount,
  type,
}: SummaryCardProps) => {
  return (
    <CardContainer>
      <header>
        <span>{title}</span>
        <Icon as={icon} variant={type} />
      </header>
      <strong>{amountFormatter.format(amount)}</strong>
    </CardContainer>
  )
}
