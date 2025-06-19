
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroPortfolio from '../components/HeroPortfolio';
import AboutPage from '../components/AboutPage';
import ServicesPage from '../components/ServicesPage';
import PortfolioPage from '../components/PortfolioPage';
import Quiz from '../components/Quiz';
import { QuizData } from '../types/quiz';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(false);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setCurrentPage('simulation');
  };

  const handleQuizComplete = (data: QuizData) => {
    setQuizData(data);
    setShowQuiz(false);
    setCurrentPage('home');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setShowQuiz(false);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (showQuiz) {
      return <Quiz onComplete={handleQuizComplete} />;
    }

    switch (currentPage) {
      case 'services':
        return <ServicesPage onStartQuiz={handleStartQuiz} />;
      case 'about':
        return <AboutPage onStartQuiz={handleStartQuiz} />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'simulation':
        return <Quiz onComplete={handleQuizComplete} />;
      default:
        return <HeroPortfolio onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen transition-all-smooth">
      <Navigation 
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      
      {renderPage()}
    </div>
  );
};

export default Index;
