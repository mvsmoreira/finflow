import { ChangeEvent, forwardRef, ForwardRefRenderFunction } from 'react'
import { Icon, Input, SearchContainer } from './styles'

interface SearchProps {
  type: string
  placeholder?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBase: ForwardRefRenderFunction<HTMLInputElement, SearchProps> = (
  { type, placeholder, value, onChange, ...rest },
  ref,
) => {
  return (
    <SearchContainer>
      <Icon />
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        {...rest}
      />
    </SearchContainer>
  )
}
export const Search = forwardRef(SearchBase)
