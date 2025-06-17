
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Award, 
  Users, 
  TrendingUp, 
  Heart, 
  Target, 
  CheckCircle, 
  Calculator,
  PieChart,
  Building,
  Banknote,
  FileText,
  Phone,
  Mail,
  MapPin,
  Star
} from 'lucide-react';

interface ServicesPageProps {
  onStartQuiz: () => void;
}

const ServicesPage = ({ onStartQuiz }: ServicesPageProps) => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* SEO Optimized Header */}
      <header className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-royal-600 to-royal-800 bg-clip-text text-transparent">
              Conseillère en Gestion de Patrimoine
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Découvrez comment un conseiller en gestion de patrimoine peut transformer votre avenir financier 
            à travers une approche personnalisée et des stratégies d'investissement adaptées à vos objectifs.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* What is Wealth Management - Hero Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Qu'est-ce qu'un Conseiller en Gestion de Patrimoine ?
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Un <strong className="text-foreground">conseiller en gestion de patrimoine</strong> est un professionnel 
                qualifié qui accompagne les particuliers et les professionnels dans l'optimisation, 
                la protection et la transmission de leur patrimoine.
              </p>
              
              <p>
                Véritable architecte financier, il analyse votre situation globale pour concevoir 
                des stratégies sur-mesure qui répondent à vos objectifs de vie : 
                <span className="text-royal-600 font-semibold"> préparation de la retraite, optimisation fiscale, 
                transmission familiale, constitution d'un capital</span>.
              </p>
              
              <p>
                Grâce à une approche holistique, il coordonne tous les aspects de votre patrimoine : 
                immobilier, financier, professionnel et personnel, pour maximiser votre potentiel 
                de croissance tout en maîtrisant les risques.
              </p>
            </div>

            <Button 
              onClick={onStartQuiz}
              className="bg-royal-600 hover:bg-royal-700 text-white rounded-full px-8 py-3 text-lg"
            >
              Démarrer mon analyse patrimoniale gratuite
            </Button>
          </div>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-royal-50 to-royal-100 dark:from-royal-950/20 dark:to-royal-900/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-8">Expertise Certifiée</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, title: "Certifié CGPI", desc: "Conseiller en Gestion de Patrimoine Indépendant" },
                    { icon: Award, title: "ORIAS", desc: "Immatriculé sous le n°XX-XXX-XXX" },
                    { icon: Users, title: "ANACOFI", desc: "Membre de l'Association Nationale" },
                    { icon: Star, title: "200+ Clients", desc: "Accompagnés avec succès" }
                  ].map((item, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="w-12 h-12 bg-royal-100 dark:bg-royal-900/30 rounded-full flex items-center justify-center mx-auto">
                        <item.icon className="h-6 w-6 text-royal-600" />
                      </div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Services */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Mes Domaines d'Expertise en Gestion de Patrimoine
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: "Optimisation Fiscale",
                description: "Réduction d'impôts, défiscalisation immobilière (Malraux, LMNP, Censi-Bouvard), optimisation ISF/IFI",
                benefits: ["Économies fiscales immédiates", "Stratégies légales éprouvées", "Suivi annuel personnalisé"]
              },
              {
                icon: PieChart,
                title: "Placements Financiers",
                description: "Assurance-vie, PER, SCPI, actions, obligations, gestion pilotée adaptée à votre profil de risque",
                benefits: ["Diversification optimale", "Performance maîtrisée", "Liquidité préservée"]
              },
              {
                icon: Building,
                title: "Investissement Immobilier",
                description: "SCPI, SCI, investissement locatif, résidence principale, immobilier d'entreprise",
                benefits: ["Rendements attractifs", "Effet de levier", "Patrimoine tangible"]
              },
              {
                icon: Shield,
                title: "Protection Sociale",
                description: "Prévoyance, mutuelle, assurance décès, invalidité, garanties adaptées à votre situation familiale",
                benefits: ["Sécurité financière", "Protection familiale", "Tranquillité d'esprit"]
              },
              {
                icon: Heart,
                title: "Transmission Patrimoine",
                description: "Succession, donation, assurance-vie, SCI familiale, optimisation des droits de succession",
                benefits: ["Préservation familiale", "Fiscalité optimisée", "Sérénité transgénérationnelle"]
              },
              {
                icon: TrendingUp,
                title: "Préparation Retraite",
                description: "PER, PERP, PERCO, épargne retraite, estimation revenus futurs, stratégies de rente",
                benefits: ["Retraite confortable", "Revenus complémentaires", "Indépendance financière"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-royal-100 dark:bg-royal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-royal-600 group-hover:text-white transition-all duration-300">
                    <service.icon className="h-8 w-8 text-royal-600 group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-royal-600 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gradient-to-br from-royal-50 to-royal-100 dark:from-royal-950/10 dark:to-royal-900/10 rounded-3xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Ma Méthodologie d'Accompagnement
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse Patrimoniale Complète",
                description: "Audit de votre situation actuelle : revenus, charges, patrimoine, objectifs, contraintes et opportunités.",
                icon: FileText
              },
              {
                step: "02", 
                title: "Stratégie Personnalisée",
                description: "Conception d'un plan d'action sur-mesure avec recommandations précises et chiffrées.",
                icon: Target
              },
              {
                step: "03",
                title: "Mise en Œuvre",
                description: "Accompagnement dans la réalisation : sélection des supports, formalités, optimisation.",
                icon: CheckCircle
              },
              {
                step: "04",
                title: "Suivi & Optimisation",
                description: "Points réguliers, adaptations selon l'évolution de votre situation et des marchés.",
                icon: TrendingUp
              }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-royal-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-royal-100 dark:bg-royal-900/30 rounded-full flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-royal-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Pourquoi Choisir un Conseiller en Gestion de Patrimoine ?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Expertise Technique Pointue",
                  description: "Maîtrise approfondie de la fiscalité, du droit, de la finance et de l'immobilier pour optimiser chaque aspect de votre patrimoine."
                },
                {
                  title: "Vision Globale & Prospective", 
                  description: "Approche holistique qui prend en compte tous vos projets de vie et anticipe les évolutions réglementaires."
                },
                {
                  title: "Gain de Temps Considérable",
                  description: "Délégation de la veille, de l'analyse et de la gestion administrative pour vous concentrer sur l'essentiel."
                },
                {
                  title: "Neutralité & Indépendance",
                  description: "Conseils objectifs sans conflit d'intérêt, sélection des meilleures solutions du marché pour votre profil."
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

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Résultats Clients</h3>
                
                <div className="space-y-6">
                  {[
                    { metric: "32%", label: "Économie fiscale moyenne", icon: Banknote },
                    { metric: "8.2%", label: "Rendement moyen portfolio", icon: TrendingUp },
                    { metric: "15 ans", label: "Expérience professionnelle", icon: Award },
                    { metric: "98%", label: "Taux de satisfaction client", icon: Heart }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-royal-100 dark:bg-royal-900/30 rounded-full flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-royal-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-royal-600">{stat.metric}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button 
                    onClick={onStartQuiz}
                    className="w-full bg-royal-600 hover:bg-royal-700 text-white rounded-full py-3"
                  >
                    Obtenir mon diagnostic patrimonial gratuit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Questions Fréquentes sur la Gestion de Patrimoine
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                question: "À partir de quel montant consulter un conseiller en gestion de patrimoine ?",
                answer: "Il n'y a pas de montant minimum. Que vous ayez 50 000€ ou 5 millions€, l'important est d'avoir des objectifs patrimoniaux et le souhait d'optimiser sa situation fiscale et financière."
              },
              {
                question: "Quelle est la différence avec un banquier ou un courtier ?",
                answer: "Le conseiller en gestion de patrimoine offre une approche globale et indépendante, sans se limiter aux produits d'une seule banque. Il coordonne tous les aspects : fiscal, juridique, financier et immobilier."
              },
              {
                question: "Comment sont rémunérés les conseillers en gestion de patrimoine ?",
                answer: "La rémunération peut être sous forme d'honoraires, de commissions sur les produits souscrits, ou un mix des deux. La transparence totale sur les coûts est garantie dès le premier rendez-vous."
              },
              {
                question: "À quelle fréquence faire le point sur son patrimoine ?",
                answer: "Un bilan annuel est recommandé, avec des points intermédiaires en cas d'évolution significative de votre situation (mariage, naissance, héritage, changement professionnel)."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-royal-600">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center bg-gradient-to-r from-royal-600 to-royal-800 text-white rounded-3xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à Optimiser Votre Patrimoine ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Découvrez votre potentiel d'optimisation patrimoniale en moins de 5 minutes 
            avec notre simulation gratuite et personnalisée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onStartQuiz}
              className="bg-white text-royal-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold"
            >
              Démarrer ma simulation gratuite
            </Button>
            
            <div className="flex items-center space-x-4 text-sm opacity-75">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>01 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@patrimoine-expert.fr</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;
