
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Award, Users } from 'lucide-react';

interface HeroPortfolioProps {
  onStartQuiz: () => void;
}

const HeroPortfolio = ({ onStartQuiz }: HeroPortfolioProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Conseillère en gestion de patrimoine"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 dark:from-background/90 dark:via-background/70 dark:to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Votre</span>
                <br />
                <span className="bg-gradient-to-r from-royal-600 to-royal-800 bg-clip-text text-transparent">
                  Patrimoine
                </span>
                <br />
                <span className="text-foreground">Optimisé</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Conseillère certifiée en gestion de patrimoine, j'accompagne les particuliers et entrepreneurs vers l'indépendance financière.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-600">200+</div>
                <div className="text-sm text-muted-foreground">Clients accompagnés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-600">15M€</div>
                <div className="text-sm text-muted-foreground">Patrimoine géré</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-600">8 ans</div>
                <div className="text-sm text-muted-foreground">D'expertise</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onStartQuiz}
                size="lg" 
                className="bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Analyse Gratuite de Patrimoine
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-royal-600 text-royal-600 hover:bg-royal-50 dark:hover:bg-royal-950/30 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Découvrir mon approche
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-royal-600" />
                <span className="text-sm">Certifiée CGPI</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="h-5 w-5 text-royal-600" />
                <span className="text-sm">ORIAS n°XX-XXX-XXX</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="h-5 w-5 text-royal-600" />
                <span className="text-sm">Membre ANACOFI</span>
              </div>
            </div>
          </div>

          {/* Right Column - Services Cards */}
          <div className="space-y-6 lg:pl-12">
            <div className="grid gap-4">
              
              {/* Service Card 1 */}
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/90 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-royal-100 dark:bg-royal-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-royal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Optimisation Fiscale</h3>
                    <p className="text-muted-foreground text-sm">
                      Réduction d'impôts, défiscalisation et stratégies patrimoniales sur-mesure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/90 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-royal-100 dark:bg-royal-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-royal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Protection du Patrimoine</h3>
                    <p className="text-muted-foreground text-sm">
                      Assurances-vie, prévoyance et transmission optimisée.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/90 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-royal-100 dark:bg-royal-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-royal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Investissements</h3>
                    <p className="text-muted-foreground text-sm">
                      Immobilier, placements financiers et diversification de portefeuille.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPortfolio;
