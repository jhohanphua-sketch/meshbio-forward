import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, DollarSign, Target } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      company: 'Parkway Shenton',
      result: 'Saved $200K and boosted revenue by 23%',
      description: 'Streamlined health screening processes and improved patient engagement through automated reporting.',
      metrics: [
        { label: 'Cost Savings', value: '$200K', icon: DollarSign },
        { label: 'Revenue Increase', value: '23%', icon: TrendingUp },
        { label: 'Efficiency Gain', value: '90%', icon: Target }
      ],
      industry: 'Private Healthcare',
      size: '50+ Clinics'
    },
    {
      company: 'Pramita Lab',
      result: 'Won back corporate clients with improved reporting',
      description: 'Enhanced diagnostic accuracy and client satisfaction through AI-powered health assessments.',
      metrics: [
        { label: 'Client Retention', value: '95%', icon: Target },
        { label: 'Report Quality', value: '40% ↑', icon: TrendingUp },
        { label: 'Processing Time', value: '60% ↓', icon: DollarSign }
      ],
      industry: 'Diagnostic Laboratory',
      size: 'Regional Network'
    },
    {
      company: 'Fullerton Health',
      result: 'Improved early risk detection by 30%',
      description: 'Deployed predictive analytics to identify high-risk patients earlier in the care continuum.',
      metrics: [
        { label: 'Early Detection', value: '30% ↑', icon: Target },
        { label: 'Patient Outcomes', value: '25% ↑', icon: TrendingUp },
        { label: 'Workflow Speed', value: '85% ↑', icon: DollarSign }
      ],
      industry: 'Occupational Health',
      size: 'Multi-country'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Impact Across Asia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading healthcare providers are already transforming their operations with Mesh Bio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="card-elevated group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-semibold">{study.industry}</span>
                  <span className="text-sm text-muted-foreground">{study.size}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                <p className="text-lg font-semibold text-success mb-3">{study.result}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {study.metrics.map((metric, metricIndex) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={metricIndex} className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center">
                        <IconComponent className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm font-medium">{metric.label}</span>
                      </div>
                      <span className="text-lg font-bold text-primary">{metric.value}</span>
                    </div>
                  );
                })}
              </div>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button size="lg" className="btn-hero">
            See More Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;