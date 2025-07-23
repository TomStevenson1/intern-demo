"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"

const performanceData = [
  { location: "American", time: 882.8, fill: "#0065d3" },
  { location: "The Netherlands", time: 1316.7, fill: "#374151" }
]

const chartConfig = {
  time: {
    label: "Time (seconds)",
  },
  american: {
    label: "American",
    color: "#0065d3",
  },
  eindhoven: {
    label: "The Netherlands", 
    color: "#374151",
  },
}

export function PerformanceComparisonChart() {
  const timeSavedPerRestore = 435 // seconds
  const improvementPercent = 32.96
  const totalRestores = 2811
  const hoursPerYear = Math.round((totalRestores * timeSavedPerRestore) / 3600)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Improvement</CardTitle>
        <CardDescription>
          NuGet restore comparison between American and The Netherlands runners
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ChartContainer
          config={chartConfig}
          className="h-[180px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="location" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                label={{ value: 'Time (seconds)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '12px', fill: '#6b7280' } }}
              />
              <ChartTooltip 
                content={<ChartTooltipContent 
                  formatter={(value, name) => [`Time: ${value}s`, ""]}
                  labelFormatter={() => ""}
                />} 
              />
              <Bar dataKey="time" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        
        <div className="border-t pt-4">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {improvementPercent}%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Faster Performance
              </div>
              <div className="text-sm text-gray-600">
                435 seconds saved per restore
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {hoursPerYear}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Hours Saved Annually
              </div>
              <div className="text-sm text-gray-600">
                Based on current usage
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
