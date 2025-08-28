import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TrustedBySection from '@/components/TrustedBySection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, CheckCircle, Clock, Heart, Users, FileText, TrendingUp, Shield, BarChart3, Target, Activity, User, Clipboard, Zap } from 'lucide-react';

const HealthScreening = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Clinical Workflow Automation",
      description: "DARA helps primary care providers, health screening centres and hospitals save time by automating complex and tedious risk analysis.",
      highlights: ["Report Generated in less than 20 sec", "Improved Turnaround Time"]
    },
    {
      icon: Clipboard,
      title: "Holistic Patient Assessment", 
      description: "DARA's risk assessment algorithms are based on gold standards which complies with your local clinical practice guidelines.",
      highlights: ["Quality of Care", "Personalized Care Delivery"]
    },
    {
      icon: User,
      title: "Patient-centric Visualization",
      description: "DARA allows patients an easy understanding of their laboratory reports, while engaging the high risk patients for follow-ups.", 
      highlights: ["Health Ownership", "Health Upkeep"]
    }
  ];

  const features = [
    { 
      icon: FileText, 
      title: "Patient-centric Reports",
      description: "DARA summarises key findings from patient's health screening results for easy interpretation, understanding, increasing engagement."
    },
    { 
      icon: Target, 
      title: "Best Practice and Actionable Recommendations",
      description: "Clinical and lifestyle recommendations engine covering thousands of medical scenarios, can be customized to direct patients to targeted care and wellness services."
    },
    { 
      icon: TrendingUp, 
      title: "Up to 10 years of disease risk projection",
      description: "Patient's risk trends are projected for the next 10 years to help them better understand the implications of their lifestyle on health."
    },
    { 
      icon: Activity, 
      title: "Multiple disease datapoints at a glance",
      description: "Risk of diseases such as cardiovascular disease, diabetes and hypertension can be analyzed in a single report."
    },
    { 
      icon: BarChart3, 
      title: "Population health score aggregation",
      description: "Aggregate population health data for comprehensive insights and analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* DARA Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-white"
          >
            <motion.div 
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              DARA<sup className="text-3xl">®</sup>
            </motion.div>

            <motion.h1 
              className="text-2xl md:text-4xl font-medium mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Predictive Analytics and Clinical Workflow Automation
            </motion.h1>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Health Screening
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* Health Screening Module Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600">
              Health Screening Module
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              DARA's Health Screening Module revolutionalises health digitalisation by translating clinical data and numbers into actionable insights that help patients better manage their health, lifestyle, and disease risk through <strong>Predictive Analytics & Clinical Workflow Automation.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <benefit.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center justify-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Covers patient's entire health screening journey from registration to report delivery
          </motion.h2>
        </div>
      </section>

      {/* Get a Free Demo Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600">
              Get a Free Demo
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Discover why healthcare providers trust Mesh Bio's AI analytics to improve chronic disease management and patient outcomes with data-driven insights.
            </p>

            <div className="text-left max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
              <p className="text-lg text-muted-foreground mb-6">
                In your free consultation with our expert, we will explore:
              </p>
              
              <div className="space-y-4">
                {[
                  "Your unique healthcare needs and how Mesh Bio's predictive analytics can optimize patient management.",
                  "Examples of AI-driven insights that improve chronic disease intervention and reduce hospital readmissions.", 
                  "Specialized solutions for diabetes, cardiovascular disease, and metabolic disorders, tailored to enhance clinical efficiency."
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Testimonial</h2>
            <div className="flex justify-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed italic">
              "As Medical Director of a busy health screening center, I had 2 concerns I needed to address - 
              With an influx of patients, how can my manpower cope amidst the tedious work of manual collation? 
              Most of all, how do we better support our patient's health by getting health screening reports out accurately and on time. 
              Whilst it is a constant work in progress to better serve my patients, the Meshbio team and solution has been an amazing help. 
              I was able to <strong>triple</strong> my patient capacity and cut down my reports collation time by a third all in a span of <strong>6 months</strong>"
            </blockquote>
            <cite className="text-lg font-semibold text-foreground">
              — Dr. Julian Hong, Medical Director
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-600">
              Features
            </h2>

            <div className="space-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Experience the Power of DARA in Action
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Discover how our intelligent solutions can streamline your clinical workflows, improve patient outcomes, and empower your healthcare team.
            </p>
            
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthScreening;