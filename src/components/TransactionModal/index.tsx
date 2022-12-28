import * as Dialog from '@radix-ui/react-dialog'
import { MinusCircle, PlusCircle, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Icon } from '../WidgetBar/styles'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  observations: z.string().max(140),
  type: z.enum(['revenue', 'expense']),
})

type NewtransactionsFormInputs = z.infer<typeof newTransactionFormSchema>

interface TransactionModalProps {
  state: (state: boolean) => void
}

export const TransactionModal = ({ state }: TransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewtransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const handleCreateNewTransaction = async (
    data: NewtransactionsFormInputs,
  ) => {
    createTransaction(data)
    state(false)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Novo Lançamento</Dialog.Title>

        <CloseButton>
          <Icon as={X} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="revenue" value="revenue">
                    Receita
                    <PlusCircle size={32} />
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="expense" value="expense">
                    Despesa
                    <MinusCircle size={32} />
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <input
            {...register('description')}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register('amount', { valueAsNumber: true })}
            type="number"
            placeholder="Valor"
            required
          />
          <input
            {...register('category')}
            type="text"
            placeholder="Categoria"
            required
          />
          <textarea {...register('observations')} placeholder="Observações" />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
