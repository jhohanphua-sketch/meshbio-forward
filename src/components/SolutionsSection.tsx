import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, TrendingUp, Users, Shield } from 'lucide-react';
import solutionsBg from '@/assets/solutions-bg.jpg';

const SolutionsSection = () => {
  const solutions = [
    {
      name: 'DARA®',
      subtitle: 'Automated Health Screening',
      description: 'AI-powered automated health screening reports that save clinician time and improve diagnostic accuracy.',
      features: [
        'Automated report generation',
        'Risk stratification',
        'Clinical decision support',
        'Integration with existing workflows'
      ],
      icon: Brain,
      gradient: 'from-primary to-secondary'
    },
    {
      name: 'HealthVector®',
      subtitle: 'Diabetes Prediction',
      description: 'Predictive disease progression tool for managing chronic conditions and optimizing patient outcomes.',
      features: [
        'Disease progression modeling',
        'Personalized risk assessment',
        'Treatment optimization',
        'Patient engagement tools'
      ],
      icon: TrendingUp,
      gradient: 'from-secondary to-success'
    }
  ];

  const workflow = [
    { step: 'Data Collection', description: 'Gather patient health data from multiple sources', icon: Users },
    { step: 'AI Analysis', description: 'Process data through advanced machine learning models', icon: Brain },
    { step: 'Actionable Insights', description: 'Generate personalized recommendations and reports', icon: Shield }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Chronic Disease Care with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our suite of AI-powered solutions empowers healthcare providers to deliver 
            better patient outcomes through predictive analytics and automated workflows.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.name}
                className="card-feature group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
                <h4 className="text-lg text-primary font-semibold mb-4">{solution.subtitle}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Visualization */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="rounded-2xl p-12 bg-gradient-to-r from-primary/5 to-secondary/5 border"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url(${solutionsBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workflow.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{item.step}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                    
                    {/* Arrow connector */}
                    {index < workflow.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full">
                        <ArrowRight className="h-6 w-6 text-primary mx-auto" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button size="lg" className="btn-hero">
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;