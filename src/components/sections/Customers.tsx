'use client';

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { 
  StarIcon,
  ArrowRightIcon,
  TrophyIcon,
  BuildingOfficeIcon,
  HeartIcon,
  BoltIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

export function Customers() {
  const recentClients = [
    {
      name: "TechFlow",
      logo: "🚀",
      industry: "E-commerce",
      project: "Site web + IA",
      result: "+180% conversions",
      testimonial: {
        quote: "Qventis a transformé notre présence digitale. Résultats exceptionnels !",
        author: "Sarah Martinez",
        role: "CEO",
        rating: 5,
        image: "👩‍💼"
      },
      metrics: {
        timeline: "45 jours",
        satisfaction: "98%",
        roi: "+240%"
      },
      tags: ["E-commerce", "IA", "Analytics"]
    },
    {
      name: "DataCorp",
      logo: "📊",
      industry: "Analytics",
      project: "Dashboard BI",
      result: "40% décisions optimisées",
      testimonial: {
        quote: "L'équipe Qventis comprend parfaitement nos enjeux data et business.",
        author: "Marc Dubois",
        role: "CTO",
        rating: 5,
        image: "👨‍💻"
      },
      metrics: {
        timeline: "28 jours",
        satisfaction: "97%",
        roi: "+160%"
      },
      tags: ["Data", "BI", "Analytics"]
    },
    {
      name: "InnoLab",
      logo: "🧪",
      industry: "R&D",
      project: "Agent IA custom",
      result: "70% productivité",
      testimonial: {
        quote: "Innovation remarquable. L'IA développée dépasse nos attentes.",
        author: "Julie Chen",
        role: "Head of Innovation",
        rating: 5,
        image: "👩‍🔬"
      },
      metrics: {
        timeline: "42 jours", 
        satisfaction: "96%",
        roi: "+310%"
      },
      tags: ["IA", "Innovation", "Automation"]
    }
  ];

  const trustMetrics = [
    { icon: BuildingOfficeIcon, value: '250+', label: 'Entreprises' },
    { icon: StarIcon, value: '4.9/5', label: 'Satisfaction' },
    { icon: TrophyIcon, value: '99%', label: 'Succès' },
    { icon: HeartIcon, value: '95%', label: 'Fidélité' }
  ];

  return (
    <section id="customers" className="py-12 bg-gradient-to-b from-qventis-gray-50 to-qventis-white">
      <Container>
        
        {/* Header Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-qventis-gray-900 mb-4">
            Ils nous font <span className="text-qventis-coral">confiance</span>
          </h2>
          
          {/* Trust metrics inline */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-qventis-gray-700">
                  <IconComponent className="w-4 h-4 text-qventis-coral" />
                  <span className="font-semibold">{metric.value}</span>
                  <span>{metric.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Clients - Compact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {recentClients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-qventis-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header client */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-qventis-coral/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {client.logo}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-qventis-gray-900">{client.name}</div>
                  <div className="text-sm text-qventis-gray-600">{client.industry}</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(client.testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Projet */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-qventis-gray-900 mb-2">{client.project}</div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-green-700 text-sm font-semibold mb-1">
                    <TrophyIcon className="w-4 h-4" />
                    Résultat
                  </div>
                  <div className="text-green-800 font-bold">{client.result}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {client.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-qventis-gray-50 text-qventis-gray-600 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Témoignage compact */}
              <div className="border-l-4 border-qventis-coral/20 pl-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">{client.testimonial.image}</span>
                  <div className="text-sm font-semibold text-qventis-gray-900">{client.testimonial.author}</div>
                </div>
                <blockquote className="text-sm text-qventis-gray-700 italic">
                  "{client.testimonial.quote.substring(0, 60)}..."
                </blockquote>
              </div>

              {/* Métriques rapides */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-qventis-gray-50 rounded-lg">
                  <div className="text-sm font-bold text-qventis-coral">{client.metrics.satisfaction}</div>
                  <div className="text-xs text-qventis-gray-600">Satisfaction</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-sm font-bold text-blue-600">{client.metrics.timeline}</div>
                  <div className="text-xs text-blue-600">Délai</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
