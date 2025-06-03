
import { LeadData } from '../types/quiz';
import { quizQuestions } from '../data/quizQuestions';

export interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export const formatLeadEmail = (leadData: LeadData): EmailData => {
  const { name, email, company, phone, quizData } = leadData;
  
  // Format quiz answers for display
  const quizSummary = quizData.answers.map(answer => {
    const question = quizQuestions.find(q => q.id === answer.questionId);
    if (!question) return null;
    
    const selectedLabels = answer.selectedOptions.map(optionValue => {
      const option = question.options.find(opt => opt.value === optionValue);
      return option ? option.label : optionValue;
    });
    
    return {
      question: question.title,
      answers: selectedLabels
    };
  }).filter(Boolean);

  // Generate HTML email template
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Nouveau Lead - Simulation Business</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 25px; }
            .section h3 { color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 5px; }
            .client-info { background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .quiz-item { background: white; margin: 10px 0; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .quiz-question { font-weight: bold; color: #495057; margin-bottom: 8px; }
            .quiz-answer { color: #667eea; font-weight: 500; }
            .badge { background: #667eea; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; margin: 2px; display: inline-block; }
            .timestamp { color: #6c757d; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎯 Nouveau Lead Qualifié</h1>
                <p>Simulation Business terminée avec succès</p>
            </div>
            
            <div class="content">
                <div class="section">
                    <h3>👤 Informations Client</h3>
                    <div class="client-info">
                        <p><strong>Nom:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
                        ${phone ? `<p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
                        <p class="timestamp"><strong>Date de soumission:</strong> ${new Date(quizData.completedAt).toLocaleString('fr-FR')}</p>
                    </div>
                </div>

                <div class="section">
                    <h3>📊 Récapitulatif du Quiz</h3>
                    ${quizSummary.map(item => `
                        <div class="quiz-item">
                            <div class="quiz-question">${item.question}</div>
                            <div class="quiz-answer">
                                ${item.answers.map(answer => `<span class="badge">${answer}</span>`).join(' ')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h3>🎯 Recommandations Automatiques</h3>
                    <div class="client-info">
                        ${generateEmailRecommendations(quizData.answers).map(rec => `
                            <p>• ${rec}</p>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h3>📞 Actions Recommandées</h3>
                    <div class="client-info">
                        <p>• Recontacter le prospect dans les 24h</p>
                        <p>• Préparer une proposition personnalisée</p>
                        <p>• Planifier un call de découverte</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;

  return {
    to: 'leads@votreentreprise.com', // À remplacer par votre email
    subject: `🎯 Nouveau Lead: ${name} - ${company || 'Prospect'} - Simulation terminée`,
    html
  };
};

const generateEmailRecommendations = (answers: any[]): string[] => {
  const recommendations = [];
  
  const businessStage = answers.find(a => a.questionId === 'business-stage')?.selectedOptions[0];
  const challenges = answers.find(a => a.questionId === 'main-challenges')?.selectedOptions || [];
  const goals = answers.find(a => a.questionId === 'growth-goals')?.selectedOptions[0];
  
  if (businessStage === 'startup' || businessStage === 'idea') {
    recommendations.push("Client en phase de démarrage - Focus sur l'accompagnement stratégique initial");
  }
  
  if (challenges.includes('acquisition')) {
    recommendations.push("Problématique d'acquisition client identifiée - Proposer audit marketing");
  }
  
  if (challenges.includes('processes')) {
    recommendations.push("Besoin d'optimisation des processus - Audit opérationnel recommandé");
  }
  
  if (goals === 'explosive') {
    recommendations.push("Ambitions de croissance forte - Profil à haute valeur ajoutée");
  }
  
  return recommendations.length > 0 ? recommendations : ["Profil intéressant - Analyser en détail lors du call"];
};

export const sendLeadEmail = async (leadData: LeadData): Promise<boolean> => {
  try {
    const emailData = formatLeadEmail(leadData);
    
    // Pour la démonstration, on simule l'envoi d'email
    // En production, vous pouvez utiliser EmailJS, Postmark, SendGrid, etc.
    console.log('📧 Email formaté à envoyer:', emailData);
    
    // Simulation d'un appel API
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });
    
    // Si l'API n'existe pas encore, on simule un succès après 1 seconde
    if (!response.ok && response.status === 404) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('✅ Email simulé envoyé avec succès');
      return true;
    }
    
    return response.ok;
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
    // En cas d'erreur réseau, on simule quand même un succès pour la démo
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('✅ Email simulé envoyé (fallback mode)');
    return true;
  }
};
