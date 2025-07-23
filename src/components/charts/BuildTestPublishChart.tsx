"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { PieChart, Pie } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const chartData = [
  { conclusion: "success", runs: 397, fill: "#0065d3" },
  { conclusion: "failure", runs: 217, fill: "#6b7280" },
  { conclusion: "cancelled", runs: 174, fill: "#93c5fd" },
];

const chartConfig = {
  runs: {
    label: "Runs",
  },
  success: {
    label: "Success",
    color: "#0065d3",
  },
  failure: {
    label: "Failure",
    color: "#6b7280",
  },
  cancelled: {
    label: "Cancelled",
    color: "#93c5fd",
  },
};

export function BuildTestPublishChart() {
  const totalRuns = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.runs, 0);
  }, []);

  const successRuns = chartData.find(d => d.conclusion === "success")?.runs || 0;
  const failureRuns = chartData.find(d => d.conclusion === "failure")?.runs || 0;
  
  const successRate = ((successRuns / (successRuns + failureRuns)) * 100).toFixed(2);
  const overallSuccessRate = ((successRuns / totalRuns) * 100).toFixed(2);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Build Test Publish Workflow</CardTitle>
        <CardDescription>Jan 2 - Jul 17, 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="runs"
              nameKey="conclusion"
              innerRadius={60}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {successRate}% success rate (excluding cancelled) <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          790 workflow runs
        </div>
      </CardFooter>
    </Card>
  );
}
