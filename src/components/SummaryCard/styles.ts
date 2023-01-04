import styled from 'styled-components'

export const CardContainer = styled.div`
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  padding: 1.5rem;
  background: ${(props) => props.theme['gray-200']};

  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & strong {
    display: block;
    margin-top: 1rem;
    font-size: 1.8rem;
  }
`
CardContainer.displayName = 'CardContainer'

interface iconProps {
  variant?: 'revenue' | 'expense'
}

export const Icon = styled.div<iconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  padding: 0.3rem;
  transition: background 0.2s ease-in-out;
  color: ${(props) => {
    if (props.variant === 'revenue') {
      return props.theme['green-500']
    } else if (props.variant === 'expense') {
      return props.theme['red-500']
    } else {
      return props.theme['gray-500']
    }
  }};

  &:hover {
    background: ${(props) => props.theme['gray-300']};
    cursor: pointer;
  }
`
Icon.displayName = 'Icon'

export const PriceContainer = styled.span`
  display: flex;
  align-items: baseline;
  font-weight: 700;

  & p {
    font-size: 1rem;
    padding-right: 0.3rem;
  }

  & span {
    font-weight: inherit;
    font-size: 1.3rem;
    text-align: right;
  }
`
PriceContainer.displayName = 'PriceContainer'
