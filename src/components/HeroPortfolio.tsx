
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users, Award } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import FeatureCard from '@/components/ui/FeatureCard';

interface HeroPortfolioProps {
  onStartQuiz: () => void;
}

const HeroPortfolio = ({ onStartQuiz }: HeroPortfolioProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-light leading-tight">
                  Votre <span className="text-primary font-medium">Patrimoine</span>,
                  <br />
                  Notre <span className="text-primary font-medium">Expertise</span>
                </h1>
                <p className="text-xl text-base-content/80 leading-relaxed max-w-xl">
                  Conseillère en gestion de patrimoine, je vous accompagne dans la construction 
                  et l'optimisation de votre stratégie patrimoniale sur mesure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onStartQuiz}
                  className="bg-primary hover:bg-primary/90 text-primary-content px-8 py-6 text-lg rounded-xl elegant-shadow-lg transition-all-smooth hover:elegant-shadow-xl hover:-translate-y-1"
                >
                  Simulation Gratuite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-primary/20 text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-xl"
                >
                  Découvrir mes services
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <StatCard value="15+" label="Années" sublabel="d'expérience" trend="up" />
                <StatCard value="500+" label="Clients" sublabel="accompagnés" trend="up" />
                <StatCard value="98%" label="Satisfaction" sublabel="client" trend="up" />
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-[3/4] glass-card elegant-shadow-lg rounded-2xl overflow-hidden animate-float">
                  <img
                    src="/placeholder.svg"
                    alt="Sarah Martin - Conseillère en Gestion de Patrimoine"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 glass-card elegant-shadow p-4 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card elegant-shadow p-4 rounded-xl animate-float" style={{ animationDelay: '2s' }}>
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">
              Une approche <span className="text-primary font-medium">personnalisée</span>
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Chaque patrimoine est unique. Mon accompagnement s'adapte à vos objectifs, 
              votre situation et vos projets de vie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Shield}
              title="Sécurité"
              description="Protection et sécurisation de votre patrimoine existant"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Croissance"
              description="Stratégies d'investissement adaptées à votre profil"
            />
            <FeatureCard
              icon={Users}
              title="Transmission"
              description="Optimisation fiscale et préparation de la succession"
            />
            <FeatureCard
              icon={Award}
              title="Excellence"
              description="Expertise reconnue et accompagnement de qualité"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card elegant-shadow-lg p-12 rounded-2xl">
            <h2 className="text-3xl font-light mb-6">
              Prêt à <span className="text-primary font-medium">optimiser</span> votre patrimoine ?
            </h2>
            <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
              Découvrez en quelques minutes les opportunités d'optimisation 
              de votre situation patrimoniale grâce à notre simulation personnalisée.
            </p>
            <Button 
              onClick={onStartQuiz}
              className="bg-primary hover:bg-primary/90 text-primary-content px-12 py-6 text-lg rounded-xl elegant-shadow-lg transition-all-smooth hover:elegant-shadow-xl hover:-translate-y-1"
            >
              Commencer la simulation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPortfolio;
