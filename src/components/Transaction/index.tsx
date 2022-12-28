import { CheckCircle, Info, PencilSimple, TrashSimple } from 'phosphor-react'
import { HTMLAttributes, useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { amountFormatter } from '../../utils/formatter'
import { Icon } from '../WidgetBar/styles'
import {
  InfoBlock,
  MainInfo,
  OptionsBlock,
  TransactionContainer,
} from './styles'
import { TransactionIcon } from './TransactionIcon'

interface TransactionProps extends HTMLAttributes<HTMLButtonElement> {
  transactionId: number
  type: 'revenue' | 'expense'
  title: string
  amount: number
  paid?: boolean
  category: string
  date: string
  observations?: string
}

export const Transaction = (props: TransactionProps) => {
  const { deleteTransaction } = useContext(TransactionsContext)

  return (
    <TransactionContainer>
      <MainInfo>
        <TransactionIcon type={props.type} />
        <p>{props.title}</p>
        <Icon as={Info} />
      </MainInfo>
      <InfoBlock paid={props.paid}>
        <p>{amountFormatter.format(props.amount)}</p>
        <Icon as={CheckCircle} weight={props.paid ? 'fill' : 'regular'} />
      </InfoBlock>
      <OptionsBlock>
        <Icon as={PencilSimple} />
        <Icon
          as={TrashSimple}
          onClick={() => deleteTransaction(props.transactionId)}
        />
      </OptionsBlock>
    </TransactionContainer>
  )
}
