import { CheckCircle, Info, PencilSimple, TrashSimple } from 'phosphor-react'
import { amountFormatter } from '../../utils/formatter'
import { Icon } from '../WidgetBar/styles'
import {
  InfoBlock,
  MainInfo,
  OptionsBlock,
  TransactionContainer,
} from './styles'
import { TransactionIcon } from './TransactionIcon'

interface TransactionProps {
  type: 'revenue' | 'expense'
  title: string
  amount: number
  paid?: boolean
  category: string
  date: string
  observations?: string
}

export const Transaction = (props: TransactionProps) => {
  return (
    <TransactionContainer>
      <MainInfo>
        <TransactionIcon type={props.type} />
        <p>{props.title}</p>
        <Icon as={Info} />
      </MainInfo>
      <InfoBlock>
        <p>{amountFormatter.format(props.amount)}</p>
        <Icon as={CheckCircle} />
      </InfoBlock>
      <OptionsBlock>
        <Icon as={PencilSimple} />
        <Icon as={TrashSimple} />
      </OptionsBlock>
    </TransactionContainer>
  )
}
