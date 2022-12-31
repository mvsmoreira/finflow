import * as Collapsible from '@radix-ui/react-collapsible'
import { CheckCircle, Info, PencilSimple, TrashSimple } from 'phosphor-react'
import { HTMLAttributes, useContext, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { amountFormatter } from '../../utils/formatter'
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
  date: string
  observations?: string
}

export const Transaction = (props: TransactionProps) => {
  const { deleteTransaction } = useContext(TransactionsContext)
  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <TransactionContainer>
        <MainInfo>
          <TransactionIcon type={props.type} />
          <p>{props.title}</p>
          <Collapsible.Trigger asChild>
            <Icon as={Info} />
          </Collapsible.Trigger>
        </MainInfo>
        <InfoBlock paid={props.paid}>
          <p>{amountFormatter.format(props.amount)}</p>
          <Icon as={CheckCircle} weight={props.paid ? 'fill' : 'regular'} />
        </InfoBlock>
        <OptionsBlock>
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
