"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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
  { conclusion: "success", runs: 356, fill: "var(--color-success)" },
  { conclusion: "failure", runs: 207, fill: "var(--color-failure)" },
  { conclusion: "cancelled", runs: 145, fill: "var(--color-cancelled)" },
  { conclusion: "skipped", runs: 20, fill: "var(--color-skipped)" },
];

const chartConfig = {
  runs: {
    label: "Runs",
  },
  success: {
    label: "Success",
    color: "#22c55e",
  },
  failure: {
    label: "Failure",
    color: "#ef4444",
  },
  cancelled: {
    label: "Cancelled",
    color: "#f59e0b",
  },
  skipped: {
    label: "Skipped",
    color: "#6b7280",
  },
};

export function TestCoverageChart() {
  const totalRuns = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.runs, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Test Coverage Workflow</CardTitle>
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
          63.23% success rate (excluding cancelled/skipped) <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          48.90% success rate overall across 728 workflow runs
        </div>
      </CardFooter>
    </Card>
  );
}
