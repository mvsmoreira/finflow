import styled from 'styled-components'
import * as Collapsible from '@radix-ui/react-collapsible'

export const TransactionInfoContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 8px;
  margin: 0.5rem 2rem;
  padding: 1.5rem 2rem;
  gap: 1.5rem;
  overflow: hidden;
`
TransactionInfoContainer.displayName = 'TransactionInfoContainer'

export const LeftInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: auto;

  & p {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0.5rem;
    color: ${(props) => props.theme['gray-800']};
  }
`
LeftInfoContainer.displayName = 'LeftInfoContainer'

interface LeftInfoProps {
  paid?: boolean
}

export const LeftInfo = styled.div<LeftInfoProps>`
  display: flex;
  align-items: center;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => (props.paid ? props.theme['green-500'] : '')};
  }
`
LeftInfo.displayName = 'LeftInfo'

export const RightInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 8rem;

  & hr {
    border: 1px solid ${(props) => props.theme['gray-500']};
  }

  & p {
    font-size: 0.9rem;
    max-width: 15rem;
    line-clamp: 4;
  }
`

export const CloseButton = styled(Collapsible.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['gray-200']};
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
