import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
const CTASection = () => {
  const benefits = ['Free 30-minute consultation', 'Personalized demo with your data', 'ROI calculation for your organization', 'Implementation roadmap discussion'];
  return <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="max-w-4xl mx-auto text-center text-white" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }}>
            Ready to Transform Chronic Disease Care?
          </motion.h2>
          
          <motion.p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }}>
            Join leading healthcare providers already using Mesh Bio to save time, 
            improve outcomes, and scale chronic disease care.
          </motion.p>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }}>
            {benefits.map((benefit, index) => <motion.div key={index} className="flex items-center justify-center md:justify-start text-white/90" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.8 + index * 0.1,
            duration: 0.5
          }}>
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>)}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 1,
          duration: 0.6
        }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-white/30 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-slate-50 text-blue-600">
              Download Case Studies
            </Button>
          </motion.div>

          <motion.div className="mt-8 text-white/70 text-sm" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 1.2,
          duration: 0.6
        }}>
            No commitment required • Setup in 24 hours • HIPAA compliant
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default CTASection;