import { Moon, Notification } from 'phosphor-react'
import { Icon, IconContainer, WidgetBarContainer } from './styles'

export const WidgetBar = () => {
  return (
    <WidgetBarContainer>
      <IconContainer>
        <Icon as={Notification} />
      </IconContainer>
      <IconContainer>
        <Icon as={Moon} />
      </IconContainer>
    </WidgetBarContainer>
  )
}
