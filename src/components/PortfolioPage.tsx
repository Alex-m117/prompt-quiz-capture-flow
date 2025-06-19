
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
  Users,
  Calculator,
  Target,
  Award,
  Briefcase,
  Heart,
  ChevronRight,
  CheckCircle,
  Calendar,
  MessageSquare,
  Phone,
  MapPin,
  Globe
} from 'lucide-react';

const PortfolioPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const expertises = [
    { name: 'Gestion Patrimoniale', level: 95, icon: PieChart, color: 'from-primary to-secondary' },
    { name: 'Investissements', level: 90, icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
    { name: 'Fiscalité', level: 85, icon: Calculator, color: 'from-green-500 to-green-600' },
    { name: 'Assurance Vie', level: 92, icon: Shield, color: 'from-purple-500 to-purple-600' },
    { name: 'Immobilier', level: 88, icon: Building2, color: 'from-orange-500 to-orange-600' }
  ];

  const services = [
    {
      title: 'Audit Patrimonial Complet',
      description: 'Analyse approfondie de votre situation financière et définition d\'une stratégie personnalisée',
      features: ['Bilan patrimonial', 'Optimisation fiscale', 'Stratégie d\'investissement'],
      price: 'Sur devis',
      duration: '2-3 semaines',
      icon: Target
    },
    {
      title: 'Gestion de Portefeuille',
      description: 'Gestion active et passive de vos investissements selon votre profil de risque',
      features: ['Actions', 'Obligations', 'ETF', 'SCPI'],
      price: '1.5% annuel',
      duration: 'Suivi permanent',
      icon: TrendingUp
    },
    {
      title: 'Planification Retraite',
      description: 'Construction d\'un plan retraite sur-mesure pour sécuriser votre avenir',
      features: ['PER', 'Assurance vie', 'Immobilier locatif'],
      price: 'À partir de 2500€',
      duration: '1 mois',
      icon: Calendar
    }
  ];

  const testimonials = [
    {
      text: "Sophie a transformé notre approche du patrimoine. Ses conseils personnalisés nous ont permis d'optimiser notre fiscalité tout en sécurisant notre retraite.",
      author: "Marie & Pierre D.",
      role: "Entrepreneurs",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      text: "Un accompagnement exceptionnel dans notre stratégie d'investissement immobilier. Sophie a su nous guider vers les meilleures opportunités.",
      author: "Jean-Claude M.",
      role: "Cadre dirigeant",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      text: "Professionnalisme et expertise de très haut niveau. Je recommande vivement pour tous vos projets patrimoniaux.",
      author: "Isabelle R.",
      role: "Médecin libéral",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { value: '200M€', label: 'Actifs sous gestion', sublabel: 'En croissance de +25%' },
    { value: '500+', label: 'Clients accompagnés', sublabel: 'Depuis 2009' },
    { value: '15 ans', label: 'D\'expérience', sublabel: 'En gestion de patrimoine' },
    { value: '98%', label: 'Satisfaction client', sublabel: 'Enquête 2024' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 relative overflow-hidden">
      {/* Enhanced cursor follower */}
      <div 
        className="fixed w-8 h-8 bg-primary/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out blur-sm mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
          opacity: mousePosition.x > 0 ? 0.8 : 0
        }}
      />

      {/* Floating navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {['hero', 'about', 'services', 'testimonials', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
              activeSection === section ? 'bg-primary scale-125' : 'bg-primary/30'
            }`}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </div>

      {/* Enhanced floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl"
          style={{ transform: `translate(${-scrollY * 0.08}px, ${-scrollY * 0.03}px)` }}
        />
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Enhanced Photo Section */}
            <div className="relative group">
              <div 
                className="relative"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] rounded-3xl blur-2xl opacity-30 scale-105 animate-[gradient_8s_ease_infinite]" 
                     style={{ backgroundPosition: `${scrollY * 0.1}% 50%` }} />
                
                <div className="relative glass-card p-8 rounded-3xl elegant-shadow-lg overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:400%_400%] p-[2px] animate-[gradient_6s_ease_infinite]">
                    <div className="w-full h-full bg-base-100/90 rounded-3xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <Avatar className="w-80 h-80 mx-auto glass-card elegant-shadow-lg border-4 border-primary/20 group-hover:scale-105 transition-transform duration-500">
                      <AvatarImage src="/placeholder.svg" alt="Sophie Martin" className="object-cover" />
                      <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">SM</AvatarFallback>
                    </Avatar>
                    
                    {/* Enhanced floating badges */}
                    <div className="absolute -top-4 -left-4 glass-card p-3 rounded-2xl elegant-shadow animate-float">
                      <Award className="w-6 h-6 text-primary" />
                      <div className="text-xs font-medium mt-1">Certifiée</div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-2xl elegant-shadow animate-float" style={{ animationDelay: '1s' }}>
                      <CheckCircle className="w-6 h-6 text-success" />
                      <div className="text-xs font-medium mt-1">Expert</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating stats */}
              <div className="absolute -left-8 top-1/4 glass-card p-4 rounded-2xl elegant-shadow hover:elegant-shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-base-content/70">Années</div>
                <div className="text-xs text-primary/60">d'expertise</div>
              </div>
              <div className="absolute -right-8 bottom-1/4 glass-card p-4 rounded-2xl elegant-shadow hover:elegant-shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-base-content/70">Clients</div>
                <div className="text-xs text-primary/60">satisfaits</div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div 
              className="space-y-8"
              style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
            >
              <div>
                {/* Enhanced badges with animations */}
                <div className="flex items-center space-x-3 mb-6">
                  <Badge variant="secondary" className="glass-card hover:scale-105 transition-transform animate-fade-in">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Certifiée AMF
                  </Badge>
                  <Badge variant="secondary" className="glass-card hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <Award className="w-3 h-3 mr-1" />
                    CGPI
                  </Badge>
                  <Badge variant="secondary" className="glass-card hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <Star className="w-3 h-3 mr-1" />
                    Expert Patrimoine
                  </Badge>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-light text-primary mb-6 tracking-tight">
                  Sophie <span className="font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Martin</span>
                </h1>
                
                <div className="text-2xl text-base-content/80 mb-6 font-light">
                  Gestionnaire de Patrimoine <span className="text-primary">Indépendante</span>
                </div>

                <p className="text-lg text-base-content/70 leading-relaxed mb-8">
                  Passionnée par la finance et l'accompagnement client, je mets mon expertise de 
                  <span className="text-primary font-medium"> 15 années</span> au service de votre réussite patrimoniale. 
                  Mon approche <span className="text-secondary font-medium">personnalisée et bienveillante</span> vous garantit 
                  des conseils adaptés à vos objectifs de vie.
                </p>

                {/* Enhanced stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-4 rounded-xl elegant-shadow hover:elegant-shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">{stat.value}</div>
                      <div className="text-sm text-base-content/70">{stat.label}</div>
                      <div className="text-xs text-primary/60">{stat.sublabel}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4 mb-8">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-500/10', bgColor: 'bg-blue-500/5' },
                  { icon: Mail, href: '#', label: 'Email', color: 'hover:bg-primary/10', bgColor: 'bg-primary/5' },
                  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500/10', bgColor: 'bg-sky-500/5' },
                  { icon: Phone, href: '#', label: 'Téléphone', color: 'hover:bg-green-500/10', bgColor: 'bg-green-500/5' }
                ].map(({ icon: Icon, href, label, color, bgColor }, index) => (
                  <a
                    key={label}
                    href={href}
                    className={`group relative p-4 glass-card elegant-shadow rounded-2xl hover:elegant-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 ${color} ${bgColor}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                    <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-base-content/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-base-100 px-2 py-1 rounded-lg shadow-lg">
                      {label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="glass-card border border-primary/20 hover:bg-primary/90 rounded-full px-8 group hover:scale-105 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Plaquette Commerciale
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="glass-card border-primary/20 hover:bg-primary/10 rounded-full px-8 group hover:scale-105 transition-all duration-300">
                  <Target className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" />
                  Prendre RDV
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
            <div className="text-sm text-primary/60 animate-fade-in">Découvrez mon univers</div>
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16"
            style={{ transform: `translateY(${(scrollY - 800) * 0.1}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">
              Mon <span className="font-medium">Expertise</span>
            </h2>
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
                  className="glass-card elegant-shadow hover:elegant-shadow-lg transition-all duration-500 group border-primary/10 overflow-hidden relative"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: `translateY(${(scrollY - 1000) * 0.05}px)` 
                  }}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${expertise.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${expertise.color} bg-opacity-10 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <ExpertiseIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base-content group-hover:text-primary transition-colors">{expertise.name}</h3>
                        <div className="text-sm text-base-content/60">{expertise.level}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${expertise.color} rounded-full transition-all duration-1000 ease-out`}
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

          {/* Enhanced Certifications */}
          <div className="glass-card p-8 rounded-3xl elegant-shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 animate-[gradient_8s_ease_infinite]" />
            <div className="relative z-10">
              <h3 className="text-2xl font-light text-primary mb-6">Certifications & Agréments</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Conseiller en Investissements Financiers (CIF)',
                  'Intermédiaire en Assurance (IAS)',
                  'CGPI Certifié',
                  'Formation Continue AMF'
                ].map((cert, index) => (
                  <Badge 
                    key={cert} 
                    variant="secondary" 
                    className="glass-card px-4 py-2 hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16"
            style={{ transform: `translateY(${(scrollY - 1400) * 0.1}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">
              Mes <span className="font-medium">Services</span>
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Un accompagnement sur-mesure pour tous vos projets patrimoniaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="glass-card elegant-shadow hover:elegant-shadow-lg transition-all duration-500 group overflow-hidden border-primary/10 relative"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    transform: `translateY(${(scrollY - 1600) * 0.03}px)` 
                  }}
                >
                  {/* Enhanced header with icon */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <ServiceIcon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">{service.price}</div>
                        <div className="text-xs text-base-content/60">{service.duration}</div>
                      </div>
                    </div>
                    <h3 className="font-medium text-base-content mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-base-content/70 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={feature} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                          <span className="text-base-content/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300"
                    >
                      En savoir plus
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">
              Ils me font <span className="font-medium">confiance</span>
            </h2>
            <p className="text-xl text-base-content/70">
              Découvrez les témoignages de mes clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="glass-card elegant-shadow hover:elegant-shadow-lg transition-all duration-500 group p-6 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-base-content">{testimonial.author}</div>
                      <div className="text-sm text-base-content/60">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-base-content/80 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="glass-card elegant-shadow-lg p-12 rounded-3xl relative overflow-hidden"
            style={{ transform: `translateY(${(scrollY - 2800) * 0.05}px)` }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-[gradient_10s_ease_infinite]" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full animate-pulse">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
                Construisons ensemble votre <span className="font-medium">avenir patrimonial</span>
              </h2>
              
              <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Votre projet mérite une attention particulière. Échangeons sur vos objectifs 
                et définissons la stratégie qui vous correspond.
              </p>
              
              <div className="flex justify-center space-x-4 mb-8">
                <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform group">
                  <Users className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="glass-card border-primary/20 rounded-full px-8 hover:scale-105 transition-transform group">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Audit gratuit
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Contact info */}
              <div className="flex justify-center space-x-8 text-sm text-base-content/60">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>sophie@patrimoine-expert.fr</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
