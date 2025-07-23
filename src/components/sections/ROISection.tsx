import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
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
        {/* Performance Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Improvement</CardTitle>
            <CardDescription>
              NuGet restore comparison between AMEC and EHV runners
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
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {improvementPercent}%
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Faster Performance
                </div>
                <div className="text-sm text-gray-600">
                  435 seconds saved per restore
                </div>
                <div className="text-xs text-gray-500 mt-2" title="Mann-Whitney U = 0, p < 0.001, Cohen's d ≈ 3.3">
                  Statistically significant improvement
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Usage & Time Savings</CardTitle>
            <CardDescription>
              Extrapolated impact based on current usage patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-primary">882.8s</div>
                <div className="text-sm text-primary">American Mean</div>
                <div className="text-xs text-gray-500">±47.8s (n=50)</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-800">1316.7s</div>
                <div className="text-sm text-gray-700">Eindhoven Mean</div>
                <div className="text-xs text-gray-500">±607.6s (n=5)</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Daily restores</span>
                <span className="font-semibold">{restoresPerDay}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Annual restores (projected)</span>
                <span className="font-semibold">{totalRestores.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Restores remaining in 2025</span>
                <span className="font-semibold">{restoresRemaining2025.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {hoursPerYear} hours
                </div>
                <div className="text-sm font-medium text-primary mb-1">
                  Annual Time Savings
                </div>
                <div className="text-xs text-gray-600">
                  {hoursRemaining2025} hours saved in remaining 2025
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
