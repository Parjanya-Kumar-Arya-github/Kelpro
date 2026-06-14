
import { motion } from 'framer-motion';

const Offerings = () => {
  const cards = [
    {
      id: 1,
      bgImage: "/assets/enginemountings.jpg",
      title: "Engine Mountings",
      subtitle: "Supercharge your advisers",
      body: "OEM-matched, vibration-suppressing, reinforced steel structure"
    },
    {
      id: 2,
      bgImage: "/assets/strutmount.png",
      title: "Strut Mounts",
      subtitle: "Suspension Kits",
      body: "Suspension kits for Maruti, Toyota, Hyundai, Mahindra, Tata"
    },
    {
      id: 3,
      bgImage: "/assets/fuelpumps.jpg",
      title: "Fuel & Water Pumps",
      subtitle: "Fuel Pumps",
      body: "30+ fuel pump models, multi-brand water pumps with OE specs"
    },
    {
      id: 4,
      bgImage: "/assets/brakepad.jpg",
      title: "Brake Cables & Pads",
      subtitle: "Brake Cables & Pads",
      body: "Calliper kits, tailgate struts, wiper blades, head gaskets"
    }
  ];

  return (
    <section className="w-full pb-10 px-6 md:px-10 max-w-[100vw] mx-auto flex flex-col items-center">
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
          Kelpro is the manufacturing brand of Kapoor Auto Spares, a family-run wholesale auto parts business operating out of <span className="text-[#60A5FA] font-semibold">Kashmere Gate, Delhi since 1996</span> one of India's oldest auto parts hubs.
          <br />
          We supply a comprehensive range of engine, cooling, suspension and braking components to retailers, distributors and wholesalers across India and African markets. Every part is built to OEM standards with rigorous quality checks.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-card flex flex-col"
          >
            {/* Top Image Area */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden shrink-0">
              <img
                src={card.bgImage}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content Area */}
            <div className="relative z-10 flex flex-col gap-3 p-8 md:p-12 bg-card flex-grow">
              <span className="text-accent font-medium text-sm md:text-base tracking-wide uppercase">
                {card.subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-heading text-foreground">
                {card.title}
              </h3>
              <p className="text-muted text-body-default md:text-body-large mt-2 md:mt-4">
                {card.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
