
import { motion } from 'framer-motion';

const Offerings = () => {


  return (
    <section className="w-full pt-20 px-6 md:px-10 max-w-[100vw] mx-auto flex flex-col items-center">
      <div className="text-center max-w-3xl mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-display-small md:text-display-default text-foreground mb-6"
        >
          About Us & What we do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body-default md:text-body-large text-muted"
        >
          Kelpro is the manufacturing brand of Kapoor Auto Spares, a family-run wholesale auto parts business operating out of <span className="text-[#F7E7CE] font-semibold">Kashmere Gate, Delhi since 1996</span> one of India's oldest auto parts hubs.
          <br />
          We supply a comprehensive range of engine, cooling, suspension and braking components to retailers, distributors and wholesalers across India and African markets. Every part is built to OEM standards with rigorous quality checks.
        </motion.p>
      </div>


    </section>
  );
};

export default Offerings;
