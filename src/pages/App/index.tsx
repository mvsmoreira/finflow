import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { AppContainer } from "./styles"

export const App = () => {
  return (
    <AppContainer>
      <Header />
      <Sidebar />
      <Outlet />
    </AppContainer>
  )
}