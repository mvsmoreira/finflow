import { FunnelSimple, MagnifyingGlass } from 'phosphor-react'
import { FilterContainer, FilterIcon, SearchIcon } from './styles'

export const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterIcon as={FunnelSimple} />
      <p>Filtrar por...</p>
      <SearchIcon as={MagnifyingGlass} />
    </FilterContainer>
  )
}
