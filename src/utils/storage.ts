
import { QuizData, LeadData } from '../types/quiz';

const QUIZ_DATA_KEY = 'quizData';
const LEAD_DATA_KEY = 'leadData';

// Quiz data management
export const saveQuizData = (data: QuizData): void => {
  try {
    localStorage.setItem(QUIZ_DATA_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving quiz data:', error);
  }
};

export const getQuizData = (): QuizData | null => {
  try {
    const data = localStorage.getItem(QUIZ_DATA_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving quiz data:', error);
    return null;
  }
};

export const clearQuizData = (): void => {
  try {
    localStorage.removeItem(QUIZ_DATA_KEY);
  } catch (error) {
    console.error('Error clearing quiz data:', error);
  }
};

// Lead data management
export const saveLeadData = (data: LeadData): void => {
  try {
    localStorage.setItem(LEAD_DATA_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving lead data:', error);
  }
};

export const getLeadData = (): LeadData | null => {
  try {
    const data = localStorage.getItem(LEAD_DATA_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving lead data:', error);
    return null;
  }
};

export const clearLeadData = (): void => {
  try {
    localStorage.removeItem(LEAD_DATA_KEY);
  } catch (error) {
    console.error('Error clearing lead data:', error);
  }
};

// Clear all data (GDPR compliance)
export const clearAllData = (): void => {
  clearQuizData();
  clearLeadData();
};
