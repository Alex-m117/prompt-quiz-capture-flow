
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`group glass-card elegant-shadow p-6 text-center transition-all-smooth hover:elegant-shadow-lg hover:-translate-y-2 ${className}`}>
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-medium text-base-content mb-3">
        {title}
      </h3>
      <p className="text-base-content/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
