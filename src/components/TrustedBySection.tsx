import { motion } from 'framer-motion';
import { Award, Building2, Newspaper, Users } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrustedBySection = () => {
  const partners = [
    'Enterprise Singapore',
    'Singapore Health Group',
    'Asian Medical Centre',
    'Health Innovation Lab',
    'Digital Health Alliance',
    'Medical Technology Partners'
  ];

  const recognitions = [
    {
      title: "Forbes Asia '100 to Watch'",
      description: 'Featured among Asia\'s most promising health-tech companies',
      icon: Award,
      year: '2024'
    },
    {
      title: 'Tech in Asia Feature',
      description: 'Spotlight on AI innovation in chronic disease management',
      icon: Newspaper,
      year: '2024'
    },
    {
      title: 'Business Times Coverage',
      description: 'Healthcare transformation through predictive analytics',
      icon: Building2,
      year: '2023'
    },
    {
      title: 'Healthcare Innovation Award',
      description: 'Recognition for outstanding contribution to digital health',
      icon: Users,
      year: '2023'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Partners Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by Leading Organisations
          </h2>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    className="flex items-center justify-center p-6 bg-card rounded-lg border hover:shadow-md transition-all duration-300 cursor-pointer group h-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {partner}
                      </span>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Recognition & Media Coverage
          </h2>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {recognitions.map((recognition, index) => {
                const IconComponent = recognition.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <motion.div
                      className="card-feature text-center group cursor-pointer h-full"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="text-xs text-primary font-semibold mb-2">{recognition.year}</div>
                      <h3 className="text-lg font-bold mb-3">{recognition.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {recognition.description}
                      </p>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">Join the Healthcare Revolution</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Be part of the growing network of healthcare providers transforming patient care with AI-powered insights
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;