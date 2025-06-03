
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Quiz from '../components/Quiz';
import { QuizData } from '../types/quiz';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizData, setQuizData] = useState<QuizData | null>(null);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = (data: QuizData) => {
    setQuizData(data);
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen">
      {!showQuiz ? (
        <Hero onStartQuiz={handleStartQuiz} />
      ) : (
        <Quiz onComplete={handleQuizComplete} />
      )}
    </div>
  );
};

export default Index;
