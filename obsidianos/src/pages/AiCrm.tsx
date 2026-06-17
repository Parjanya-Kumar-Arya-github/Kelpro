import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
const products = [
  {
    badge: "150+ SKUs",
    category: "ENGINE",
    title: "ENGINE MOUNTINGS",
    desc: "OEM-grade engine & gearbox mounts with maximum vibration suppression. Reinforced rubber-steel construction.",
    tags: ["MARUTI", "TOYOTA", "HYUNDAI", "TATA", "MAHINDRA"],
    footer: "Gypsy · Swift · Innova · Scorpio · Indica",
    icon: <img src="/assets/Products/engine_mounting.png" alt="Engine Mountings" className="h-20 md:h-52 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
  },
  {
    badge: "30 Models",
    category: "FUEL SYSTEM",
    title: "FUEL PUMP MOTORS",
    desc: "In-tank fuel pump motors with filters. MRP from ₹715. Available for petrol & diesel variants across brands.",
    tags: ["KFM SERIES", "WITH FILTERS", "OE STANDARD"],
    footer: "Nano · Kwid · Swift · Creta · City · Bolero",
    icon: <img src="/assets/Products/fuel_pump_motors.png" alt="Fuel Pump Motors" className="h-20 md:h-52 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
  },
  {
    badge: "60+ Models",
    category: "COOLING",
    title: "WATER PUMPS",
    desc: "KWP series water pumps from ₹770. Covers Maruti-Suzuki, Tata, Nissan, Mahindra, Toyota, VW, Ford, Renault, Hyundai & Honda.",
    tags: ["KWP SERIES", "MULTI-BRAND"],
    footer: "Alto · Innova · Duster · Bolero · Polo · Santro",
    icon: <img src="/assets/Products/water_pumps.png" alt="Water Pumps" className="h-20 md:h-52 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
  },
  {
    badge: "4 Types",
    category: "COOLING",
    title: "THERMOSTAT ELBOWS",
    desc: "Complete thermostat assemblies for Swift, Ertiga, Ignis, Ritz & Beat. OEM number matched.",
    tags: ["KT SERIES", "ASSEMBLY"],
    footer: "Swift · Ertiga · Ignis · Ritz · Beat · Vista",
    icon: <img src="/assets/Products/thermostat_elbow.png" alt="Thermostat Elbows" className="h-20 md:h-52 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
  },
  {
    badge: "80+ SKUs",
    category: "SUSPENSION",
    title: "STRUT MOUNTS & BUSHING KITS",
    desc: "Front strut mounts with retainers. Bushing kits in sets of 6-24 pieces. OEM rubber compounds for vibration isolation.",
    tags: ["FRONT STRUT", "BUSHING SETS", "OEM"],
    footer: "Swift · Creta · Innova · Scorpio · XUV · Polo",
    icon: <img src="/assets/Products/strut_mounts.png" alt="Strut Mounts & Bushing Kits" className="h-20 md:h-52 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
  },
  {
    badge: "Multiple Lines",
    category: "BRAKING & BODY",
    title: "CALLIPER KITS, GASKETS & MORE",
    desc: "Calliper pin kits (₹375-₹600), head gaskets, oil cooler assemblies, tailgate struts (₹113+) and universal wiper blades.",
    tags: ["CALLIPER PINS", "GASKETS", "WIPERS", "OIL COOLERS"],
    footer: "Innova · Swift · Creta · Scorpio · Duster",
    icon: <img src="/assets/Products/calliper_kit.png" alt="Calliper Kits, Gaskets & More" className="h-20 md:h-52 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
  }
];

const AiCrm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "0px", amount: 0.1 });



  // Helper for staggering words
  const sentence = "PRODUCT LINES";
  const words = sentence.split(" ");

  return (
    <div id="products" className="min-h-screen bg-black text-foreground selection:bg-accent selection:text-primary-foreground">
      {/* Subtle edge gradients */}
      <div className="fixed inset-y-0 left-0 w-[30vw] bg-[radial-gradient(ellipse_at_left,rgba(0,100,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="fixed inset-y-0 right-0 w-[30vw] bg-[radial-gradient(ellipse_at_right,rgba(0,150,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* 1. Hero Section */}
      <section ref={sectionRef} className="relative min-h-[85vh] flex items-center px-6 pb-16 pt-10 md:pb-24 z-10 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 lg:gap-20 items-center">
          {/* Left Column: Spline */}
          <div className="relative w-full h-[40vh] md:h-[600px] flex items-center justify-center order-2 md:order-1 z-0 pointer-events-none spline-mobile-absolute">
            <AnimatePresence>
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full"
                >
                  <img src="/assets/top.jpg" alt="Decorative breaker" className="w-full h-full object-contain mix-blend-screen" style={{ pointerEvents: 'none' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-secondary/80 py-1.5 pr-3 pl-2.5 text-sm text-foreground backdrop-blur-2xl border border-white/5 mb-8"
            >
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              What We Supply
            </motion.div>

            <h1 className="max-w-[800px] text-display-large md:text-[72px] lg:text-[80px] leading-[1.1] font-medium tracking-tight mb-6">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="max-w-[424px] text-base text-foreground/90 leading-relaxed mb-10"
            >
              All categories available for bulk procurement. OEM part numbers provided for every SKU.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-full text-base font-semibold transition-colors"
            >
              Request Partnership
            </motion.button>
          </div>
        </div>
      </section>

      {/* 2. Quick Features Row */}

      {/* 3. Product Categories Grid */}
      <section className="pb-24 md:py-32 max-w-[1200px] mx-auto px-6 relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl md:text-[52px] font-medium tracking-tight text-center lg:text-left"
        >
          Product Categories
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {products.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex flex-col rounded-[2rem] overflow-hidden bg-[#1C1A19]/50 border border-[#F7E7CE]/30 group hover:border-[#F7E7CE] transition-colors duration-500"
            >
              {/* Top image area */}
              <div className="relative h-28 md:h-64 bg-[linear-gradient(180deg,#000_-20%,#1C1A19_100%)] flex items-center justify-center border-b border-border/50 overflow-hidden">
                <div className="absolute top-3 md:top-5 right-3 md:right-5 bg-[#F7E7CE]/20 text-[#F7E7CE] px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[8px] md:text-xs font-bold tracking-wide">
                  {card.badge}
                </div>
                {card.icon}
              </div>

              {/* Content Area */}
              <div className="p-4 md:p-8 flex flex-col flex-1">
                <p className="text-[#F7E7CE] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">{card.category}</p>
                <h3 className="text-sm md:text-xl font-bold text-foreground mb-2 md:mb-3 uppercase tracking-tight">{card.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-1 hidden md:block">
                  {card.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                  {card.tags.map(tag => (
                    <span key={tag} className="bg-white/5 text-muted-foreground text-[10px] md:text-xs font-bold px-2.5 py-1.5 rounded-[4px] border border-white/10 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 md:pt-6 border-t border-border/50">
                  <p className="text-muted-foreground/60 text-[10px] md:text-xs italic font-medium truncate mr-2">
                    {card.footer}
                  </p>
                  <span className="text-[#F7E7CE] text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform cursor-pointer shrink-0">
                    VIEW &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Tabbed Feature Section */}
      {/* 4. Markets Section */}



    </div>
  );
};

export default AiCrm;
