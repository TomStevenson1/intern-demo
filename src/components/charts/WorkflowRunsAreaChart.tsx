"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const chartData = [
  {
    "date": "2025-01-02",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-01-06",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-01-07",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-01-08",
    "Test Coverage Report": 12,
    "Build, Test, and Publish": 12
  },
  {
    "date": "2025-01-09",
    "Test Coverage Report": 9,
    "Build, Test, and Publish": 9
  },
  {
    "date": "2025-01-10",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-01-12",
    "Test Coverage Report": 0,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-01-13",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-01-14",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-01-15",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-01-16",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-01-19",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-01-20",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 5
  },
  {
    "date": "2025-01-21",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 5
  },
  {
    "date": "2025-01-22",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-01-23",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-01-24",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-01-27",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-01-28",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 5
  },
  {
    "date": "2025-01-29",
    "Test Coverage Report": 11,
    "Build, Test, and Publish": 12
  },
  {
    "date": "2025-01-30",
    "Test Coverage Report": 12,
    "Build, Test, and Publish": 12
  },
  {
    "date": "2025-01-31",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-02-03",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-02-04",
    "Test Coverage Report": 12,
    "Build, Test, and Publish": 12
  },
  {
    "date": "2025-02-05",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-02-06",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-02-07",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 5
  },
  {
    "date": "2025-02-10",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-02-11",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-02-12",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-02-13",
    "Test Coverage Report": 14,
    "Build, Test, and Publish": 14
  },
  {
    "date": "2025-02-14",
    "Test Coverage Report": 11,
    "Build, Test, and Publish": 11
  },
  {
    "date": "2025-02-17",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-02-18",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-02-19",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-02-20",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-02-21",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-02-24",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-02-27",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-03-03",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-03-04",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-03-05",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-03-06",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-03-10",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-03-11",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-03-12",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-03-13",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-03-14",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-03-17",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-03-18",
    "Test Coverage Report": 9,
    "Build, Test, and Publish": 9
  },
  {
    "date": "2025-03-19",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-03-20",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-03-21",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-03-24",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-03-25",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-03-26",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-03-27",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-03-28",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-03-29",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-03-31",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-04-01",
    "Test Coverage Report": 12,
    "Build, Test, and Publish": 13
  },
  {
    "date": "2025-04-02",
    "Test Coverage Report": 15,
    "Build, Test, and Publish": 15
  },
  {
    "date": "2025-04-03",
    "Test Coverage Report": 9,
    "Build, Test, and Publish": 9
  },
  {
    "date": "2025-04-04",
    "Test Coverage Report": 10,
    "Build, Test, and Publish": 10
  },
  {
    "date": "2025-04-07",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-04-08",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-04-09",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-04-10",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-04-11",
    "Test Coverage Report": 13,
    "Build, Test, and Publish": 14
  },
  {
    "date": "2025-04-14",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 9
  },
  {
    "date": "2025-04-15",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-04-16",
    "Test Coverage Report": 9,
    "Build, Test, and Publish": 10
  },
  {
    "date": "2025-04-17",
    "Test Coverage Report": 9,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-04-18",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-04-19",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-04-21",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-04-22",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-04-23",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-04-24",
    "Test Coverage Report": 11,
    "Build, Test, and Publish": 11
  },
  {
    "date": "2025-04-25",
    "Test Coverage Report": 27,
    "Build, Test, and Publish": 27
  },
  {
    "date": "2025-04-26",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-04-28",
    "Test Coverage Report": 13,
    "Build, Test, and Publish": 13
  },
  {
    "date": "2025-04-29",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-04-30",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 9
  },
  {
    "date": "2025-05-01",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-05-02",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-05-05",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-05-06",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-05-07",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-05-09",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-05-11",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-05-12",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-05-13",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-05-14",
    "Test Coverage Report": 9,
    "Build, Test, and Publish": 9
  },
  {
    "date": "2025-05-15",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-05-16",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-05-20",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-05-21",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-05-22",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-05-27",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-05-28",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-05-29",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-05-30",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-06-02",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-06-03",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-06-04",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-06-05",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-06-06",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-06-10",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 5
  },
  {
    "date": "2025-06-11",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-06-12",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-06-13",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-06-16",
    "Test Coverage Report": 10,
    "Build, Test, and Publish": 11
  },
  {
    "date": "2025-06-17",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-06-18",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-06-20",
    "Test Coverage Report": 17,
    "Build, Test, and Publish": 17
  },
  {
    "date": "2025-06-23",
    "Test Coverage Report": 16,
    "Build, Test, and Publish": 16
  },
  {
    "date": "2025-06-24",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 6
  },
  {
    "date": "2025-06-25",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-06-26",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 19
  },
  {
    "date": "2025-06-27",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 5
  },
  {
    "date": "2025-06-30",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-07-01",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 11
  },
  {
    "date": "2025-07-02",
    "Test Coverage Report": 8,
    "Build, Test, and Publish": 8
  },
  {
    "date": "2025-07-03",
    "Test Coverage Report": 5,
    "Build, Test, and Publish": 5
  },
  {
    "date": "2025-07-04",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-07-08",
    "Test Coverage Report": 2,
    "Build, Test, and Publish": 2
  },
  {
    "date": "2025-07-09",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 7
  },
  {
    "date": "2025-07-10",
    "Test Coverage Report": 1,
    "Build, Test, and Publish": 1
  },
  {
    "date": "2025-07-11",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-07-14",
    "Test Coverage Report": 4,
    "Build, Test, and Publish": 4
  },
  {
    "date": "2025-07-15",
    "Test Coverage Report": 3,
    "Build, Test, and Publish": 3
  },
  {
    "date": "2025-07-16",
    "Test Coverage Report": 7,
    "Build, Test, and Publish": 9
  },
  {
    "date": "2025-07-17",
    "Test Coverage Report": 6,
    "Build, Test, and Publish": 10
  }
];

const chartConfig = {
  runs: {
    label: "Workflow Runs",
  },
  "Test Coverage Report": {
    label: "Test Coverage Report",
    color: "#8b5cf6",
  },
  "Build, Test, and Publish": {
    label: "Build, Test, and Publish",
    color: "#06b6d4",
  },
};

export function WorkflowRunsAreaChart() {
  // Use all data without filtering
  const filteredData = chartData;

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Workflow Runs Over Time</CardTitle>
          <CardDescription>
            Showing all workflow runs from Jan 2 - Jul 17, 2025
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillTestCoverage" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#8b5cf6"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#8b5cf6"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillBuildTestPublish" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#06b6d4"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#06b6d4"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Test Coverage Report"
              type="natural"
              fill="url(#fillTestCoverage)"
              stroke="#8b5cf6"
              stackId="a"
            />
            <Area
              dataKey="Build, Test, and Publish"
              type="natural"
              fill="url(#fillBuildTestPublish)"
              stroke="#06b6d4"
              stackId="a"
            />
            <ChartLegend />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
