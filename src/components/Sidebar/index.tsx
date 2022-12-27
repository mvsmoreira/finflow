import { Gauge, Receipt } from 'phosphor-react'
import { Icon } from '../WidgetBar/styles'
import { NavLink } from './NavLink'
import { SidebarContainer } from './styles'

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavLink to="/dashboard" title="Dashboard">
        <Icon as={Gauge} />
      </NavLink>
      <NavLink to="/entries" title="Lançamentos">
        <Icon as={Receipt} />
      </NavLink>
    </SidebarContainer>
  )
}
