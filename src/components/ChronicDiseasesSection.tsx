import { motion } from 'framer-motion';
import { Heart, Activity, Droplets, Circle, Hexagon, Brain, Stethoscope } from 'lucide-react';

const ChronicDiseasesSection = () => {
  const diseases = [
    { name: 'Cardiovascular Disease', icon: Heart, color: 'text-red-500' },
    { name: 'Hypertension', icon: Activity, color: 'text-orange-500' },
    { name: 'Diabetes', icon: Droplets, color: 'text-blue-500' },
    { name: 'Fatty Liver', icon: Circle, color: 'text-yellow-500' },
    { name: 'Kidney Disease', icon: Hexagon, color: 'text-purple-500' },
    { name: 'Myocardial Infarction', icon: Stethoscope, color: 'text-red-600' },
    { name: 'Stroke', icon: Brain, color: 'text-pink-500' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chronic Diseases We Address
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI models are trained to detect and predict progression across major chronic conditions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {diseases.map((disease, index) => {
            const IconComponent = disease.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`h-8 w-8 ${disease.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-sm font-semibold text-center leading-tight">
                  {disease.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Early Detection Saves Lives</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our predictive models can identify at-risk patients up to 5 years before clinical diagnosis, 
              enabling proactive intervention and significantly improving patient outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChronicDiseasesSection;