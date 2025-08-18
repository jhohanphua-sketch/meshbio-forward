import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface MetricProps {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const AnimatedCounter = ({ value, suffix, label, prefix = '' }: MetricProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < value) {
            return Math.min(prev + Math.ceil(value / 50), value);
          }
          return value;
        });
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-count-up">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-lg font-medium">{label}</div>
    </motion.div>
  );
};

const MetricsSection = () => {
  const metrics = [
    {
      value: 100000,
      suffix: '+',
      label: 'Patients Assessed',
      description: 'through Mesh Bio\'s platform'
    },
    {
      value: 40,
      suffix: '+',
      label: 'Healthcare Groups',
      description: 'onboarded across Asia'
    },
    {
      value: 90,
      suffix: '%',
      label: 'Faster Screening',
      description: 'workflow optimization'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Making Real Impact in Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered solutions are transforming chronic disease care across Asia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <AnimatedCounter {...metric} />
              <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual separator */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default MetricsSection;