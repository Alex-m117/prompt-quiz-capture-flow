
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Target, TrendingUp } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero = ({ onStartQuiz }: HeroProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-50 via-background to-royal-50 dark:from-royal-950/20 dark:via-background dark:to-royal-950/20">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-royal-600 to-royal-800 bg-clip-text text-transparent">
            PatrimoineExpert
          </div>
          <Button variant="outline" className="hidden md:flex border-royal-600 text-royal-600 hover:bg-royal-50 dark:hover:bg-royal-950/30">
            Contact
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-royal-600 via-royal-700 to-royal-800 bg-clip-text text-transparent leading-tight">
            Découvrez Votre
            <br />
            Potentiel Patrimonial
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Une simulation interactive en 7 étapes pour identifier vos opportunités de croissance patrimoniale et optimiser votre stratégie financière.
          </p>
          <Button 
            onClick={onStartQuiz}
            size="lg" 
            className="bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Commencer la Simulation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Analyse Précise</h3>
            <p className="text-gray-600">
              Identifiez vos points forts et axes d'amélioration grâce à notre algorithme d'analyse avancée.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Recommandations Personnalisées</h3>
            <p className="text-gray-600">
              Recevez des conseils sur-mesure pour optimiser votre stratégie et accélérer votre croissance.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Accompagnement Expert</h3>
            <p className="text-gray-600">
              Bénéficiez de l'expertise de nos consultants pour mettre en œuvre vos optimisations.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Ils nous font confiance :</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">TechCorp</div>
            <div className="text-2xl font-bold text-muted-foreground">InnovateLab</div>
            <div className="text-2xl font-bold text-muted-foreground">GrowthCo</div>
            <div className="text-2xl font-bold text-muted-foreground">ScaleUp</div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-16 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
          <h2 className="text-2xl font-bold text-center mb-8">Pourquoi choisir notre simulation ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Analyse en 7 étapes rapides et intuitives",
              "Recommandations basées sur des données réelles",
              "Interface moderne et responsive",
              "Respect total de la confidentialité RGPD",
              "Rapport détaillé instantané",
              "Accompagnement personnalisé possible"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-royal-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
