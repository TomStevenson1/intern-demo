"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

export const description = "AIKEA Model Training Progress - Dice Coefficient Over Epochs"

const chartData = [
  { epoch: 0, training: 0.5269, validation: 0.1692 },
  { epoch: 5, training: 0.8999, validation: 0.8765 },
  { epoch: 10, training: 0.9214, validation: 0.8764 },
  { epoch: 15, training: 0.9363, validation: 0.9017 },
  { epoch: 20, training: 0.9426, validation: 0.8964 },
  { epoch: 25, training: 0.9465, validation: 0.9046 },
  { epoch: 30, training: 0.9514, validation: 0.9010 },
  { epoch: 35, training: 0.9510, validation: 0.9195 },
  { epoch: 40, training: 0.9551, validation: 0.9220 },
  { epoch: 45, training: 0.9561, validation: 0.9315 },
  { epoch: 50, training: 0.9567, validation: 0.9356 },
  { epoch: 55, training: 0.9579, validation: 0.9324 },
  { epoch: 60, training: 0.9583, validation: 0.9365 },
  { epoch: 65, training: 0.9593, validation: 0.9332 },
  { epoch: 70, training: 0.9597, validation: 0.9342 },
  { epoch: 75, training: 0.9608, validation: 0.9358 },
  { epoch: 80, training: 0.9614, validation: 0.9346 },
  { epoch: 85, training: 0.9619, validation: 0.9397 },
  { epoch: 90, training: 0.9610, validation: 0.9382 },
  { epoch: 95, training: 0.9618, validation: 0.9368 },
  { epoch: 99, training: 0.9625, validation: 0.9357 }
]

const chartConfig = {
  training: {
    label: "Training Dice Score",
    color: "#0065d3",
  },
  validation: {
    label: "Validation Dice Score", 
    color: "#374151",
  },
} satisfies ChartConfig

export function AikeaModelChart() {
  return (
    <ChartContainer config={chartConfig} className="aspect-[4/3]">
      <LineChart
        accessibilityLayer
        data={chartData}
        height={300}
        margin={{
          left: 20,
          right: 20,
          top: 10,
          bottom: 40,
        }}
      >
        <CartesianGrid vertical={false} />
        <Legend
          verticalAlign="top"
          height={36}
          iconType="line"
          wrapperStyle={{ fontSize: '0.9rem', marginBottom: 8 }}
        />
        <XAxis
          dataKey="epoch"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.toString()}
          label={{ value: 'Epoch', position: 'insideBottom', offset: -10 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          domain={[0, 1]}
          tickFormatter={(value) => value.toFixed(2)}
          label={{ value: 'Dice Score', angle: -90, position: 'insideLeft' }}
        />
        <ChartTooltip 
          cursor={false} 
          content={<ChartTooltipContent 
            formatter={(value, name) => [
              typeof value === 'number' ? value.toFixed(4) : value,
              name
            ]}
            labelFormatter={(label) => `Epoch ${label}`}
          />} 
        />
        <Line
          dataKey="training"
          type="monotone"
          stroke="#0065d3"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
        />
        <Line
          dataKey="validation"
          type="monotone"
          stroke="#374151"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ChartContainer>
  )
}
