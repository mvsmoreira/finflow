import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "japan",
    "color": "hsl(305, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 15
      },
      {
        "x": "helicopter",
        "y": 100
      },
      {
        "x": "boat",
        "y": 108
      },
      {
        "x": "train",
        "y": 143
      },
      {
        "x": "subway",
        "y": 76
      },
      {
        "x": "bus",
        "y": 114
      },
    ]
  },

]
export const SummaryCardChart = () => {
  return (
    <ResponsiveLine
    data={data}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 0,
        max: 150,
        stacked: true,
        reverse: false
    }}
    yFormat=" >-.2f"
    curve="cardinal"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridX={false}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    areaBlendMode="multiply"
    isInteractive={false}
    enableCrosshair={false}
    legends={[]}
/>
  )
}
