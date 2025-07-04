'use client';

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { 
  SparklesIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  TrophyIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  HeartIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

export function About() {
  const stats = [
    { value: "250+", label: "Projets réalisés" },
    { value: "150+", label: "Clients satisfaits" },
    { value: "5 ans", label: "D'expérience" },
    { value: "4.9/5", label: "Note moyenne" }
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: "Innovation",
      description: "Technologies IA et web de pointe"
    },
    {
      icon: ShieldCheckIcon,
      title: "Excellence",
      description: "Qualité et professionnalisme"
    },
    {
      icon: HeartIcon,
      title: "Passion",
      description: "Solutions digitales transformantes"
    },
    {
      icon: UserGroupIcon,
      title: "Collaboration",
      description: "Approche personnalisée"
    }
  ];

  const expertise = [
    { icon: CpuChipIcon, title: "IA & Agents", color: "text-qventis-coral" },
    { icon: ChartBarIcon, title: "Data Analytics", color: "text-blue-600" },
    { icon: GlobeAltIcon, title: "Sites Web", color: "text-green-600" },
    { icon: CodeBracketIcon, title: "Solutions IT", color: "text-purple-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-qventis-white to-qventis-gray-50">
      <Container>
        
        {/* Layout asymétrique comme Hero/Services - Version compacte */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Contenu principal - Gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            
            {/* Badge + Titre */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-qventis-coral/10 text-qventis-coral rounded-full text-sm font-medium border border-qventis-coral/20 mb-6">
                <SparklesIcon className="w-4 h-4" />
                <span>Notre histoire</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6">
                Qventis, votre partenaire digital
              </h2>
              <p className="text-xl text-qventis-gray-600 leading-relaxed mb-8">
                Nous transformons vos défis en opportunités de croissance grâce à l'IA, la Data et le développement web de pointe.
              </p>
            </div>

            {/* Mission compacte */}
            <div className="bg-white rounded-3xl border p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-qventis-coral/10 rounded-xl flex items-center justify-center">
                  <RocketLaunchIcon className="w-5 h-5 text-qventis-coral" />
                </div>
                <h3 className="text-xl font-display font-bold text-qventis-gray-900">
                  Notre mission
                </h3>
              </div>
              
              <p className="text-qventis-gray-700 leading-relaxed mb-4">
                Accompagner les entreprises dans leur transformation digitale avec des solutions sur-mesure alliant innovation et excellence opérationnelle.
              </p>

              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-qventis-coral/10 text-qventis-coral rounded-full text-sm font-medium">
                  Expertise technique
                </div>
                <div className="px-3 py-1 bg-qventis-gray-100 text-qventis-gray-700 rounded-full text-sm font-medium">
                  Accompagnement
                </div>
                <div className="px-3 py-1 bg-qventis-gray-100 text-qventis-gray-700 rounded-full text-sm font-medium">
                  Résultats
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="px-8 py-4 bg-qventis-coral hover:bg-qventis-coral-dark text-white rounded-xl font-semibold"
              >
                <TrophyIcon className="w-5 h-5 mr-2" />
                Voir nos réalisations
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 border-qventis-gray-200 text-qventis-gray-700 hover:bg-qventis-gray-50 rounded-xl font-semibold"
              >
                En savoir plus
              </Button>
            </div>
          </motion.div>

          {/* Visual compact avec animation verticale - Droite */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            
            {/* Container avec masque dégradé et animation */}
            <div className="relative h-[600px] overflow-hidden rounded-3xl">
              
              {/* Masque dégradé en haut */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-qventis-white to-transparent z-10 pointer-events-none" />
              
              {/* Masque dégradé en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-qventis-white to-transparent z-10 pointer-events-none" />
              
              {/* Contenu animé */}
              <motion.div
                animate={{
                  y: ["0%", "-100%"]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 py-8 px-2 space-y-6"
              >
                
                {/* Stats en haut */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-4 shadow-lg border border-qventis-gray-100 text-center"
                    >
                      <div className="text-2xl font-display font-bold text-qventis-coral mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-qventis-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Valeurs compactes */}
                <div className="bg-white rounded-3xl shadow-xl border border-qventis-gray-100 p-6">
                  <h4 className="font-display font-bold text-qventis-gray-900 mb-4 text-center">
                    Nos valeurs
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {values.map((value, index) => {
                      const IconComponent = value.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                          viewport={{ once: true }}
                          className="text-center p-3 hover:bg-qventis-gray-50 rounded-xl transition-colors"
                        >
                          <div className="w-8 h-8 bg-qventis-coral/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <IconComponent className="w-4 h-4 text-qventis-coral" />
                          </div>
                          <h5 className="font-semibold text-qventis-gray-900 text-sm mb-1">
                            {value.title}
                          </h5>
                          <p className="text-xs text-qventis-gray-600">
                            {value.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Expertise */}
                <div className="grid grid-cols-2 gap-3">
                  {expertise.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-4 shadow-lg border border-qventis-gray-100 text-center hover:shadow-xl transition-all"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                          index === 0 ? 'bg-qventis-coral/10' : 
                          index === 1 ? 'bg-blue-50' :
                          index === 2 ? 'bg-green-50' : 'bg-purple-50'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <h5 className="font-semibold text-qventis-gray-900 text-sm">
                          {item.title}
                        </h5>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Métriques additionnelles pour continuité */}
                <div className="bg-white/90 rounded-3xl shadow-xl border border-qventis-gray-100 p-6 backdrop-blur-sm">
                  <h4 className="font-display font-bold text-qventis-gray-900 mb-4 text-center">
                    Pourquoi Qventis ?
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 text-sm font-bold">✓</span>
                      </div>
                      <h5 className="font-semibold text-qventis-gray-900 text-sm mb-1">
                        Réactivité
                      </h5>
                      <p className="text-xs text-qventis-gray-600">
                        Réponse sous 24h
                      </p>
                    </div>
                    <div className="text-center p-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 text-sm font-bold">⚡</span>
                      </div>
                      <h5 className="font-semibold text-qventis-gray-900 text-sm mb-1">
                        Rapidité
                      </h5>
                      <p className="text-xs text-qventis-gray-600">
                        Livraison rapide
                      </p>
                    </div>
                    <div className="text-center p-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 text-sm font-bold">🎯</span>
                      </div>
                      <h5 className="font-semibold text-qventis-gray-900 text-sm mb-1">
                        Précision
                      </h5>
                      <p className="text-xs text-qventis-gray-600">
                        Solutions sur-mesure
                      </p>
                    </div>
                    <div className="text-center p-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-yellow-600 text-sm font-bold">⭐</span>
                      </div>
                      <h5 className="font-semibold text-qventis-gray-900 text-sm mb-1">
                        Excellence
                      </h5>
                      <p className="text-xs text-qventis-gray-600">
                        Qualité premium
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Stats dupliqués pour continuité d'animation */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={`dup-${index}`}
                      className="bg-white/80 rounded-2xl p-4 shadow-lg border border-qventis-gray-100 text-center backdrop-blur-sm"
                    >
                      <div className="text-2xl font-display font-bold text-qventis-coral mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-qventis-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
              </motion.div>
            </div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
