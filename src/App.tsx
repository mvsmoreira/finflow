import { ThemeProvider } from "styled-components"
import { Dashboard } from "./pages/Dashboard"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  )
}