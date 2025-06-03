
import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'business-stage',
    title: 'À quel stade se trouve votre entreprise ?',
    description: 'Cette information nous aide à personnaliser nos recommandations',
    type: 'single',
    options: [
      { id: '1', label: 'Idée / Conception', value: 'idea' },
      { id: '2', label: 'Startup (< 2 ans)', value: 'startup' },
      { id: '3', label: 'PME établie (2-10 ans)', value: 'established' },
      { id: '4', label: 'Grande entreprise (> 10 ans)', value: 'enterprise' }
    ]
  },
  {
    id: 'team-size',
    title: 'Quelle est la taille de votre équipe ?',
    description: 'Incluez tous les collaborateurs actifs',
    type: 'single',
    options: [
      { id: '1', label: 'Solo entrepreneur', value: 'solo' },
      { id: '2', label: '2-5 personnes', value: 'small' },
      { id: '3', label: '6-20 personnes', value: 'medium' },
      { id: '4', label: '21-50 personnes', value: 'large' },
      { id: '5', label: '50+ personnes', value: 'xlarge' }
    ]
  },
  {
    id: 'revenue-range',
    title: 'Quel est votre chiffre d\'affaires annuel ?',
    description: 'Estimation approximative pour mieux vous conseiller',
    type: 'single',
    options: [
      { id: '1', label: 'Pas encore de revenus', value: 'none' },
      { id: '2', label: '< 100K €', value: 'under100k' },
      { id: '3', label: '100K - 500K €', value: '100k-500k' },
      { id: '4', label: '500K - 2M €', value: '500k-2m' },
      { id: '5', label: '> 2M €', value: 'over2m' }
    ]
  },
  {
    id: 'main-challenges',
    title: 'Quels sont vos principaux défis actuels ?',
    description: 'Sélectionnez tous ceux qui s\'appliquent à votre situation',
    type: 'multiple',
    options: [
      { id: '1', label: 'Acquisition de nouveaux clients', value: 'acquisition' },
      { id: '2', label: 'Rétention et fidélisation', value: 'retention' },
      { id: '3', label: 'Optimisation des processus', value: 'processes' },
      { id: '4', label: 'Gestion d\'équipe', value: 'team-management' },
      { id: '5', label: 'Levée de fonds', value: 'funding' },
      { id: '6', label: 'Innovation produit', value: 'innovation' }
    ]
  },
  {
    id: 'growth-goals',
    title: 'Quel est votre objectif de croissance pour les 12 prochains mois ?',
    type: 'single',
    options: [
      { id: '1', label: 'Maintenir la stabilité', value: 'maintain' },
      { id: '2', label: 'Croissance modérée (10-30%)', value: 'moderate' },
      { id: '3', label: 'Croissance forte (30-100%)', value: 'strong' },
      { id: '4', label: 'Croissance explosive (>100%)', value: 'explosive' }
    ]
  },
  {
    id: 'marketing-channels',
    title: 'Quels canaux marketing utilisez-vous actuellement ?',
    description: 'Sélectionnez tous vos canaux actifs',
    type: 'multiple',
    options: [
      { id: '1', label: 'Réseaux sociaux', value: 'social-media' },
      { id: '2', label: 'SEO / Content Marketing', value: 'seo' },
      { id: '3', label: 'Publicité payante (Google, Facebook)', value: 'paid-ads' },
      { id: '4', label: 'Email Marketing', value: 'email' },
      { id: '5', label: 'Événements / Networking', value: 'events' },
      { id: '6', label: 'Bouche-à-oreille', value: 'word-of-mouth' }
    ]
  },
  {
    id: 'priority-focus',
    title: 'Sur quoi souhaitez-vous vous concentrer en priorité ?',
    description: 'Choisissez votre domaine d\'amélioration principal',
    type: 'single',
    options: [
      { id: '1', label: 'Augmenter les ventes', value: 'sales' },
      { id: '2', label: 'Améliorer l\'efficacité opérationnelle', value: 'efficiency' },
      { id: '3', label: 'Développer de nouveaux produits', value: 'products' },
      { id: '4', label: 'Renforcer l\'équipe', value: 'team' },
      { id: '5', label: 'Optimiser la stratégie marketing', value: 'marketing' }
    ]
  }
];
