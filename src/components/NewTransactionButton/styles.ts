import styled from "styled-components";

export const TransactionButton = styled.button`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme['$main']};
  border: none;
  border-radius: 9999px;
  transition: filter 0.2s ease-in-out;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-800']};

  &:hover {
    filter: brightness(0.9);
  }
`
TransactionButton.displayName = 'TransactionButton'