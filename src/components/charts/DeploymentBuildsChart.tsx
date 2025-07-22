"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A multiple bar chart for deployment builds"

const chartData = [
  { iteration: "25.13", timesSixteen: 15, builds: 1 },
  { iteration: "25.15", timesSixteen: 15, builds: 1 },
  { iteration: "25.17", timesSixteen: 75, builds: 5 },
  { iteration: "25.19", timesSixteen: 30, builds: 2 },
  { iteration: "25.21", timesSixteen: 15, builds: 1 },
  { iteration: "25.2", timesSixteen: 30, builds: 2 },
  { iteration: "25.25", timesSixteen: 45, builds: 3 },
  { iteration: "25.27", timesSixteen: 60, builds: 4 },
]

const chartConfig = {
  timesSixteen: {
    label: "Build Time (15x)",
    color: "#3b82f6", // blue
  },
  builds: {
    label: "Number of Builds",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function DeploymentBuildsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployment Builds - Performance Metrics</CardTitle>
        <CardDescription>Iteration 25.13 - 25.27</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="iteration"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="timesSixteen" fill="#3b82f6" radius={4} />
            <Bar dataKey="builds" fill="var(--color-builds)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Deployment efficiency improving over iterations <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing build metrics and scaled time comparison across deployment iterations
        </div>
      </CardFooter>
    </Card>
  )
}
