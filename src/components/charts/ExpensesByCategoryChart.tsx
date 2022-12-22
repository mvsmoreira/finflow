import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    "id": "Alimentação",
    "label": "Alimentação",
    "value": 0.62,
    "color": "hsl(137, 70%, 50%)"
  },
  {
    "id": "Assinaturas",
    "label": "Assinaturas",
    "value": 0.15,
    "color": "hsl(103, 70%, 50%)"
  },
  {
    "id": "Mercado",
    "label": "Mercado",
    "value": 0.63,
    "color": "hsl(269, 70%, 50%)"
  },
  {
    "id": "Casa",
    "label": "Casa",
    "value": 0.84,
    "color": "hsl(310, 70%, 50%)"
  },
  {
    "id": "Saúde",
    "label": "Saúde",
    "value": 0.34,
    "color": "hsl(85, 70%, 50%)"
  },
  {
    "id": "Lazer",
    "label": "Lazer",
    "value": 0.28,
    "color": "hsl(29, 70%, 50%)"
  }
]

export const ExpensesByCategoryChart = () => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
      valueFormat=" ^-~%"
      sortByValue={true}
      padAngle={5}
      fit={false}
      cornerRadius={4}
      renderWrapper
      activeInnerRadiusOffset={5}
      activeOuterRadiusOffset={8}
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
      arcLabelsRadiusOffset={0.6}
      arcLabelsSkipAngle={25}
      arcLabelsTextColor="black"
      legends={[
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: 50,
          translateY: 0,
          itemsSpacing: 20,
          itemWidth: 100,
          itemHeight: 10,
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
        },
      ]}
    />
  )
}
