
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface PresentationCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'minimal';
  className?: string;
}

const PresentationCard = ({ 
  title, 
  description, 
  icon: Icon, 
  children, 
  variant = 'default',
  className = '' 
}: PresentationCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'glass-card elegant-shadow-lg hover:shadow-xl transform hover:-translate-y-1';
      case 'minimal':
        return 'bg-transparent border-l-4 border-primary pl-6 shadow-none';
      default:
        return 'glass-card elegant-shadow hover:elegant-shadow-lg';
    }
  };

  return (
    <Card className={`transition-all-smooth ${getVariantClasses()} ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div>
            <CardTitle className="text-lg font-medium text-base-content">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-base-content/70 mt-1">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      {children && (
        <CardContent className="pt-0">
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default PresentationCard;
