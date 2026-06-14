import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex flex-col pt-32 md:pt-40 overflow-clip pb-0 min-h-[400px] sm:min-h-[600px] items-center text-center bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_83.35%)]">
      {/* Spline 3D Background */}


      {/* Background White Glow */}
      <div className="absolute top-[20%] md:top-[30%] left-1/2 -translate-x-1/2 w-[80vw] md:w-[50vw] max-w-[800px] h-[300px] md:h-[500px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_83.35%)] blur-[100px] md:blur-[140px] rounded-[100%] pointer-events-none z-[-1]" />

      {/* Decorative Rocks */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        src="/assets/left.jpg"
        alt="Decorative stone left"
        className="absolute left-[-10%] bottom-0 w-[40vw] z-[0] mix-blend-screen object-contain origin-bottom-left"
        style={{ pointerEvents: 'none' }}
      />

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        src="/assets/right.jpg"
        alt="Decorative stone right"
        className="absolute right-[5%] bottom-0 w-[40vw] z-[0] mix-blend-screen object-contain origin-bottom-right"
        style={{ pointerEvents: 'none', rotate: "20deg" }}
      />

      <div className="max-w-[1512px] mx-auto px-6 md:px-10 w-full z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[60rem] text-display-small md:text-display-large text-foreground mb-6"
        >
          Kel<span className="text-[#60A5FA]">Pro</span><br />Auto Spares Wholesale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-[50%] text-sm md:text-base text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] mb-10"
        >
          A brand of Kapoor Auto Spares. Engine Mountings, Strut Mounts, Fuel Pumps, Water Pumps, Bushing Kits, Gaskets & more — supplied to retailers, distributors and wholesalers since 1996.
        </motion.p>

        <motion.a
          href="/Kelpro Catalogue 2026.pdf"
          download="Kelpro Catalogue 2026.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-body-default font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 transition-colors"
        >
          Download Catalogue
        </motion.a>
      </div>

      {/* Decorative Images & Mockup */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-16 md:mt-24 z-0">

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 px-4 md:px-0"
          whileHover={{ opacity: 1 }}
        >
          <img
            src="/assets/HomeHeroDesktop.png"
            alt="ObsidianOS Dashboard Mockup"
            className="w-full h-auto rounded-t-2xl md:rounded-t-[2.5rem] border border-border border-b-0 shadow-2xl hidden md:block"
          />
          <img
            src="/assets/Homeheromobile.png"
            alt="ObsidianOS Dashboard Mobile Mockup"
            className="w-full h-auto rounded-t-2xl border border-border border-b-0 shadow-2xl block md:hidden"
          />
        </motion.div>

        {/* Bottom Fade Gradient Overlay to blend the image into the background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
