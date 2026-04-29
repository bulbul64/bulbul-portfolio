import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { fadeUp, staggerContainer } from '@/styles/animations';
import { services } from '@/data';
import ServiceCard from '../cards/ServiceCard';

export default function Services() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
    >
      <SectionHeader
       
        subtitle="Services"
        title="Crafting Responsive Web Interfaces with Purpose & Precision."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className="grid md:grid-cols-2 gap-8 mt-10"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            className="h-full"
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}