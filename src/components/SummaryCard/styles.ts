import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-width: 1px;
  border-radius: 8px;
  padding: 1rem;
  min-width: 22rem;
  min-height: 8.75rem;
  background: ${(props) => props.theme['gray-200']};
`
CardContainer.displayName = 'CardContainer'

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 10rem;
  min-height: 5rem;
  height: 5rem;

  & p {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`
ChartContainer.displayName = 'ChartContainer'

export const SideInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
  margin-left: 1rem;
`
SideInfoContainer.displayName = 'SideInfoContainer'

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  padding: 0.2rem;
  transition: background 0.2s ease-in-out;
  color: ${(props) => props.theme['gray-500']};

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
