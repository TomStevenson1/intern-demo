"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

export const description = "Test coverage line chart showing CLW and PLW coverage over builds"

const chartData = [
  { build: "6.1.0-beta.1123", clw: 337, plw: 35, target: 1068 },
  { build: "6.1.0-beta.1182", clw: 710, plw: 34, target: 1068 },
  { build: "6.1.0-beta.1187", clw: 698, plw: 72, target: 1068 },
  { build: "6.1.0-beta.1192", clw: 384, plw: 392, target: 1068 },
  { build: "6.1.0-beta.1208", clw: 473, plw: 442, target: 1068 },
  { build: "6.1.0-beta.1219", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1257", clw: 338, plw: 597, target: 1068 },
  { build: "6.1.0-beta.1267", clw: 1068, plw: 452, target: 1068 },
  { build: "6.1.0-beta.1281", clw: 1068, plw: 768, target: 1068 },
  { build: "6.1.0-beta.1291", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1291SD", clw: 1068, plw: 836, target: 1068 },
  { build: "6.1.0-beta.1304BLR", clw: 1068, plw: 672, target: 1068 },
  { build: "6.1.0-beta.1304SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1320BLR", clw: 1068, plw: 288, target: 1068 },
  { build: "6.1.0-beta.1333SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1333BLR", clw: 576, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1333SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1345SD", clw: 768, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1345BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1359SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1359SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1359BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1372BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1359SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1372SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1393BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1393SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1402SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1415SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1417SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1429SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1402BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1429BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1436SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1436BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1444SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1472SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1472BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1475SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1436SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1492SD", clw: 1012, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1509BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1509BLR", clw: 1068, plw: 208, target: 1068 },
  { build: "6.1.0-beta.1515BLR", clw: 12, plw: 72, target: 1068 },
  { build: "6.1.0-beta.1530BLR", clw: 1068, plw: 83, target: 1068 },
  { build: "6.1.0-beta.1530SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1532BLR", clw: 26, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1532SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1548SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1548BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1567BLR", clw: 1068, plw: 236, target: 1068 },
  { build: "6.1.0-beta.1567SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1576BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1576SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1584BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1584SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1612SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.1.0-beta.1576BLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.0.1.BuildDSD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.0.1-BuildDBLR", clw: 1068, plw: 191, target: 1068 },
  { build: "6.1.0-beta.1625SD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.0.4-BuildESD", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.0.4-BuildEBLR", clw: 1068, plw: 1068, target: 1068 },
  { build: "6.0.4-BuildEBLR", clw: 1068, plw: 1068, target: 1068 },
]

const chartConfig = {
  clw: {
    label: "CLW Coverage",
    color: "#0065d3",
  },
  plw: {
    label: "PLW Coverage", 
    color: "#374151",
  },
  target: {
    label: "Target Coverage",
    color: "#6b7280",
  },
} satisfies ChartConfig

export function TestCoverageLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Avila Reliability Status (Builds vs. Successful Reliability Runs) </CardTitle>
        <CardDescription>CLW and PLW TAF reliability test runs across builds</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            height={540}
            margin={{
              left: 20,
              right: 20,
              top: 10,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} />
            <Legend
              verticalAlign="top"
              height={48}
              iconType="line"
              wrapperStyle={{ fontSize: '1rem', marginBottom: 12 }}
            />
            <XAxis
              dataKey="build"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tickFormatter={(value) => value}
              angle={-45}
              dy={16}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 1200]}
              tickFormatter={(value) => value.toString()}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="target"
              type="monotone"
              stroke="#6b7280"
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
            />
            <Line
              dataKey="clw"
              type="monotone"
              stroke="#0065d3"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="plw"
              type="monotone"
              stroke="#374151"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Reliability testing improving over time <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing CLW and PLW coverage progression across release candidates
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
