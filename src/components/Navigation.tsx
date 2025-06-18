
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ isDark, toggleTheme, currentPage, onNavigate }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À propos' },
    { id: 'simulation', label: 'Simulation' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-base-300/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="text-2xl font-light cursor-pointer transition-colors hover:text-primary"
            onClick={() => onNavigate('home')}
          >
            <span className="text-primary font-medium">Patrimoine</span>Expert
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-all-smooth hover:text-primary relative ${
                  currentPage === item.id 
                    ? 'text-primary' 
                    : 'text-base-content/80'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full hover:bg-primary/10 transition-all-smooth"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-primary" />
              ) : (
                <Moon className="h-4 w-4 text-primary" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden w-10 h-10 rounded-full hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 text-primary" />
              ) : (
                <Menu className="h-4 w-4 text-primary" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-base-300/30">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium transition-all-smooth hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/5 ${
                    currentPage === item.id 
                      ? 'text-primary bg-primary/10' 
                      : 'text-base-content/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
