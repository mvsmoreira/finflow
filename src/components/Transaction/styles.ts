import styled from 'styled-components'
import { compareDesc } from 'date-fns'

interface TransactionContainerProps {
  transactionDate: string
  isPaid: boolean
}

export const TransactionContainer = styled.div<TransactionContainerProps>`
  display: flex;
  align-items: center;
  padding: 1rem 2.5rem;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 4px;
  background: ${(props) => {
    if (
      compareDesc(new Date(Date.now()), new Date(props.transactionDate)) ===
        -1 &&
      !props.isPaid
    ) {
      return 'rgba(245, 101, 101, 0.2)'
    }
  }};
  &:hover {
    background: ${(props) => props.theme['gray-100']};
  }
`
TransactionContainer.displayName = 'TransactionContainer'

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 24rem;

  & p {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-800']};
  }

  & > svg {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    color: ${(props) => props.theme.$secondary};
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${(props) => props.theme['gray-300']};
    }
  }
`
MainInfo.displayName = 'MainInfo'

interface InfoBlockProps {
  paid?: boolean
}

export const InfoBlock = styled.div<InfoBlockProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-left: auto;

  & p {
    text-align: end;
    font-size: 1.3rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-800']};
  }

  & > svg {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    color: ${(props) =>
      props.paid ? props.theme['green-500'] : props.theme.$secondary};
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${(props) => props.theme['gray-300']};
    }
  }
`
InfoBlock.displayName = 'InfoBlock'

export const OptionsBlock = styled(InfoBlock)`
  margin-left: 5rem;

  & p {
    font-size: 1.2rem;
    margin-right: 2rem;
  }
`
OptionsBlock.displayName = 'OptionsBlock'
