import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, MinusCircle, PlusCircle, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Icon } from '../WidgetBar/styles'
import {
  CloseButton,
  Content,
  IsPaidContainer,
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
  paid: z.boolean(),
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
        'paid',
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
            <label htmlFor="description">Descrição</label>
            <input {...register('description')} type="text" required />
            <label htmlFor="amount">Valor</label>
            <input
              {...register('amount', { valueAsNumber: true })}
              type="number"
              required
            />
            <label htmlFor="category">Categoria</label>
            <input {...register('category')} type="text" required />
            <IsPaidContainer>
              <label>Lançamento pago?</label>
              <Controller
                control={control}
                name="paid"
                render={({ field }) => {
                  return (
                    <Checkbox.Root
                      onCheckedChange={field.onChange}
                      checked={field.value}
                    >
                      <Checkbox.Indicator asChild>
                        <Icon as={Check} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  )
                }}
              />
            </IsPaidContainer>
            <label htmlFor="observations">Observações</label>
            <textarea {...register('observations')} />
            <button type="submit" disabled={isSubmitting}>
              {isAddMode ? 'Cadastrar' : 'Salvar'}
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
