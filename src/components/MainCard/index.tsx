import { Info } from "phosphor-react"
import { ReactElement } from "react"
import { Icon } from "../SummaryCard/styles"
import { CardContainer, ChartContainer, Divider, InfoContainer, SideTotals, Text } from "./styles"

interface MainCardProps {
  title: string,
  amount: number,
  chart?: ReactElement
  sideTotals?: boolean
}

export const MainCard = ({amount, title, chart, sideTotals}: MainCardProps) => {
  return (
    <CardContainer>
      <InfoContainer>
        <div>
          <Text fontSize="1.3rem" fontWeight="500">{title}</Text>
          <Text fontSize="2rem" fontWeight="500">{amount}</Text>
          <Text fontSize="0.8rem" fontWeight="400" color="gray-500">Total</Text>
        </div>
        <Icon as={Info} />
      </InfoContainer>
      <Divider />
      <ChartContainer>
        {chart}
        {sideTotals && (
          <SideTotals>
            <Text fontWeight="500" fontSize="1.5rem" color="green-500">R$ 3.541,00</Text>
            <Text fontWeight="500" fontSize="1.5rem" color="red-500">R$ 1.250,00</Text>
          </SideTotals>
        )}
      </ChartContainer>
    </CardContainer>
  )
}