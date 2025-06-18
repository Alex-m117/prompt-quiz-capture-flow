
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BookOpen, Users, Target, Heart, Shield } from 'lucide-react';
import PresentationCard from '@/components/ui/PresentationCard';
import FeatureCard from '@/components/ui/FeatureCard';
import StatCard from '@/components/ui/StatCard';

interface AboutPageProps {
  onStartQuiz: () => void;
}

const AboutPage = ({ onStartQuiz }: AboutPageProps) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-light leading-tight">
                  <span className="text-primary font-medium">Sarah Martin</span>
                  <br />
                  Votre conseillère patrimoine
                </h1>
                <p className="text-xl text-base-content/80 leading-relaxed">
                  Diplômée en gestion de patrimoine et forte de 15 années d'expérience, 
                  je vous accompagne dans toutes les étapes de votre vie financière 
                  avec une approche humaine et personnalisée.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <StatCard value="2008" label="Début" sublabel="d'activité" />
                <StatCard value="CIF" label="Certification" sublabel="professionnelle" />
              </div>
            </div>

            <div className="relative">
              <div className="glass-card elegant-shadow-lg rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Sarah Martin"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-base-200/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">
              Mes <span className="text-primary font-medium">valeurs</span>
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Une relation de confiance basée sur la transparence, l'écoute et l'expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Heart}
              title="Écoute & Bienveillance"
              description="Chaque client est unique. Je prends le temps de comprendre vos besoins et vos objectifs personnels."
            />
            <FeatureCard
              icon={Shield}
              title="Transparence"
              description="Une communication claire sur les stratégies, les coûts et les risques de chaque recommandation."
            />
            <FeatureCard
              icon={Target}
              title="Excellence"
              description="Une formation continue et une veille permanente pour vous offrir les meilleures solutions du marché."
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">
              Mon <span className="text-primary font-medium">parcours</span>
            </h2>
          </div>

          <div className="space-y-8">
            <PresentationCard
              title="Formation & Certifications"
              description="Un socle solide pour vous conseiller en toute expertise"
              icon={BookOpen}
              variant="elevated"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Master en Gestion de Patrimoine</span>
                  <span className="text-primary">2007</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Certification CIF (Conseiller en Investissements Financiers)</span>
                  <span className="text-primary">2008</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Formation continue AMF</span>
                  <span className="text-primary">Annuelle</span>
                </div>
              </div>
            </PresentationCard>

            <PresentationCard
              title="Expérience Professionnelle"
              description="15 années au service de la gestion patrimoniale"
              icon={Award}
              variant="elevated"
            >
              <div className="space-y-4">
                <div className="py-3 border-l-2 border-primary pl-4">
                  <h4 className="font-medium text-primary">Conseillère Indépendante</h4>
                  <p className="text-sm text-base-content/70">2015 - Aujourd'hui</p>
                  <p className="mt-2">Accompagnement personnalisé de particuliers et professionnels dans l'optimisation de leur patrimoine.</p>
                </div>
                <div className="py-3 border-l-2 border-base-300 pl-4">
                  <h4 className="font-medium">Banque Privée - Conseillère Senior</h4>
                  <p className="text-sm text-base-content/70">2010 - 2015</p>
                  <p className="mt-2">Gestion d'un portefeuille de clients fortunés, expertise en investissements et optimisation fiscale.</p>
                </div>
                <div className="py-3 border-l-2 border-base-300 pl-4">
                  <h4 className="font-medium">Cabinet de Gestion - Conseillère Junior</h4>
                  <p className="text-sm text-base-content/70">2008 - 2010</p>
                  <p className="mt-2">Première expérience en conseil patrimonial, spécialisation en assurance-vie et retraite.</p>
                </div>
              </div>
            </PresentationCard>

            <PresentationCard
              title="Mes Spécialisations"
              description="Des domaines d'expertise pour répondre à tous vos besoins"
              icon={Users}
              variant="elevated"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Optimisation Fiscale</h4>
                  <ul className="text-sm space-y-1 text-base-content/70">
                    <li>• Réduction d'impôts</li>
                    <li>• Défiscalisation immobilière</li>
                    <li>• Optimisation ISF/IFI</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Investissements</h4>
                  <ul className="text-sm space-y-1 text-base-content/70">
                    <li>• Assurance-vie</li>
                    <li>• Immobilier locatif</li>
                    <li>• Placements financiers</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Retraite</h4>
                  <ul className="text-sm space-y-1 text-base-content/70">
                    <li>• Plans de retraite</li>
                    <li>• Épargne salariale</li>
                    <li>• Rentes viagères</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Transmission</h4>
                  <ul className="text-sm space-y-1 text-base-content/70">
                    <li>• Succession</li>
                    <li>• Donation</li>
                    <li>• Assurance décès</li>
                  </ul>
                </div>
              </div>
            </PresentationCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-base-200/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card elegant-shadow-lg p-12 rounded-2xl">
            <h2 className="text-3xl font-light mb-6">
              Construisons ensemble votre <span className="text-primary font-medium">stratégie</span>
            </h2>
            <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
              Faites le premier pas vers l'optimisation de votre patrimoine. 
              Notre simulation vous donnera un aperçu personnalisé des opportunités qui s'offrent à vous.
            </p>
            <Button 
              onClick={onStartQuiz}
              className="bg-primary hover:bg-primary/90 text-primary-content px-12 py-6 text-lg rounded-xl elegant-shadow-lg transition-all-smooth hover:elegant-shadow-xl hover:-translate-y-1"
            >
              Démarrer ma simulation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
