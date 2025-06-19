
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
  Code,
  Palette,
  Smartphone,
  Globe,
  Star,
  ArrowDown,
  MousePointer
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

  const skills = [
    { name: 'React', level: 95, icon: Code },
    { name: 'TypeScript', level: 90, icon: Code },
    { name: 'UI/UX Design', level: 85, icon: Palette },
    { name: 'Mobile Dev', level: 80, icon: Smartphone },
    { name: 'Web Design', level: 92, icon: Globe }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Application de commerce électronique moderne avec paiements intégrés',
      tech: ['React', 'Node.js', 'Stripe'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Portfolio Designer',
      description: 'Outil de création de portfolios avec drag & drop',
      tech: ['Vue.js', 'Firebase', 'Tailwind'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Application bancaire mobile sécurisée et intuitive',
      tech: ['React Native', 'TypeScript', 'AWS'],
      image: '/placeholder.svg',
      link: '#'
    }
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

      {/* Hero Section with Parallax */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Profile Avatar with Glass Effect */}
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 scale-110" />
            <Avatar className="w-32 h-32 mx-auto relative glass-card elegant-shadow-lg border-4 border-primary/20">
              <AvatarImage src="/placeholder.svg" alt="Profile" className="object-cover" />
              <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">JD</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-base-100 animate-pulse" />
          </div>

          {/* Animated Name */}
          <div 
            className="mb-6"
            style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
          >
            <h1 className="text-6xl md:text-8xl font-light text-primary mb-4 tracking-tight">
              John Doe
            </h1>
            <div className="text-xl md:text-2xl text-base-content/70 mb-2">
              Développeur Full-Stack & Designer UI/UX
            </div>
            <div className="flex justify-center space-x-2 mb-8">
              <Badge variant="secondary" className="glass-card">Créatif</Badge>
              <Badge variant="secondary" className="glass-card">Innovant</Badge>
              <Badge variant="secondary" className="glass-card">Passionné</Badge>
            </div>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Mail, href: '#', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group relative p-4 glass-card elegant-shadow rounded-2xl hover:elegant-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110"
              >
                <Icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-base-content/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4 mb-16">
            <Button size="lg" className="glass-card border border-primary/20 hover:bg-primary/90 rounded-full px-8">
              <Download className="w-5 h-5 mr-2" />
              Télécharger CV
            </Button>
            <Button variant="outline" size="lg" className="glass-card border-primary/20 hover:bg-primary/10 rounded-full px-8">
              <Mail className="w-5 h-5 mr-2" />
              Me Contacter
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary/60 mx-auto" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16"
            style={{ transform: `translateY(${(scrollY - 800) * 0.1}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">Compétences</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Une expertise technique solide combinée à une vision créative
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <Card 
                  key={skill.name} 
                  className="glass-card elegant-shadow hover:elegant-shadow-lg transition-all duration-500 group border-primary/10"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: `translateY(${(scrollY - 1000) * 0.05}px)` 
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <SkillIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base-content">{skill.name}</h3>
                        <div className="text-sm text-base-content/60">{skill.level}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: scrollY > 800 ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16"
            style={{ transform: `translateY(${(scrollY - 1400) * 0.1}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">Projets</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Découvrez mes réalisations les plus marquantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="glass-card elegant-shadow hover:elegant-shadow-lg transition-all duration-500 group overflow-hidden border-primary/10"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: `translateY(${(scrollY - 1600) * 0.03}px) rotateY(${mousePosition.x * 0.01}deg)` 
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
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
                    {project.title}
                  </h3>
                  <p className="text-base-content/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs glass-card border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
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
            style={{ transform: `translateY(${(scrollY - 2200) * 0.05}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
              Vous avez un projet en tête ? Discutons de la façon dont nous pouvons le concrétiser ensemble.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 mr-2" />
                Démarrer un projet
              </Button>
              <Button variant="outline" size="lg" className="glass-card border-primary/20 rounded-full px-8 hover:scale-105 transition-transform">
                <MousePointer className="w-5 h-5 mr-2" />
                Voir plus
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
