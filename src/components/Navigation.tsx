import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const patientsMenuItems = [
    { href: '#healthvector-diabetes', label: 'HealthVector® Diabetes' },
  ];

  const solutionsMenuItems = [
    { href: '#dara', label: 'DARA' },
    { href: '#health-screening', label: 'Health Screening' },
    { href: '#result-interpretation', label: 'Result Interpretation' },
    { href: '#referral', label: 'Referral' },
    { href: '#healthvector-diabetes', label: 'HealthVector® Diabetes' },
    { href: '#chronic-disease-management', label: 'Chronic Disease Management' },
  ];

  return (
    <nav className={`${isScrolled ? 'nav-sticky' : 'absolute top-0 left-0 right-0 z-50'} transition-all duration-300`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MB</span>
            </div>
            <span className="text-xl font-bold text-foreground">Mesh Bio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Patients Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1, duration: 0.5 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  <span>Patients</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {patientsMenuItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <a href={item.href}>{item.label}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            {/* Solutions Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1, duration: 0.5 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {solutionsMenuItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <a href={item.href}>{item.label}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            {/* About Link */}
            <motion.a
              href="#about"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.1, duration: 0.5 }}
            >
              About
            </motion.a>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button className="btn-cta">
                Book a Demo
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-4">
                {/* Mobile Patients Menu */}
                <div className="space-y-2">
                  <div className="font-medium text-foreground">Patients</div>
                  {patientsMenuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block pl-4 text-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Mobile Solutions Menu */}
                <div className="space-y-2">
                  <div className="font-medium text-foreground">Solutions</div>
                  {solutionsMenuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block pl-4 text-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Mobile About Link */}
                <a
                  href="#about"
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>

                <Button className="btn-cta w-full mt-4">
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;