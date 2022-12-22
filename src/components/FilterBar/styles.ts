import styled from "styled-components";
import { Icon } from "../WidgetBar/styles";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: auto;
  width: 68rem;
  height: 2.75rem;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 9999px;
  background: ${(props) => props.theme['gray-200']};
  padding: 1.5rem 0.5rem;
  transition: background 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['gray-300']};
  }

  &:focus-within {
    border: 2px solid ${(props) => props.theme['$main']};
    background: ${(props) => props.theme['gray-100']};
  }

  & p {
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 0;
    color: ${(props) => props.theme['gray-800']};
  }
`

FilterContainer.displayName = 'FilterContainer'

export const FilterIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme['gray-800']};
  font-weight: bold;
  margin: 1rem;
`
FilterIcon.displayName = 'FilterIcon'

export const SearchIcon = styled(FilterIcon)`
  margin-left: auto;
`
SearchIcon.displayName = 'SearchIcon'