import { useRef, useState } from "react"
import { Icon, Input, SearchContainer } from "./styles"

export const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  return (
    <SearchContainer>
      <Icon />
      <Input
        type="search"
        placeholder="Buscar lançamentos"
        ref={searchInputRef}
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
    </SearchContainer>
  )
}