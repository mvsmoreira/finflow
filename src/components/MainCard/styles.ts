import styled, { DefaultTheme } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-200']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  padding: 1rem;
`
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.3rem;
  }
`
CardContainer.displayName = 'CardContainer'

interface TextProps {
  fontSize: string
  fontWeight: string
  color?: string
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) =>
    props.color
      ? props.theme[props.color as keyof DefaultTheme]
      : props.theme['gray-800']};
`
Text.displayName = 'Text'

export const Divider = styled.hr`
  border: 1px solid ${(props) => props.theme['gray-300']};
  margin: 1rem;
`
Divider.displayName = 'Divider'

export const ChartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 14rem;
`
ChartContainer.displayName = 'ChartContainer'

export const SideTotals = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 1rem;
  padding: 1rem 0;
  align-items: flex-end;

  & p {
    margin: 0 0.5rem;
  }
`
SideTotals.displayName = 'SideTotals'
