import { CheckCircle, CopySimple, Info, PencilSimple, TrashSimple } from "phosphor-react"
import { Icon } from "../WidgetBar/styles"
import { InfoBlock, MainInfo, OptionsBlock, TransactionContainer } from "./styles"
import { TransactionIcon } from "./TransactionIcon"

interface TransactionProps {
  type: 'revenue' | 'expense',
  title: string,
  amount: string,
  paid: boolean,
  category: string,
  date: string,
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
        <p>{props.amount}</p>
        <Icon as={CheckCircle} />
      </InfoBlock>
      <OptionsBlock>
        <Icon as={PencilSimple} />
        <Icon as={CopySimple} />
        <Icon as={TrashSimple} />
      </OptionsBlock>

    </TransactionContainer>
  )
}