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
import { ReactElement, useContext, useEffect, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  observations: z.string().max(140),
  type: z.enum(['revenue', 'expense']),
})

type NewtransactionsFormInputs = z.infer<typeof newTransactionFormSchema>
type EditFields = keyof NewtransactionsFormInputs

interface TransactionModalProps {
  id?: number
  trigger: ReactElement
}

export const TransactionModal = ({ id, trigger }: TransactionModalProps) => {
  const isAddMode = id === undefined

  const [open, setOpen] = useState(false)

  const { createTransaction, transactions, updateTransaction } =
    useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
  } = useForm<NewtransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  useEffect(() => {
    if (!isAddMode) {
      const transaction = transactions.find(
        (transaction) => transaction.id === id,
      )
      const fields: EditFields[] = [
        'amount',
        'category',
        'description',
        'observations',
        'type',
      ]
      fields.forEach((field) => setValue(field, transaction![field]))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCreateNewTransaction = async (
    data: NewtransactionsFormInputs,
  ) => {
    if (isAddMode) {
      createTransaction(data)
      reset()
    } else {
      updateTransaction(id, data)
    }
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>
            {isAddMode ? 'Novo Lançamento' : 'Editar Lançamento'}
          </Dialog.Title>

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
              {isAddMode ? 'Cadastrar' : 'Salvar'}
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
