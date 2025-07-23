"use client";

import * as React from "react";
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
  { conclusion: "success", runs: 397, fill: "var(--color-success)" },
  { conclusion: "failure", runs: 217, fill: "var(--color-failure)" },
  { conclusion: "cancelled", runs: 174, fill: "var(--color-cancelled)" },
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
};

export function BuildTestPublishChart() {
  const totalRuns = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.runs, 0);
  }, []);

  const successRuns = chartData.find(d => d.conclusion === "success")?.runs || 0;
  const failureRuns = chartData.find(d => d.conclusion === "failure")?.runs || 0;
  const cancelledRuns = chartData.find(d => d.conclusion === "cancelled")?.runs || 0;
  
  const successRate = ((successRuns / (successRuns + failureRuns)) * 100).toFixed(2);
  const overallSuccessRate = ((successRuns / totalRuns) * 100).toFixed(2);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Workflow Results */}
        <Card>
          <CardHeader>
            <CardTitle>Build Test Publish Workflow</CardTitle>
            <CardDescription>
              Workflow outcomes from Jan 2 - Jul 17, 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[200px]"
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
            
            <div className="border-t pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {successRate}%
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">
                  Success Rate (excluding cancelled)
                </div>
                <div className="text-xs text-gray-600">
                  {overallSuccessRate}% overall success across {totalRuns} runs
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workflow Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Workflow Performance</CardTitle>
            <CardDescription>
              Detailed breakdown of build test publish results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Total workflow runs</span>
                <span className="font-semibold">{totalRuns.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Successful builds</span>
                <span className="font-semibold">{successRuns}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Failed builds</span>
                <span className="font-semibold">{failureRuns}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Cancelled builds</span>
                <span className="font-semibold">{cancelledRuns}</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700 mb-2">
                  {Math.round((successRuns / totalRuns) * 100)}%
                </div>
                <div className="text-sm font-medium text-blue-600 mb-1">
                  Reliability Score
                </div>
                <div className="text-xs text-gray-600">
                  Overall workflow reliability metrics
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Workflow Insights</CardTitle>
          <CardDescription>
            Key findings from build test publish automation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-lg font-bold text-green-700">{successRuns}</div>
              <div className="text-sm text-green-600">Successful Builds</div>
              <div className="text-xs text-gray-500">Automated CI/CD</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-lg font-bold text-yellow-700">{failureRuns}</div>
              <div className="text-sm text-yellow-600">Failed Builds</div>
              <div className="text-xs text-gray-500">Requiring attention</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-lg font-bold text-gray-700">{cancelledRuns}</div>
              <div className="text-sm text-gray-600">Cancelled Builds</div>
              <div className="text-xs text-gray-500">Manual intervention</div>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 text-center">
              Build test publish workflow demonstrates consistent automation with a{" "}
              <span className="font-semibold text-green-600">{successRate}% success rate</span>{" "}
              for completed builds, supporting reliable continuous integration.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
