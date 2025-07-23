"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
  { iteration: "2513", testCases: 18 },
  { iteration: "2515", testCases: 27 },
  { iteration: "2517", testCases: 9 },
  { iteration: "2519", testCases: 26 },
  { iteration: "2521", testCases: 11 },
  { iteration: "2525", testCases: 12 },
  { iteration: "2527", testCases: 15 },
];

const chartConfig = {
  testCases: {
    label: "Test Cases",
    color: "#2563eb",
  },
};

export function TestCasesBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Cases Executed by Iteration</CardTitle>
        <CardDescription>Sprint iterations 2513 - 2527</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="iteration" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="testCases" fill="var(--color-testCases)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Consistent testing activity over multiple iterations <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing test case execution across the last 7 sprint iterations
        </div>
      </CardFooter>
    </Card>
  );
}
