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
  TwoColumnsContainer,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactElement, useContext, useEffect, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ptBR from 'date-fns/locale/pt-BR'

registerLocale('pt-BR', ptBR)

const newTransactionFormSchema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  observations: z.string().max(140),
  type: z.enum(['revenue', 'expense']),
  paid: z.boolean().default(false),
  date: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
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
    formState: { isSubmitting, errors },
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
        'date',
      ]
      fields.forEach((field) => setValue(field, transaction![field]))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTransaction = async (data: NewtransactionsFormInputs) => {
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
        <Overlay onClick={() => (isAddMode ? reset() : null)} />

        <Content>
          <Dialog.Title>
            {isAddMode ? 'Novo Lançamento' : 'Editar Lançamento'}
          </Dialog.Title>

          <CloseButton onClick={() => (isAddMode ? reset() : null)}>
            <Icon as={X} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleTransaction)}>
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
            {errors.description && <p>{errors.description.message}</p>}
            <label htmlFor="amount">Valor</label>
            <input
              {...register('amount', { valueAsNumber: true })}
              type="number"
              required
            />
            <TwoColumnsContainer>
              <div>
                <label htmlFor="category">Categoria</label>
                <input {...register('category')} type="text" required />
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => {
                    return (
                      <>
                        <DatePicker
                          name="date"
                          isClearable
                          locale="pt-BR"
                          dateFormat="dd/MM/yyyy"
                          selected={
                            isAddMode ? field.value : new Date(field.value)
                          }
                          onChange={(date) => field.onChange(date)}
                        />
                        {errors.date && errors.date?.message}
                      </>
                    )
                  }}
                />
              </div>
            </TwoColumnsContainer>
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
              {errors.paid && <p>{errors.paid.message}</p>}
            </IsPaidContainer>
            <label htmlFor="observations">Observações</label>
            <textarea {...register('observations')} />
            {/* <Dialog.Close asChild onClick={() => reset()}>
              <button type="button">Cancelar</button>
            </Dialog.Close> */}
            <button type="submit" disabled={isSubmitting}>
              {isAddMode ? 'Cadastrar' : 'Salvar'}
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
