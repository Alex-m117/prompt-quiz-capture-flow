
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { QuizQuestion, QuizAnswer, QuizData } from '../types/quiz';
import { quizQuestions } from '../data/quizQuestions';
import { saveQuizData, getQuizData } from '../utils/storage';
import QuizSummary from './QuizSummary';

interface QuizProps {
  onComplete: (data: QuizData) => void;
}

const Quiz = ({ onComplete }: QuizProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    // Load existing quiz data if available
    const existingData = getQuizData();
    if (existingData) {
      setAnswers(existingData.answers);
    }
  }, []);

  const currentQuestion = quizQuestions[currentStep];
  const isLastStep = currentStep === quizQuestions.length - 1;
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  const handleAnswer = (questionId: string, selectedOptions: string[]) => {
    const newAnswers = answers.filter(a => a.questionId !== questionId);
    newAnswers.push({ questionId, selectedOptions });
    setAnswers(newAnswers);
    
    // Save to localStorage
    const quizData: QuizData = {
      answers: newAnswers,
      completedAt: new Date()
    };
    saveQuizData(quizData);
  };

  const handleNext = () => {
    if (isLastStep) {
      setShowSummary(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleComplete = () => {
    const quizData: QuizData = {
      answers,
      completedAt: new Date()
    };
    onComplete(quizData);
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentQuestion.id);
  };

  const isAnswered = () => {
    const currentAnswer = getCurrentAnswer();
    return currentAnswer && currentAnswer.selectedOptions.length > 0;
  };

  if (showSummary) {
    return (
      <QuizSummary 
        answers={answers} 
        questions={quizQuestions}
        onComplete={handleComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Simulation Business
          </h1>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Étape {currentStep + 1} sur {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                {currentQuestion.title}
              </h2>
              {currentQuestion.description && (
                <p className="text-gray-600 text-lg">
                  {currentQuestion.description}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-4">
              {currentQuestion.options.map((option) => {
                const currentAnswer = getCurrentAnswer();
                const isSelected = currentAnswer?.selectedOptions.includes(option.value);

                return (
                  <div
                    key={option.id}
                    onClick={() => {
                      if (currentQuestion.type === 'single') {
                        handleAnswer(currentQuestion.id, [option.value]);
                      } else {
                        const currentSelection = currentAnswer?.selectedOptions || [];
                        const newSelection = isSelected
                          ? currentSelection.filter(s => s !== option.value)
                          : [...currentSelection, option.value];
                        handleAnswer(currentQuestion.id, newSelection);
                      }
                    }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-500'
                          : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-gray-800 font-medium">{option.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Précédent</span>
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isAnswered()}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 flex items-center space-x-2"
          >
            <span>{isLastStep ? 'Voir le résumé' : 'Suivant'}</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
