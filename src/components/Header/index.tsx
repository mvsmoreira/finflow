import { Logo } from "../Logo"
import { Profile } from "../Profile"
import { Search } from "../Search"
import { WidgetBar } from "../WidgetBar"
import { HeaderContainer } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      {/* <WidgetBar /> */}
      <Profile
        name="Vinicius Moreira"
        email="mvs.moreira93@gmail.com"
        src="https://github.com/mvsmoreira.png"
      />
    </HeaderContainer>
  )
}