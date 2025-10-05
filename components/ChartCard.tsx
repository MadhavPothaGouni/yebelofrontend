"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define a generic type for chart data
export interface ChartData {
  timestamp: string;
  [key: string]: string | number;
}

// Make ChartCard generic to support RSIData or TradeData
interface ChartCardProps<T extends ChartData> {
  title: string;
  data: T[];
  dataKey: keyof T;
  color: string;
}

export default function ChartCard<T extends ChartData>({
  title,
  data,
  dataKey,
  color,
}: ChartCardProps<T>) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" hide />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={String(dataKey)}
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
