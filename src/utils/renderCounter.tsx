import { useRef } from 'react'

export const Counter = ({ title = '' }) => {
  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1
  return (
    <span>
      Renders: {renderCounter.current}, {title}
    </span>
  )
}
