import { ElementType } from "react";
import { SummaryCardChart } from "../charts/SummaryCardChart";
import { CardContainer, ChartContainer, Icon, PriceContainer, SideInfoContainer } from "./styles";

interface SummaryCardProps {
  icon: ElementType,
  title: string
}

export const SummaryCard = ({ icon, title }: SummaryCardProps) => {
  return (
    <CardContainer>
    <ChartContainer>
      <p>{title}</p>
      <SummaryCardChart />
    </ChartContainer>
    <SideInfoContainer>
      <Icon as={icon} />
      <PriceContainer>
        <p>R$</p>
        <span>2.500,00</span>
      </PriceContainer>
    </SideInfoContainer>
  </CardContainer>
  )
}