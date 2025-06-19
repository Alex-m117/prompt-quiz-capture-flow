
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Download,
  TrendingUp,
  Shield,
  PieChart,
  Building2,
  Star,
  ArrowDown,
  MousePointer,
  Users,
  Calculator,
  Target,
  Award,
  Briefcase,
  Heart
} from 'lucide-react';

const PortfolioPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const expertises = [
    { name: 'Gestion Patrimoniale', level: 95, icon: PieChart },
    { name: 'Investissements', level: 90, icon: TrendingUp },
    { name: 'Fiscalité', level: 85, icon: Calculator },
    { name: 'Assurance Vie', level: 92, icon: Shield },
    { name: 'Immobilier', level: 88, icon: Building2 }
  ];

  const services = [
    {
      title: 'Audit Patrimonial Complet',
      description: 'Analyse approfondie de votre situation financière et définition d\'une stratégie personnalisée',
      specialties: ['Bilan patrimonial', 'Optimisation fiscale', 'Stratégie d\'investissement'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Gestion de Portefeuille',
      description: 'Gestion active et passive de vos investissements selon votre profil de risque',
      specialties: ['Actions', 'Obligations', 'ETF', 'SCPI'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Planification Retraite',
      description: 'Construction d\'un plan retraite sur-mesure pour sécuriser votre avenir',
      specialties: ['PER', 'Assurance vie', 'Immobilier locatif'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Transmission Patrimoniale',
      description: 'Optimisation de la transmission de votre patrimoine à vos héritiers',
      specialties: ['Donation', 'Succession', 'SCI familiale'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Investissement Immobilier',
      description: 'Accompagnement dans vos projets d\'investissement immobilier',
      specialties: ['LMNP', 'Déficit foncier', 'Loi Pinel'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Protection Financière',
      description: 'Mise en place de solutions de protection pour vous et votre famille',
      specialties: ['Prévoyance', 'Assurance décès', 'Garantie dépendance'],
      image: '/placeholder.svg',
      link: '#'
    }
  ];

  const stats = [
    { value: '200M€', label: 'Actifs sous gestion' },
    { value: '500+', label: 'Clients accompagnés' },
    { value: '15 ans', label: 'D\'expérience' },
    { value: '98%', label: 'Satisfaction client' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 relative overflow-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1.2 : 0})`
        }}
      />

      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          style={{ transform: `translate(${-scrollY * 0.08}px, ${-scrollY * 0.03}px)` }}
        />
      </div>

      {/* Hero Section avec photo et présentation côte à côte */}
      <section className="min-h-screen flex items-center relative px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Photo avec effet parallax - Gauche */}
            <div className="relative">
              <div 
                className="relative"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 scale-105" />
                <div className="relative glass-card p-8 rounded-3xl elegant-shadow-lg">
                  <Avatar className="w-80 h-80 mx-auto glass-card elegant-shadow-lg border-4 border-primary/20">
                    <AvatarImage src="/placeholder.svg" alt="Sophie Martin - Gestionnaire de Patrimoine" className="object-cover" />
                    <AvatarFallback className="text-6xl font-bold bg-primary/10 text-primary">SM</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-success rounded-full border-6 border-base-100 animate-pulse flex items-center justify-center">
                    <Award className="w-6 h-6 text-base-100" />
                  </div>
                </div>
              </div>

              {/* Stats flottantes */}
              <div className="absolute -left-8 top-1/4 glass-card p-4 rounded-2xl elegant-shadow">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-base-content/70">Années</div>
              </div>
              <div className="absolute -right-8 bottom-1/4 glass-card p-4 rounded-2xl elegant-shadow">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-base-content/70">Clients</div>
              </div>
            </div>

            {/* Contenu - Droite */}
            <div 
              className="space-y-8"
              style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="secondary" className="glass-card">Certifiée AMF</Badge>
                  <Badge variant="secondary" className="glass-card">CGPI</Badge>
                  <Badge variant="secondary" className="glass-card">Expert Patrimoine</Badge>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-light text-primary mb-6 tracking-tight">
                  Sophie Martin
                </h1>
                
                <div className="text-2xl text-base-content/80 mb-6">
                  Gestionnaire de Patrimoine Indépendante
                </div>

                <p className="text-lg text-base-content/70 leading-relaxed mb-8">
                  Passionnée par la finance et l'accompagnement client, je mets mon expertise de 15 années 
                  au service de votre réussite patrimoniale. Mon approche personnalisée et bienveillante 
                  vous garantit des conseils adaptés à vos objectifs de vie.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="glass-card p-4 rounded-xl elegant-shadow text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-base-content/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links avec Hover Effects */}
              <div className="flex space-x-6 mb-8">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-500/10' },
                  { icon: Mail, href: '#', label: 'Email', color: 'hover:bg-primary/10' },
                  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500/10' }
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    className={`group relative p-4 glass-card elegant-shadow rounded-2xl hover:elegant-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 ${color}`}
                  >
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                    <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-base-content/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {label}
                    </span>
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="glass-card border border-primary/20 hover:bg-primary/90 rounded-full px-8">
                  <Download className="w-5 h-5 mr-2" />
                  Plaquette Commerciale
                </Button>
                <Button variant="outline" size="lg" className="glass-card border-primary/20 hover:bg-primary/10 rounded-full px-8">
                  <Target className="w-5 h-5 mr-2" />
                  Prendre RDV
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary/60" />
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16"
            style={{ transform: `translateY(${(scrollY - 800) * 0.1}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">Mes Expertises</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Une maîtrise complète des enjeux patrimoniaux pour vous accompagner efficacement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {expertises.map((expertise, index) => {
              const ExpertiseIcon = expertise.icon;
              return (
                <Card 
                  key={expertise.name} 
                  className="glass-card elegant-shadow hover:elegant-shadow-lg transition-all duration-500 group border-primary/10"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: `translateY(${(scrollY - 1000) * 0.05}px)` 
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <ExpertiseIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base-content">{expertise.name}</h3>
                        <div className="text-sm text-base-content/60">{expertise.level}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: scrollY > 800 ? `${expertise.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="glass-card p-8 rounded-3xl elegant-shadow-lg text-center">
            <h3 className="text-2xl font-light text-primary mb-6">Certifications & Agréments</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="glass-card px-4 py-2">Conseiller en Investissements Financiers (CIF)</Badge>
              <Badge variant="secondary" className="glass-card px-4 py-2">Intermédiaire en Assurance (IAS)</Badge>
              <Badge variant="secondary" className="glass-card px-4 py-2">CGPI Certifié</Badge>
              <Badge variant="secondary" className="glass-card px-4 py-2">Formation Continue AMF</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16"
            style={{ transform: `translateY(${(scrollY - 1400) * 0.1}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">Mes Services</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Un accompagnement sur-mesure pour tous vos projets patrimoniaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="glass-card elegant-shadow hover:elegant-shadow-lg transition-all duration-500 group overflow-hidden border-primary/10"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: `translateY(${(scrollY - 1600) * 0.03}px)` 
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button 
                    size="sm" 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-card border border-base-100/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-medium text-base-content mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base-content/70 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.specialties.map((specialty) => (
                      <Badge 
                        key={specialty} 
                        variant="secondary" 
                        className="text-xs glass-card border-primary/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">Ils me font confiance</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Sophie a transformé notre approche du patrimoine. Ses conseils personnalisés nous ont permis d'optimiser notre fiscalité tout en sécurisant notre retraite.",
                author: "Marie & Pierre D.",
                role: "Entrepreneurs"
              },
              {
                text: "Un accompagnement exceptionnel dans notre stratégie d'investissement immobilier. Sophie a su nous guider vers les meilleures opportunités.",
                author: "Jean-Claude M.",
                role: "Cadre dirigeant"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card elegant-shadow p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-base-content/80 mb-4 italic">"{testimonial.text}"</p>
                  <div className="text-sm">
                    <div className="font-medium text-primary">{testimonial.author}</div>
                    <div className="text-base-content/60">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="glass-card elegant-shadow-lg p-12 rounded-3xl"
            style={{ transform: `translateY(${(scrollY - 2800) * 0.05}px)` }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Construisons ensemble votre avenir patrimonial
            </h2>
            <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
              Votre projet mérite une attention particulière. Échangeons sur vos objectifs 
              et définissons la stratégie qui vous correspond.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
                <Users className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Button>
              <Button variant="outline" size="lg" className="glass-card border-primary/20 rounded-full px-8 hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5 mr-2" />
                Audit gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
