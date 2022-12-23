import styled from "styled-components";

interface TransactionIconProps {
  type: 'revenue' | 'expense'
}

export const TransactionIconContainer = styled.div<TransactionIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: ${(props) =>
    props.type === 'revenue'
    ? props.theme['green-500']
    : props.theme['red-500']
  };

  & svg {
    width: 1.25rem;
    height: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
  }
`