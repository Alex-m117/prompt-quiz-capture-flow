
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

const StatCard = ({ value, label, sublabel, trend, className = '' }: StatCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-error';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className={`glass-card elegant-shadow p-6 text-center transition-all-smooth hover:elegant-shadow-lg ${className}`}>
      <div className={`text-3xl font-light mb-2 ${getTrendColor()}`}>
        {value}
      </div>
      <div className="text-base-content font-medium">
        {label}
      </div>
      {sublabel && (
        <div className="text-sm text-base-content/60 mt-1">
          {sublabel}
        </div>
      )}
    </div>
  );
};

export default StatCard;
