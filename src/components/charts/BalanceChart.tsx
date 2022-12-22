import { ResponsivePie } from "@nivo/pie"

const data = [
  {
    "id": "Receitas",
    "label": "Receitas",
    "value": 0.75,
    "color": "hsl(143, 55%, 62%)",
  },
  {
    "id": "Despesas",
    "label": "Despesas",
    "value": 0.25,
    "color": "hsl(0, 87%, 67%)",
  },
]

export const BalanceChart = () => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 0, bottom: 80, left: 0 }}
      valueFormat=" ^-.2%"
      startAngle={-90}
      endAngle={90}
      sortByValue={true}
      innerRadius={0.5}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ datum: 'data.color' }}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.2
          ]
        ]
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#000000"
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#718096',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#1A202C'
              }
            }
          ]
        }
      ]}
    />
  )
}
