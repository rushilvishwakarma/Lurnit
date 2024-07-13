// components/ui/RadialProgressBar.tsx
import { RadialBarChart, RadialBar, PolarRadiusAxis, PolarGrid } from 'recharts';

interface RadialProgressBarProps {
  percentage: number;
  label: string;
}

const RadialProgressBar: React.FC<RadialProgressBarProps> = ({ percentage, label }) => {
  const data = [{ name: label, value: percentage }];

  return (
    <div className="relative">
      <RadialBarChart
        width={100}
        height={100}
        innerRadius={30}
        outerRadius={40}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarGrid stroke="none" />
        <RadialBar
          dataKey="value"
          background
          cornerRadius={10}
          fill="#4CAF50" // Customize the color as needed
        />
        <PolarRadiusAxis tick={false} />
      </RadialBarChart>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold">{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default RadialProgressBar;
