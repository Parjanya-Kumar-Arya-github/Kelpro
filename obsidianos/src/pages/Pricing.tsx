import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <div id="pricing" className="relative min-h-screen bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_83.35%)] pt-32 pb-24 overflow-hidden font-sans selection:bg-accent selection:text-primary-foreground">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[300px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_83.35%)] blur-[120px] rounded-[100%] pointer-events-none z-0" />

      {/* Decorative Top Stone */}
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        src="/assets/top.jpg"
        alt="Decorative stone top"
        className="absolute top-[-5%] left-[60%] -translate-x-1/2 w-[80vw] md:w-[60vw] max-w-[800px] z-[0] mix-blend-screen object-contain origin-top"
        style={{ pointerEvents: 'none' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header Section */}


        {/* Pricing Cards */}


      </div>
      <section className="relative z-10 border-y border-border/10" id="markets">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#60A5FA] font-light tracking-widest text-xs md:text-sm uppercase mb-4"
              >
                MARKETS WE SERVE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-normal text-white uppercase leading-tight mb-6"
              >
                INDIA &<br />AFRICA
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-sm md:text-base mb-10 leading-relaxed max-w-md"
              >
                Pan-India domestic supply and active exports to African markets with strong used-car penetration.
              </motion.p>

              <div className="flex flex-col gap-3">
                {[
                  { code: 'IN', title: 'INDIA', subtitle: 'NATIONWIDE', desc: 'Pan-India wholesale, GST compliant', status: 'ACTIVE' },
                  { code: 'KE', title: 'KENYA', subtitle: '', desc: 'East Africa hub, Nairobi distribution', status: 'ACTIVE' },
                  { code: 'NG', title: 'NIGERIA', subtitle: '', desc: 'West Africa, Lagos wholesale market', status: 'ACTIVE' },
                  { code: 'TZ', title: 'TANZANIA', subtitle: '', desc: 'East Africa expansion', status: 'COMING SOON' },
                  { code: 'GH', title: 'GHANA', subtitle: '', desc: 'West Africa expansion', status: 'COMING SOON' },
                ].map((market, idx) => (
                  <motion.div
                    key={market.code}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center p-4 md:p-5 rounded-xl bg-[#1C1A19]/50 backdrop-blur-md border border-white/5 hover:bg-[#0D1524]/60 hover:border-white/10 transition-colors group"
                  >
                    <div className="w-12 md:w-16 text-base md:text-lg font-medium text-white/90 shrink-0">
                      {market.code}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white uppercase text-sm md:text-base">{market.title}</span>
                        {market.subtitle && (
                          <span className="text-white/80 font-medium text-xs md:text-sm uppercase">— {market.subtitle}</span>
                        )}
                      </div>
                      <span className="text-muted-foreground/80 text-[11px] md:text-xs mt-0.5">{market.desc}</span>
                    </div>
                    <div className="shrink-0 ml-4">
                      {market.status === 'ACTIVE' ? (
                        <span className="text-[10px] md:text-xs font-medium text-[#4ADE80] uppercase tracking-wider">
                          ACTIVE
                        </span>
                      ) : (
                        <span className="text-[10px] md:text-xs font-medium text-[#60A5FA] uppercase tracking-wider">
                          COMING SOON
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-[500px] bg-[#1C1A19]/50 border border-border/10 rounded-3xl p-8 md:p-12 flex flex-col items-center shadow-2xl"
              >
                <div className="text-center mb-10">
                  <h3 className="text-6xl md:text-[70px] leading-none font-normal text-white flex items-center justify-center gap-1 mb-2">
                    5<span className="text-[#60A5FA]">+</span>
                  </h3>
                  <p className="text-muted-foreground font-medium tracking-[0.2em] text-xs md:text-sm uppercase mt-4">
                    MARKETS ACTIVE
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { val: '28+', label: 'YEARS TRADING' },
                    { val: '10+', label: 'PRODUCT LINES' },
                    { val: 'B2B', label: 'WHOLESALE ONLY' },
                    { val: 'IEC', label: 'EXPORT READY' },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-[#1C1A19]/50 border border-border/10 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center">
                      <span className="text-xl md:text-2xl font-normal text-[#60A5FA] mb-2">{stat.val}</span>
                      <span className="text-muted-foreground font-medium tracking-wider text-[10px] md:text-xs uppercase">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
