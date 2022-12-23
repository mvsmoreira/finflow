import { ButtonHTMLAttributes } from "react"
import { TransactionButton } from "./styles"

interface NewTransactionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const NewTransactionButton = (props: NewTransactionButtonProps) => {
  return (
    <TransactionButton {...props}>
      Novo Lançamento
    </TransactionButton>
  )
}