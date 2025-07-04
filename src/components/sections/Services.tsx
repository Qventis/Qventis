'use client';

import { motion } from 'framer-motion';
import { 
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Services() {
  const services = [
    {
      id: 'websites',
      title: 'Sites Web & E-commerce',
      subtitle: 'Présence digitale moderne',
      icon: GlobeAltIcon,
      description: 'Sites vitrines, boutiques en ligne et applications web responsives avec un design moderne et des performances optimisées.',
      features: [
        'Design responsive',
        'SEO optimisé',
        'Hébergement inclus',
        'Maintenance garantie'
      ],
      pricing: 'À partir de 1 200€',
      timeline: '2-4 semaines',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-agents',
      title: 'Agents IA Conversationnels',
      subtitle: 'Intelligence artificielle',
      icon: CpuChipIcon,
      description: 'Chatbots intelligents, assistants virtuels et agents IA personnalisés pour automatiser vos interactions clients.',
      features: [
        'IA conversationnelle',
        'Intégration multicanal',
        'Apprentissage continu',
        'Support 24/7'
      ],
      pricing: 'À partir de 2 500€',
      timeline: '3-5 semaines',
      color: 'from-qventis-coral to-pink-500'
    },
    {
      id: 'data-analytics',
      title: 'Analyse & Visualisation',
      subtitle: 'Business Intelligence',
      icon: ChartBarIcon,
      description: 'Dashboards interactifs, analyse de données avancée et rapports automatisés pour optimiser vos décisions.',
      features: [
        'Tableaux de bord temps réel',
        'Analyses prédictives',
        'Rapports automatisés',
        'API intégration'
      ],
      pricing: 'À partir de 1 800€',
      timeline: '2-3 semaines',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 'custom-dev',
      title: 'Développement Sur-mesure',
      subtitle: 'Solutions personnalisées',
      icon: CodeBracketIcon,
      description: 'Applications métier, algorithmes spécialisés et intégrations API pour répondre à vos besoins spécifiques.',
      features: [
        'Code sur-mesure',
        'Architecture scalable',
        'Tests & documentation',
        'Formation incluse'
      ],
      pricing: 'Devis personnalisé',
      timeline: '4-8 semaines',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-qventis-white to-qventis-gray-50">
      <Container>
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-qventis-coral/10 rounded-full mb-6">
            <StarIcon className="w-4 h-4 text-qventis-coral" />
            <span className="text-sm font-semibold text-qventis-coral">Nos Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6">
            Solutions digitales
            <span className="text-qventis-coral"> complètes</span>
          </h2>
          
          <p className="text-xl text-qventis-gray-600 leading-relaxed">
            De la création de sites web aux agents IA, nous développons des solutions 
            sur-mesure pour digitaliser et optimiser votre activité.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-qventis-gray-100 hover:border-qventis-coral/20"
              >
                {/* Service header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-qventis-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-qventis-coral">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-qventis-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-qventis-coral flex-shrink-0" />
                      <span className="text-sm text-qventis-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Timeline */}
                <div className="flex items-center justify-between pt-6 border-t border-qventis-gray-100">
                  <div>
                    <div className="text-lg font-bold text-qventis-gray-900">
                      {service.pricing}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-qventis-gray-500">
                      <ClockIcon className="w-4 h-4" />
                      {service.timeline}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-qventis-coral hover:bg-qventis-coral/10 group/btn"
                  >
                    En savoir plus
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-qventis-coral/5 to-qventis-coral/10 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-qventis-gray-900 mb-4">
            Besoin d'une solution personnalisée ?
          </h3>
          <p className="text-lg text-qventis-gray-600 mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Parlons de vos besoins spécifiques 
            et créons ensemble la solution parfaite pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="coral"
              size="lg"
              className="px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Demander un devis
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-4 text-lg font-semibold text-qventis-coral hover:bg-qventis-coral/10"
            >
              Planifier un appel
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
