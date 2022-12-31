import { CheckCircle, X } from 'phosphor-react'
import { TransactionProps } from '..'
import { amountFormatter, dateFormatter } from '../../../utils/formatter'
import { Icon } from '../../WidgetBar/styles'
import { TransactionIcon } from '../TransactionIcon'
import * as Collapsible from '@radix-ui/react-collapsible'

import {
  CloseButton,
  LeftInfo,
  LeftInfoContainer,
  RightInfoBlock,
  TransactionInfoContainer,
} from './styles'

interface TransactionInfoProps {
  transactionProps: TransactionProps
}

export const TransactionInfo = ({ transactionProps }: TransactionInfoProps) => {
  const convertedDate = new Date(transactionProps.date)

  return (
    <Collapsible.Content asChild>
      <TransactionInfoContainer>
        <LeftInfoContainer>
          <LeftInfo>
            <TransactionIcon type={transactionProps.type} />
            <p>{transactionProps.title}</p>
          </LeftInfo>
          <p>{amountFormatter.format(transactionProps.amount)}</p>
          <LeftInfo paid={transactionProps.paid}>
            <Icon
              as={CheckCircle}
              weight={transactionProps.paid ? 'fill' : 'regular'}
            />
            <p>{transactionProps.paid ? 'Efetuado' : 'Não efetuado'}</p>
          </LeftInfo>
        </LeftInfoContainer>
        <RightInfoBlock>
          <p>Categoria</p>
          <hr />
          <p>{transactionProps.category}</p>
        </RightInfoBlock>
        <RightInfoBlock>
          <p>Data</p>
          <hr />
          <p>{dateFormatter.format(convertedDate)}</p>
        </RightInfoBlock>
        <RightInfoBlock>
          <p>Observações</p>
          <hr />
          <p>{transactionProps.observations}</p>
        </RightInfoBlock>
        <CloseButton>
          <Icon as={X} />
        </CloseButton>
      </TransactionInfoContainer>
    </Collapsible.Content>
  )
}
