
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, User, Building, Phone, Shield, CheckCircle } from 'lucide-react';
import { LeadData } from '../types/quiz';
import { getQuizData, saveLeadData } from '../utils/storage';
import { useToast } from '@/hooks/use-toast';

interface LeadFormProps {
  onSubmit: () => void;
}

const LeadForm = ({ onSubmit }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    consentGdpr: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consentGdpr) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter le traitement de vos données personnelles.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const quizData = getQuizData();
      if (!quizData) {
        throw new Error('Quiz data not found');
      }

      const leadData: LeadData = {
        ...formData,
        quizData
      };

      // Save lead data locally
      saveLeadData(leadData);

      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Lead data submitted:', leadData);
      
      setIsSubmitted(true);
      
      toast({
        title: "Merci !",
        description: "Vos informations ont été envoyées avec succès. Vous recevrez votre rapport sous peu.",
      });

      // Redirect after showing success
      setTimeout(() => {
        onSubmit();
      }, 2000);

    } catch (error) {
      console.error('Error submitting lead data:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-8">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Merci !</h1>
          <p className="text-gray-600 text-lg mb-6">
            Votre rapport personnalisé vous sera envoyé par email dans les prochaines minutes.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm">
              📧 Vérifiez votre boîte email (et vos spams) pour recevoir votre rapport détaillé.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Recevez Votre Rapport Personnalisé
          </h1>
          <p className="text-gray-600 text-lg">
            Quelques informations pour vous envoyer vos recommandations détaillées
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl text-gray-800">
              <Mail className="h-5 w-5" />
              <span>Informations de contact</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Nom complet *</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Votre nom et prénom"
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email professionnel *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span>Entreprise</span>
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Nom de votre entreprise"
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Téléphone</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Votre numéro de téléphone"
                    className="bg-white"
                  />
                </div>
              </div>

              {/* GDPR Consent */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="gdpr"
                    checked={formData.consentGdpr}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, consentGdpr: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="gdpr" className="text-sm cursor-pointer flex items-start space-x-2">
                      <Shield className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        J'accepte que mes données personnelles soient traitées pour recevoir le rapport et des communications commerciales. *
                      </span>
                    </Label>
                    <p className="text-xs text-gray-600 ml-6">
                      Conformément au RGPD, vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données en nous contactant.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.consentGdpr}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  'Recevoir mon rapport gratuit'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Trust indicators */}
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>100% Sécurisé</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4" />
              <span>Conforme RGPD</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>Pas de spam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
