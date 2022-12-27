import styled from 'styled-components'

export const WidgetBarContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1.5rem;
  border-color: ${(props) => props.theme['gray-500']};
`
WidgetBarContainer.displayName = 'WidgetBarContainer'

export const IconContainer = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['gray-300']};
    cursor: pointer;
  }
`
IconContainer.displayName = 'IconContainer'

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-800']};
`
Icon.displayName = 'Icon'
