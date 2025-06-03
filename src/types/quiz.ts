
export interface QuizQuestion {
  id: string;
  title: string;
  description?: string;
  type: 'single' | 'multiple';
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  label: string;
  value: string;
}

export interface QuizAnswer {
  questionId: string;
  selectedOptions: string[];
}

export interface QuizData {
  answers: QuizAnswer[];
  completedAt: Date;
}

export interface LeadData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  consentGdpr: boolean;
  quizData: QuizData;
}
