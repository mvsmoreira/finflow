import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
Overlay.displayName = 'Overlay'

export const Content = styled(Dialog.Content)`
  min-width: 26rem;
  border-radius: 8px;
  padding: 3.25rem 2.625rem;
  background: ${(props) => props.theme['gray-200']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    & > label {
      margin-top: 1rem;
      margin-bottom: 0.3rem;
      margin-left: 0.4rem;
      font-weight: 500;
    }

    & input,
    textarea {
      border-radius: 8px;
      border: 2px solid ${(props) => props.theme['gray-300']};
      padding: 0.5rem 1rem;
      outline: none;
      font-size: 1rem;
      line-height: 1.25rem;
      color: ${(props) => props.theme['gray-800']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      &:focus {
        border: 2px solid ${(props) => props.theme.$main};
      }
    }

    & textarea {
      resize: vertical;
    }
  }

  & button[type='submit'] {
    align-self: flex-end;
    background: ${(props) => props.theme.$main};
    color: ${(props) => props.theme['gray-800']};
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 2rem;
    border-radius: 4px;
    margin-top: 1.25rem;
    border: none;
    cursor: pointer;
    transition: filter 0.2s ease-in-out;

    &:disabled {
      background: ${(props) => props.theme['gray-500']};
      color: ${(props) => props.theme['gray-300']};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      filter: brightness(1.1);
    }
  }
`
Content.displayName = 'Content'

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-800']};
`
CloseButton.displayName = 'CloseButton'

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
TransactionType.displayName = 'TransactionType'

interface TransactionTypeButtonProps {
  variant: 'revenue' | 'expense'
}

// eslint-disable-next-line prettier/prettier
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-100']};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  align-items: center;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;

  & svg {
    color: ${(props) =>
      props.variant === 'revenue'
        ? props.theme['green-500']
        : props.theme['red-500']};
  }

  &[data-state='unchecked']:hover {
    transition: background 0.2s ease-in-out;
    border: none;
    background: ${(props) =>
      props.variant === 'revenue'
        ? props.theme['green-200']
        : props.theme['red-200']};
  }

  &[data-state='checked'] {
    transition: background 0.2s ease-in-out;
    border: 2px solid ${(props) => props.theme['gray-200']};
    background: ${(props) =>
      props.variant === 'revenue'
        ? props.theme['green-500']
        : props.theme['red-500']};

    & svg {
      color: ${(props) => props.theme['gray-800']};
    }
  }
`
TransactionTypeButton.displayName = 'TransactionTypeButton'

export const IsPaidContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  gap: 1rem;

  & label {
    all: unset;
    font-weight: 500;
  }

  & button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['gray-500']};
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${(props) => props.theme['gray-100']};
    }

    &[data-state='checked'] {
      border: 2px solid ${(props) => props.theme['gray-200']};
      background: ${(props) => props.theme['green-500']};
    }

    & svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    & svg[data-state='checked'] {
      color: ${(props) => props.theme.white};
    }
  }
`
IsPaidContainer.displayName = 'IsPaidContainer'

export const TwoColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    font-weight: 500;
    margin-top: 1rem;
  }

  & input.rmdp-input {
    padding: 1.1rem 1rem;
  }
`
TwoColumnsContainer.displayName = 'TwoColumnsContainer'
