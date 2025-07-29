"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

export const description = "Requirements coverage pie chart"

const chartData = [
  { category: "IVUS Related Requirements", count: 106, fill: "#0065d3" },
  { category: "Other Avila Requirements", count: 456, fill: "#6b7280" },
]

const chartConfig = {
  count: {
    label: "Requirements",
  },
  ivus: {
    label: "IVUS Related Requirements",
    color: "#0065d3",
  },
  other: {
    label: "Other Avila Requirements",
    color: "#6b7280",
  },
} satisfies ChartConfig

export function RequirementsCoverageChart() {
  const totalRequirements = 562;
  const automatedRequirements = 106;
  const coveragePercentage = ((automatedRequirements / totalRequirements) * 100).toFixed(1);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>TAF Requirements Coverage</CardTitle>
        <CardDescription>Number of Requirements by Type</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie 
              data={chartData} 
              dataKey="count" 
              nameKey="category"
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {coveragePercentage}% of requirements are IVUS related <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          {automatedRequirements} IVUS requirements across 86 IVUS test scripts
        </div>
      </CardFooter>
    </Card>
  )
}
