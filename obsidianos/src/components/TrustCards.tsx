import { motion } from 'framer-motion';
import { CheckSquare, Layers, Globe, Phone, Lock, Users } from 'lucide-react';

const TrustCards = () => {
  const cards = [
    {
      icon: <CheckSquare className="w-8 h-8 text-[#F7E7CE]" />,
      title: "OEM-GRADE QUALITY",
      desc: "High-grade materials and rigorous testing. Every Kelpro part delivers lasting performance matched to OEM specifications."
    },
    {
      icon: <Layers className="w-8 h-8 text-[#F7E7CE]" />,
      title: "TRANSPARENT TIERED PRICING",
      desc: "Clear tier pricing retailer, distributor, wholesaler with up to 35%+ off MRP for high-volume partners."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#F7E7CE]" />,
      title: "INDIA & AFRICA READY",
      desc: "GST-compliant domestic supply across India. IEC-registered for African exports with freight forwarding partnerships."
    },
    {
      icon: <Phone className="w-8 h-8 text-[#F7E7CE]" />,
      title: "WHATSAPP-FIRST SUPPORT",
      desc: "Dedicated partner support via WhatsApp Business. Fast response on orders, RFQs and part availability queries."
    },
    {
      icon: <Lock className="w-8 h-8 text-[#F7E7CE]" />,
      title: "SECURE TRANSACTIONS",
      desc: "Prepaid for first orders, credit terms after track record is established. LC available for African export partners."
    },
    {
      icon: <Users className="w-8 h-8 text-[#F7E7CE]" />,
      title: "28+ YEARS OF TRUST",
      desc: "Kapoor Auto Spares has operated from Kashmere Gate, Delhi since 1996 one of India's most trusted auto parts hubs."
    }
  ];

  return (
    <section className="w-full bg-background">
      <div className="max-w-[1512px] mx-auto px-6 md:px-10">

        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            WHY <span className="text-[#F7E7CE]">KELPRO</span>
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-display-small md:text-[52px] leading-[1.1] font-medium tracking-tight mb-6 text-foreground uppercase"
          >
            BUILT FOR TRADE PARTNERS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted max-w-[800px] leading-relaxed"
          >
            Every policy, price, and process is designed around wholesale buyers who need reliability at scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-card border border-border rounded-3xl p-8 md:p-10 flex flex-col items-start gap-6 hover:bg-secondary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center border border-border">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted text-body-default">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustCards;
