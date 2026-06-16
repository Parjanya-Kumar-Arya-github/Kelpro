import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Download, ArrowRight } from 'lucide-react';

const ContactUs = () => {
  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent opacity-50" />

      {/* Background glow similar to Hero */}
      <div className="absolute top-[20%] right-0 w-[40vw] max-w-[600px] h-[400px] bg-[linear-gradient(180deg,rgba(96,165,250,0.05)_0%,transparent_83.35%)] blur-[120px] rounded-[100%] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-[#60A5FA] font-bold tracking-widest text-xs md:text-sm uppercase mb-4">
              BECOME A PARTNER
            </span>
            <h2 className="text-display-small md:text-display-default font-heading text-foreground mb-6 uppercase">
              LET'S DO<br />BUSINESS
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-12">
              Fill out the form and our team will respond within 24 hours with a customised wholesale price list and onboarding details.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                <span className="text-foreground/90 text-sm md:text-base">
                  Shop 296, Krishna Gali, Kashmere Gate, Delhi 110006
                </span>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                <span className="text-foreground/90 text-sm md:text-base">
                  +91 9311264684 | +91 9810264684 | +91 7011649892
                </span>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                <span className="text-foreground/90 text-sm md:text-base">
                  kaskapoor@gmail.com | kelproautospares@gmail.com
                </span>
              </div>
            </div>

            <a 
              href="/Kelpro Catalogue 2026.pdf" 
              download="Kelpro Catalogue 2026.pdf"
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 h-14 rounded-full border border-[#60A5FA]/30 text-[#60A5FA] font-medium hover:bg-[#60A5FA]/10 transition-colors uppercase text-sm tracking-wide"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD FULL CATALOGUE (PDF)
            </a>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1C1A19]/30 border border-border/50 rounded-3xl p-6 md:p-10 backdrop-blur-sm"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground uppercase">FULL NAME *</label>
                  <input type="text" placeholder="Your name" className="bg-background/50 border border-border/50 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#60A5FA]/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground uppercase">BUSINESS NAME *</label>
                  <input type="text" placeholder="Company / shop name" className="bg-background/50 border border-border/50 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#60A5FA]/50 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground uppercase">EMAIL</label>
                  <input type="email" placeholder="business@email.com" className="bg-background/50 border border-border/50 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#60A5FA]/50 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground uppercase">WHATSAPP / PHONE *</label>
                  <input type="tel" placeholder="+91 or country code" className="bg-background/50 border border-border/50 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#60A5FA]/50 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground uppercase">COUNTRY / REGION</label>
                  <select className="bg-background/50 border border-border/50 rounded-lg px-4 py-3.5 text-sm text-muted-foreground focus:outline-none focus:border-[#60A5FA]/50 transition-colors appearance-none cursor-pointer">
                    <option value="">Select market</option>
                    <option value="in">India</option>
                    <option value="af">Africa</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground uppercase">PARTNER TIER</label>
                  <select className="bg-background/50 border border-border/50 rounded-lg px-4 py-3.5 text-sm text-muted-foreground focus:outline-none focus:border-[#60A5FA]/50 transition-colors appearance-none cursor-pointer">
                    <option value="">Select tier</option>
                    <option value="retailer">Retailer (10-50 units)</option>
                    <option value="distributor">Distributor (50-200 units)</option>
                    <option value="wholesaler">Wholesaler (200+ units)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground uppercase">PRODUCTS OF INTEREST</label>
                <select className="bg-background/50 border border-border/50 rounded-lg px-4 py-3.5 text-sm text-muted-foreground focus:outline-none focus:border-[#60A5FA]/50 transition-colors appearance-none cursor-pointer">
                  <option value="">Select category</option>
                  <option value="engine">Engine Mountings</option>
                  <option value="fuel">Fuel Pumps</option>
                  <option value="cooling">Cooling & Water Pumps</option>
                  <option value="suspension">Suspension & Struts</option>
                  <option value="braking">Braking & Body</option>
                  <option value="all">Full Catalogue</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold tracking-widest text-muted-foreground uppercase">MESSAGE</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business, vehicle makes you focus on, monthly order volumes, or any specific parts needed..."
                  className="bg-background/50 border border-border/50 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#60A5FA]/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button type="button" className="w-full h-14 mt-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm">
                SEND PARTNERSHIP ENQUIRY
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
