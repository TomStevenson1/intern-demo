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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

const chartData = [
  { 
    testType: "Automated (TAF)", 
    minTime: 1, 
    maxTime: 1, 
    avgTime: 1,
    fill: "#0065d3" 
  },
  { 
    testType: "Manual Testing", 
    minTime: 30, 
    maxTime: 240, 
    avgTime: 135,
    fill: "#6b7280" 
  },
]

const chartConfig = {
  avgTime: {
    label: "Average Time (minutes)",
  },
  automated: {
    label: "Automated (TAF)",
    color: "#0065d3",
  },
  manual: {
    label: "Manual Testing",
    color: "#6b7280",
  },
}

export function TestExecutionTimeChart() {
  const automatedTime = 1; // 1 minute
  const manualAvgTime = 135; // 2.25 hours average
  const timeSavingsPercent = Math.round(((manualAvgTime - automatedTime) / manualAvgTime) * 100);
  const timeSavingsHours = ((manualAvgTime - automatedTime) / 60).toFixed(1);

  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`;
    } else {
      const hours = (minutes / 60).toFixed(1);
      return `${hours} hrs`;
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Test Execution Time Comparison</CardTitle>
        <CardDescription>Time Required Per Test Case</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis 
              dataKey="testType" 
              tickLine={false} 
              tickMargin={10} 
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              label={{ value: 'Time (minutes)', angle: -90, position: 'insideLeft' }}
              domain={[0, 250]}
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-3 border rounded shadow-lg">
                      <p className="font-semibold">{label}</p>
                      <p className="text-sm">
                        <span className="font-medium">Average: </span>
                        {formatTime(data.avgTime)}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Range: </span>
                        {formatTime(data.minTime)} - {formatTime(data.maxTime)}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="avgTime" fill="#0065d3" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {timeSavingsPercent}% time reduction with automation <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Saves ~{timeSavingsHours} hours per test case on average
        </div>
      </CardFooter>
    </Card>
  )
}
