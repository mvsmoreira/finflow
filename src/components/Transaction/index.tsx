import * as Collapsible from '@radix-ui/react-collapsible'
import { CheckCircle, Info, PencilSimple, TrashSimple } from 'phosphor-react'
import { HTMLAttributes, useContext, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { amountFormatter, dateFormatter } from '../../utils/formatter'
import { TransactionModal } from '../TransactionModal'
import { Icon } from '../WidgetBar/styles'
import {
  InfoBlock,
  MainInfo,
  OptionsBlock,
  TransactionContainer,
} from './styles'
import { TransactionIcon } from './TransactionIcon'
import { TransactionInfo } from './TransactionInfo'

export interface TransactionProps extends HTMLAttributes<HTMLButtonElement> {
  transactionId: number
  type: 'revenue' | 'expense'
  title: string
  amount: number
  paid: boolean
  category: string
  date: Date
  observations?: string
}

export const Transaction = (props: TransactionProps) => {
  const { deleteTransaction, setIsPaid } = useContext(TransactionsContext)
  const [open, setOpen] = useState(false)

  const dateConverter = new Date(props.date)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <TransactionContainer transactionDate={dateConverter} isPaid={props.paid}>
        <MainInfo>
          <TransactionIcon type={props.type} />
          <p>{props.title}</p>
          <Collapsible.Trigger asChild>
            <Icon as={Info} />
          </Collapsible.Trigger>
        </MainInfo>
        <InfoBlock paid={props.paid}>
          <p>{amountFormatter.format(props.amount)}</p>
          <Icon
            as={CheckCircle}
            weight={props.paid ? 'fill' : 'regular'}
            onClick={() => setIsPaid(props.transactionId, !props.paid)}
          />
        </InfoBlock>
        <OptionsBlock>
          <p>{dateFormatter.format(dateConverter)}</p>
          <TransactionModal
            trigger={<Icon as={PencilSimple} />}
            id={props.transactionId}
          />
          <Icon
            as={TrashSimple}
            onClick={() => deleteTransaction(props.transactionId)}
          />
        </OptionsBlock>
      </TransactionContainer>
      <TransactionInfo transactionProps={props} />
    </Collapsible.Root>
  )
}
