import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Solutions: [
      'DARA® Screening',
      'HealthVector® Diabetes',
      'Predictive Analytics',
      'Clinical Decision Support'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Contact'
    ],
    Resources: [
      'Case Studies',
      'Blog & News',
      'Documentation',
      'Support'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Data Security',
      'Compliance'
    ]
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Health-Tech Innovation</h3>
            <p className="text-white/70 mb-6">
              Get the latest insights on AI in healthcare and chronic disease management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
              />
              <Button className="bg-primary hover:bg-primary/90 px-6">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MB</span>
              </div>
              <span className="text-xl font-bold">Mesh Bio</span>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering healthcare providers with AI-powered predictive analytics 
              for better chronic disease management and patient outcomes.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-white/70">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">Singapore HQ, Marina Bay</span>
              </div>
              <div className="flex items-center text-white/70">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+65 6123 4567</span>
              </div>
              <div className="flex items-center text-white/70">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">hello@meshbio.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-white/60 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2024 Mesh Bio. All rights reserved. • HIPAA Compliant • ISO 27001 Certified
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <span className="text-white/40">|</span>
              <span className="text-white/60 text-sm">Featured in Forbes Asia 100 to Watch</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;