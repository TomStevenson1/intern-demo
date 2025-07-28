"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"

const performanceData = [
  { location: "America (n=50)", time: 12.85, stdDev: 0.80, fill: "#0065d3" },
  { location: "Eindhoven (n=70)", time: 27.76, stdDev: 4.44, fill: "rgb(147, 197, 253)" },
  { location: "Bangalore (n=50)", time: 45.93, stdDev: 121.80, fill: "#374151" }
]

const chartConfig = {
  time: {
    label: "Time (minutes)",
  },
  america: {
    label: "America",
    color: "#0065d3",
  },
  eindhoven: {
    label: "Eindhoven", 
    color: "rgb(147, 197, 253)",
  },
  bangalore: {
    label: "Bangalore",
    color: "#374151",
  },
}

export function PerformanceComparisonChart() {
  const formatMinutesToMmSs = (minutes: number) => {
    const totalMinutes = Math.floor(minutes)
    const secs = Math.round((minutes - totalMinutes) * 60)
    
    if (totalMinutes >= 60) {
      const hours = Math.floor(totalMinutes / 60)
      const mins = totalMinutes % 60
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    } else {
      return `${totalMinutes}:${secs.toString().padStart(2, '0')}`
    }
  }

  const amecTime = 12.85 // minutes
  const ehvTime = 27.76 // minutes
  const timeSavedPerRestore = ehvTime - amecTime // minutes saved compared to EHV
  const improvementPercent = Math.round(((ehvTime - amecTime) / ehvTime) * 100)
  const totalRestores = 2811
  const hoursPerYear = Math.round((totalRestores * timeSavedPerRestore) / 60) // convert minutes to hours

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Improvement</CardTitle>
        <CardDescription>
          NuGet restore comparison between America, Eindhoven, and Bangalore servers
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
                label={{ value: 'Time (minutes)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '12px', fill: '#6b7280' } }}
              />
              <ChartTooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-lg">
                        <p className="font-medium">{label}</p>
                        <p className="text-sm">Time: {formatMinutesToMmSs(data.time)}</p>
                        <p className="text-sm">Std Dev: {formatMinutesToMmSs(data.stdDev)}</p>
                      </div>
                    );
                  }
                  return null;
                }}
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
                {timeSavedPerRestore.toFixed(1)} minutes saved per restore
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
