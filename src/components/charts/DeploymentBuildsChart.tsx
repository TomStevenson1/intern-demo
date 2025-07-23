"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  { iteration: "2513", timesSixteen: 15, builds: 1 },
  { iteration: "2515", timesSixteen: 15, builds: 1 },
  { iteration: "2517", timesSixteen: 75, builds: 5 },
  { iteration: "2519", timesSixteen: 30, builds: 2 },
  { iteration: "2521", timesSixteen: 15, builds: 1 },
  { iteration: "25.2", timesSixteen: 30, builds: 2 },
  { iteration: "2525", timesSixteen: 45, builds: 3 },
  { iteration: "2527", timesSixteen: 60, builds: 4 },
]

const chartConfig = {
  timesSixteen: {
    label: "Build Time (manual)",
    color: "#0065d3",
  },
  builds: {
    label: "Build Time (automated)",
    color: "#374151",
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
        <ChartContainer config={chartConfig} className="aspect-[3/1]">
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
            <Bar dataKey="timesSixteen" fill="#0065d3" radius={4} />
            <Bar dataKey="builds" fill="#374151" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Deployment efficiency significantly improved using automated builds (estimated) <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing build time metrics for manual and automated builds across deployment iterations
        </div>
      </CardFooter>
    </Card>
  )
}
