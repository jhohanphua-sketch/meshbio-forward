import { motion } from 'framer-motion';
import { Zap, Heart, FlaskConical } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      title: 'Workflow Automation',
      description: 'Save clinician time with automated reporting and streamlined diagnostic processes.',
      benefits: [
        'Reduce manual report generation by 90%',
        'Standardise diagnostic workflows',
        'Minimise administrative burden',
        'Focus more time on patient care'
      ],
      icon: Zap,
      color: 'primary'
    },
    {
      title: 'Patient Engagement',
      description: 'Improve adherence with clear, personalised insights and actionable recommendations.',
      benefits: [
        'Personalised health reports',
        'Clear risk communication',
        'Treatment adherence tracking',
        'Improved patient outcomes'
      ],
      icon: Heart,
      color: 'secondary'
    },
    {
      title: 'Pharma Development',
      description: 'Accelerate clinical trials with predictive analytics and patient stratification tools.',
      benefits: [
        'Enhanced patient recruitment',
        'Predictive biomarker analysis',
        'Risk stratification models',
        'Faster trial completion'
      ],
      icon: FlaskConical,
      color: 'success'
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designed for Healthcare Providers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI solutions address the most critical challenges in modern healthcare delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            const colorClass = useCase.color === 'primary' ? 'text-primary' : 
                             useCase.color === 'secondary' ? 'text-secondary' : 'text-success';
            
            return (
              <motion.div
                key={index}
                className="card-feature text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${useCase.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${colorClass}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <ul className="space-y-3 text-left">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <motion.li 
                      key={benefitIndex} 
                      className="flex items-start text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (benefitIndex * 0.1), duration: 0.4 }}
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${useCase.color === 'primary' ? 'bg-primary' : useCase.color === 'secondary' ? 'bg-secondary' : 'bg-success'}`} />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;