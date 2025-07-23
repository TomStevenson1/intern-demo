import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"

interface ROISectionProps {
  totalRestores?: number
  restoresPerDay?: number
  children?: React.ReactNode
}

const performanceData = [
  { location: "American", time: 882.8, fill: "#0065d3" },
  { location: "Eindhoven", time: 1316.7, fill: "#374151" }
]

const usageFrequencyData = [
  { date: "2025-01-02", restores: 8 },
  { date: "2025-01-06", restores: 12 },
  { date: "2025-01-07", restores: 9 },
  { date: "2025-01-08", restores: 15 },
  { date: "2025-01-09", restores: 11 },
  { date: "2025-01-10", restores: 7 },
  { date: "2025-01-13", restores: 6 },
  { date: "2025-01-14", restores: 4 },
  { date: "2025-01-15", restores: 8 },
  { date: "2025-01-16", restores: 3 },
  { date: "2025-01-20", restores: 12 },
  { date: "2025-01-21", restores: 14 },
  { date: "2025-01-22", restores: 5 },
  { date: "2025-01-23", restores: 9 },
  { date: "2025-01-27", restores: 11 },
  { date: "2025-01-28", restores: 8 },
  { date: "2025-01-29", restores: 13 },
  { date: "2025-01-30", restores: 16 },
  { date: "2025-02-03", restores: 7 },
  { date: "2025-02-04", restores: 15 },
  { date: "2025-02-05", restores: 10 },
  { date: "2025-02-06", restores: 12 },
  { date: "2025-02-10", restores: 9 },
  { date: "2025-02-11", restores: 11 },
  { date: "2025-02-12", restores: 14 },
  { date: "2025-02-13", restores: 18 },
  { date: "2025-02-17", restores: 8 },
  { date: "2025-02-18", restores: 13 },
  { date: "2025-02-19", restores: 6 },
  { date: "2025-02-20", restores: 10 },
  { date: "2025-02-24", restores: 4 },
  { date: "2025-03-03", restores: 7 },
  { date: "2025-03-04", restores: 9 },
  { date: "2025-03-05", restores: 12 },
  { date: "2025-03-06", restores: 8 },
  { date: "2025-03-10", restores: 3 },
  { date: "2025-03-11", restores: 5 },
  { date: "2025-03-12", restores: 11 },
  { date: "2025-03-13", restores: 7 },
  { date: "2025-03-17", restores: 9 },
  { date: "2025-03-18", restores: 14 },
  { date: "2025-03-19", restores: 6 },
  { date: "2025-03-20", restores: 8 },
  { date: "2025-03-24", restores: 10 },
  { date: "2025-03-25", restores: 13 },
  { date: "2025-03-26", restores: 12 },
  { date: "2025-03-27", restores: 15 },
  { date: "2025-04-01", restores: 17 },
  { date: "2025-04-02", restores: 19 },
  { date: "2025-04-03", restores: 14 },
  { date: "2025-04-07", restores: 8 },
  { date: "2025-04-08", restores: 11 },
  { date: "2025-04-09", restores: 9 },
  { date: "2025-04-14", restores: 12 },
  { date: "2025-04-15", restores: 10 },
  { date: "2025-04-16", restores: 13 },
  { date: "2025-04-21", restores: 2 },
  { date: "2025-04-22", restores: 3 },
  { date: "2025-04-24", restores: 16 },
  { date: "2025-04-25", restores: 22 },
  { date: "2025-04-28", restores: 18 },
  { date: "2025-04-29", restores: 14 },
  { date: "2025-05-05", restores: 11 },
  { date: "2025-05-06", restores: 13 },
  { date: "2025-05-07", restores: 15 },
  { date: "2025-05-12", restores: 4 },
  { date: "2025-05-13", restores: 6 },
  { date: "2025-05-14", restores: 12 },
  { date: "2025-05-20", restores: 9 },
  { date: "2025-05-21", restores: 7 },
  { date: "2025-06-02", restores: 3 },
  { date: "2025-06-03", restores: 5 },
  { date: "2025-06-10", restores: 8 },
  { date: "2025-06-11", restores: 11 },
  { date: "2025-06-16", restores: 14 },
  { date: "2025-06-17", restores: 10 },
  { date: "2025-06-20", restores: 20 },
  { date: "2025-06-23", restores: 18 },
  { date: "2025-06-24", restores: 9 },
  { date: "2025-06-25", restores: 12 },
  { date: "2025-07-01", restores: 15 },
  { date: "2025-07-02", restores: 11 },
  { date: "2025-07-08", restores: 6 },
  { date: "2025-07-09", restores: 8 },
  { date: "2025-07-14", restores: 7 },
  { date: "2025-07-15", restores: 9 },
  { date: "2025-07-16", restores: 13 },
  { date: "2025-07-17", restores: 16 }
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
    label: "Eindhoven", 
    color: "#374151",
  },
}

const usageChartConfig = {
  restores: {
    label: "NuGet Restores",
    color: "#0065d3",
  },
}

export const ROISection: React.FC<ROISectionProps> = ({
  totalRestores = 2811,
  restoresPerDay = 7.74,
  children
}) => {
  const timeSavedPerRestore = 435 // seconds
  const improvementPercent = 32.96
  const hoursPerYear = Math.round((totalRestores * timeSavedPerRestore) / 3600)
  const restoresRemaining2025 = 1293
  const hoursRemaining2025 = Math.round((restoresRemaining2025 * timeSavedPerRestore) / 3600)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Usage Frequency */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Frequency</CardTitle>
            <CardDescription>
              Daily NuGet restore activity from Jan 2 - Jul 17, 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ChartContainer
              config={usageChartConfig}
              className="h-[200px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={usageFrequencyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="fillRestores" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#0065d3"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#0065d3"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                    minTickGap={32}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    label={{ value: 'Restores', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '12px', fill: '#6b7280' } }}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent 
                      formatter={(value, name) => [`Restores: ${value}`, ""]}
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        });
                      }}
                    />} 
                  />
                  <Area
                    dataKey="restores"
                    type="monotone"
                    fill="url(#fillRestores)"
                    stroke="#0065d3"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <div className="border-t pt-3">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{restoresPerDay}</div>
                  <div className="text-sm text-gray-600">Daily Average</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{totalRestores.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Annual Total</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{restoresRemaining2025.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Remaining 2025</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Improvement</CardTitle>
            <CardDescription>
              NuGet restore comparison between American and Eindhoven runners
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
      </div>

      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </div>
  )
}
