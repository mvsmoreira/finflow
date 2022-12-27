import { MagnifyingGlass } from "phosphor-react";
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 40rem;
  height: 2.75rem;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 9999px;
  background-color: ${(props) => props.theme['gray-200']};
  padding: 0.5rem 1.5rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['gray-300']};
  }

  &:focus-within {
    border-color: ${(props) => props.theme['$main']};
    background-color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 768px) {
    display: none;
  }
`
SearchContainer.displayName = 'SearchContainer'

export const Icon = styled(MagnifyingGlass)`
  width: 1.5rem;
  height: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-500']};
`
Icon.displayName = 'Icon'

export const Input = styled.input`
  all: unset;
  color: ${(props) => props.theme['gray-800']};
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
Input.displayName = 'Input'