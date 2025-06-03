
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { QuizAnswer, QuizQuestion } from '../types/quiz';
import LeadForm from './LeadForm';

interface QuizSummaryProps {
  answers: QuizAnswer[];
  questions: QuizQuestion[];
  onComplete: () => void;
}

const QuizSummary = ({ answers, questions, onComplete }: QuizSummaryProps) => {
  const [showLeadForm, setShowLeadForm] = React.useState(false);

  const getAnswerLabels = (questionId: string): string[] => {
    const answer = answers.find(a => a.questionId === questionId);
    const question = questions.find(q => q.id === questionId);
    
    if (!answer || !question) return [];
    
    return answer.selectedOptions.map(optionValue => {
      const option = question.options.find(opt => opt.value === optionValue);
      return option ? option.label : optionValue;
    });
  };

  const generateRecommendations = (): string[] => {
    // Simple recommendation logic based on answers
    const recommendations = [];
    
    const businessStage = answers.find(a => a.questionId === 'business-stage')?.selectedOptions[0];
    const challenges = answers.find(a => a.questionId === 'main-challenges')?.selectedOptions || [];
    const goals = answers.find(a => a.questionId === 'growth-goals')?.selectedOptions[0];
    
    if (businessStage === 'startup' || businessStage === 'idea') {
      recommendations.push("Concentrez-vous sur la validation de votre marché et l'acquisition des premiers clients");
    }
    
    if (challenges.includes('acquisition')) {
      recommendations.push("Optimisez votre stratégie d'acquisition client avec des canaux ciblés");
    }
    
    if (challenges.includes('processes')) {
      recommendations.push("Automatisez vos processus métier pour gagner en efficacité");
    }
    
    if (goals === 'explosive') {
      recommendations.push("Préparez une stratégie de scale-up avec une attention particulière sur l'infrastructure");
    }
    
    // Default recommendations
    if (recommendations.length === 0) {
      recommendations.push("Continuez à monitorer vos KPIs et restez agile dans vos décisions");
      recommendations.push("Investissez dans la formation de votre équipe");
    }
    
    return recommendations;
  };

  if (showLeadForm) {
    return <LeadForm onSubmit={onComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Félicitations ! Simulation Terminée
          </h1>
          <p className="text-gray-600 text-lg">
            Voici un résumé de vos réponses et nos recommandations personnalisées
          </p>
        </div>

        {/* Quiz Summary */}
        <Card className="mb-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Résumé de vos réponses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {questions.map((question) => {
              const answerLabels = getAnswerLabels(question.id);
              if (answerLabels.length === 0) return null;

              return (
                <div key={question.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <h3 className="font-semibold text-gray-800 mb-2">{question.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {answerLabels.map((label, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="mb-8 shadow-xl border-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-xl">Nos Recommandations Personnalisées</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {generateRecommendations().map((recommendation, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="inline-block shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Prêt à passer à l'action ?
              </h2>
              <p className="text-gray-600 mb-6">
                Recevez un rapport détaillé et découvrez comment nous pouvons vous accompagner
              </p>
              <Button
                onClick={() => setShowLeadForm(true)}
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Recevoir mon rapport gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizSummary;
