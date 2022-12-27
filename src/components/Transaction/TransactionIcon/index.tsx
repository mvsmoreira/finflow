import { MinusCircle, PlusCircle } from 'phosphor-react'
import { Icon } from '../../WidgetBar/styles'
import { TransactionIconContainer } from './styles'

interface TransactionIconProps {
  type: 'revenue' | 'expense'
}

export const TransactionIcon = ({ type }: TransactionIconProps) => {
  return (
    <TransactionIconContainer type={type}>
      <Icon as={type === 'revenue' ? PlusCircle : MinusCircle} />
    </TransactionIconContainer>
  )
}
