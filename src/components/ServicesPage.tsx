
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users, Home, PiggyBank, FileText, Calculator, Heart, Award, Target } from 'lucide-react';
import PresentationCard from '@/components/ui/PresentationCard';
import FeatureCard from '@/components/ui/FeatureCard';
import StatCard from '@/components/ui/StatCard';

interface ServicesPageProps {
  onStartQuiz: () => void;
}

const ServicesPage = ({ onStartQuiz }: ServicesPageProps) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-light leading-tight">
              <span className="text-primary font-medium">Conseiller</span> en Gestion
              <br />
              de <span className="text-primary font-medium">Patrimoine</span>
            </h1>
            <p className="text-xl text-base-content/80 leading-relaxed max-w-4xl mx-auto">
              Un métier d'expertise au service de votre avenir financier. 
              Découvrez comment un conseiller en gestion de patrimoine peut transformer 
              votre situation financière et vous accompagner vers vos objectifs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <StatCard value="360°" label="Approche" sublabel="globale" />
            <StatCard value="Sur-mesure" label="Stratégies" sublabel="personnalisées" />
            <StatCard value="Long terme" label="Vision" sublabel="patrimoniale" />
            <StatCard value="Expertise" label="Conseils" sublabel="professionnels" />
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 px-6 bg-base-200/30">
        <div className="max-w-4xl mx-auto">
          <PresentationCard
            title="Qu'est-ce qu'un Conseiller en Gestion de Patrimoine ?"
            description="Un expert financier qui vous accompagne dans l'optimisation et la protection de votre patrimoine"
            icon={Users}
            variant="elevated"
          >
            <div className="space-y-6">
              <p className="text-base-content/80 leading-relaxed">
                Le conseiller en gestion de patrimoine est un professionnel qualifié qui analyse votre situation 
                financière globale pour vous proposer des stratégies personnalisées d'investissement, 
                d'optimisation fiscale et de transmission patrimoniale.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-primary flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Sa mission
                  </h4>
                  <ul className="space-y-2 text-sm text-base-content/70">
                    <li>• Analyser votre situation patrimoniale</li>
                    <li>• Définir vos objectifs à court et long terme</li>
                    <li>• Élaborer une stratégie sur-mesure</li>
                    <li>• Suivre et ajuster vos investissements</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-primary flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Son expertise
                  </h4>
                  <ul className="space-y-2 text-sm text-base-content/70">
                    <li>• Fiscalité et optimisation</li>
                    <li>• Produits d'investissement</li>
                    <li>• Droit patrimonial</li>
                    <li>• Stratégies de transmission</li>
                  </ul>
                </div>
              </div>
            </div>
          </PresentationCard>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">
              Mes <span className="text-primary font-medium">services</span> d'accompagnement
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Un accompagnement complet pour tous vos projets patrimoniaux
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <PresentationCard
              title="Audit Patrimonial Complet"
              description="Analyse détaillée de votre situation actuelle"
              icon={Calculator}
              variant="elevated"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Bilan patrimonial</h4>
                    <p className="text-sm text-base-content/70">Inventaire complet de vos actifs et passifs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Analyse fiscale</h4>
                    <p className="text-sm text-base-content/70">Étude de votre situation fiscale actuelle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Profil investisseur</h4>
                    <p className="text-sm text-base-content/70">Évaluation de votre appétence au risque</p>
                  </div>
                </div>
              </div>
            </PresentationCard>

            <PresentationCard
              title="Stratégie d'Investissement"
              description="Optimisation de vos placements selon vos objectifs"
              icon={TrendingUp}
              variant="elevated"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Allocation d'actifs</h4>
                    <p className="text-sm text-base-content/70">Répartition optimale de vos investissements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Sélection de produits</h4>
                    <p className="text-sm text-base-content/70">Choix des meilleurs supports d'investissement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Suivi performance</h4>
                    <p className="text-sm text-base-content/70">Monitoring et ajustements réguliers</p>
                  </div>
                </div>
              </div>
            </PresentationCard>

            <PresentationCard
              title="Optimisation Fiscale"
              description="Réduction légale de votre pression fiscale"
              icon={Shield}
              variant="elevated"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Défiscalisation</h4>
                    <p className="text-sm text-base-content/70">Solutions de réduction d'impôts adaptées</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Optimisation IFI</h4>
                    <p className="text-sm text-base-content/70">Stratégies pour réduire l'impôt sur la fortune</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Niches fiscales</h4>
                    <p className="text-sm text-base-content/70">Utilisation optimale des dispositifs légaux</p>
                  </div>
                </div>
              </div>
            </PresentationCard>

            <PresentationCard
              title="Préparation Retraite"
              description="Constitution d'un capital pour vos vieux jours"
              icon={PiggyBank}
              variant="elevated"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Bilan retraite</h4>
                    <p className="text-sm text-base-content/70">Estimation de vos revenus futurs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Plans d'épargne</h4>
                    <p className="text-sm text-base-content/70">PER, PERP et autres solutions retraite</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Stratégie long terme</h4>
                    <p className="text-sm text-base-content/70">Constitution progressive d'un capital</p>
                  </div>
                </div>
              </div>
            </PresentationCard>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-base-200/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">
              Ma <span className="text-primary font-medium">méthode</span> d'accompagnement
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Un processus structuré en 4 étapes pour un accompagnement personnalisé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-primary">1</span>
              </div>
              <h3 className="text-lg font-medium">Écoute & Analyse</h3>
              <p className="text-sm text-base-content/70">
                Compréhension de votre situation, vos objectifs et vos contraintes
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-primary">2</span>
              </div>
              <h3 className="text-lg font-medium">Diagnostic</h3>
              <p className="text-sm text-base-content/70">
                Audit complet de votre patrimoine et identification des opportunités
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-primary">3</span>
              </div>
              <h3 className="text-lg font-medium">Stratégie</h3>
              <p className="text-sm text-base-content/70">
                Élaboration d'un plan d'action personnalisé et adapté
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-primary">4</span>
              </div>
              <h3 className="text-lg font-medium">Suivi</h3>
              <p className="text-sm text-base-content/70">
                Accompagnement continu et ajustements selon l'évolution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">
              Pourquoi faire appel à un <span className="text-primary font-medium">conseiller</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Heart}
              title="Gain de Temps"
              description="Déléguez la complexité de la gestion patrimoniale à un expert qui connaît le marché"
            />
            <FeatureCard
              icon={Shield}
              title="Sécurité Juridique"
              description="Bénéficiez d'un conseil réglementé et d'une responsabilité professionnelle"
            />
            <FeatureCard
              icon={Target}
              title="Performance Optimisée"
              description="Maximisez vos rendements tout en maîtrisant les risques grâce à l'expertise"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card elegant-shadow-lg p-12 rounded-2xl">
            <h2 className="text-3xl font-light mb-6">
              Prêt à optimiser votre <span className="text-primary font-medium">patrimoine</span> ?
            </h2>
            <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
              Découvrez gratuitement et en quelques minutes les opportunités 
              d'optimisation de votre situation patrimoniale.
            </p>
            <Button 
              onClick={onStartQuiz}
              className="bg-primary hover:bg-primary/90 text-primary-content px-12 py-6 text-lg rounded-xl elegant-shadow-lg transition-all-smooth hover:elegant-shadow-xl hover:-translate-y-1"
            >
              Commencer ma simulation gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
