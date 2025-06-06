
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, TrendingUp, Heart, Target, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  onStartQuiz: () => void;
}

const AboutPage = ({ onStartQuiz }: AboutPageProps) => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">Marie</span>
              <br />
              <span className="bg-gradient-to-r from-royal-600 to-royal-800 bg-clip-text text-transparent">
                Dupont
              </span>
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-muted-foreground">
                Conseillère Certifiée en Gestion de Patrimoine
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Forte de 8 années d'expérience dans la gestion de patrimoine, j'accompagne mes clients vers l'indépendance financière à travers des stratégies personnalisées et une approche humaine.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-royal-50 dark:bg-royal-950/20 px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-royal-600" />
                <span className="text-sm font-medium">Certifiée CGPI</span>
              </div>
              <div className="flex items-center space-x-2 bg-royal-50 dark:bg-royal-950/20 px-4 py-2 rounded-full">
                <Award className="h-4 w-4 text-royal-600" />
                <span className="text-sm font-medium">ORIAS n°XX-XXX-XXX</span>
              </div>
              <div className="flex items-center space-x-2 bg-royal-50 dark:bg-royal-950/20 px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-royal-600" />
                <span className="text-sm font-medium">Membre ANACOFI</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Marie Dupont, Conseillère en gestion de patrimoine"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-royal-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm opacity-90">Clients satisfaits</div>
            </div>
          </div>
        </div>

        {/* What is Wealth Management */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Qu'est-ce qu'un Conseiller en Gestion de Patrimoine ?
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-royal-100 dark:bg-royal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-royal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Analyse Patrimoniale</h3>
                <p className="text-muted-foreground">
                  J'évalue votre situation financière globale pour identifier vos objectifs patrimoniaux et les moyens d'y parvenir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-royal-100 dark:bg-royal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-royal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Stratégies Sur-Mesure</h3>
                <p className="text-muted-foreground">
                  Je conçois des solutions personnalisées : optimisation fiscale, investissements, assurances et transmission.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-royal-100 dark:bg-royal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-royal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Accompagnement Long Terme</h3>
                <p className="text-muted-foreground">
                  Je vous accompagne dans la durée, en adaptant votre stratégie selon l'évolution de votre situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Approach */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Mon Approche</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Écoute et Analyse",
                    description: "Comprendre vos objectifs, contraintes et aspirations pour construire une stratégie adaptée."
                  },
                  {
                    title: "Transparence Totale",
                    description: "Explications claires de chaque recommandation, coûts transparents, aucune surprise."
                  },
                  {
                    title: "Indépendance",
                    description: "Conseils objectifs sans conflit d'intérêt, je sélectionne les meilleures solutions du marché."
                  },
                  {
                    title: "Suivi Personnalisé",
                    description: "Accompagnement continu avec points réguliers et adaptations selon l'évolution du marché."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-royal-100 dark:bg-royal-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-royal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-royal-50 to-royal-100 dark:from-royal-950/20 dark:to-royal-900/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Mes Domaines d'Expertise</h3>
                
                <div className="space-y-4">
                  {[
                    "Optimisation fiscale et défiscalisation",
                    "Assurance-vie et contrats de capitalisation",
                    "Investissement immobilier (SCPI, LMNP, Malraux...)",
                    "Placements financiers et gestion pilotée",
                    "Protection sociale et prévoyance",
                    "Transmission de patrimoine",
                    "Retraite et PER",
                    "Gestion de trésorerie d'entreprise"
                  ].map((expertise, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-royal-600 flex-shrink-0" />
                      <span className="text-sm">{expertise}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-royal-200 dark:border-royal-800">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Prêt(e) à optimiser votre patrimoine ?
                    </p>
                    <Button 
                      onClick={onStartQuiz}
                      className="bg-royal-600 hover:bg-royal-700 text-white rounded-full px-6"
                    >
                      Commencer l'analyse gratuite
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
