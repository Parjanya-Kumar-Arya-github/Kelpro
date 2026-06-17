import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-border pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-[1512px] mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 pb-16">

        {/* Left Section: Branding and Contact */}
        <div className="flex flex-col gap-8 max-w-[600px]">
          <div className="flex items-center gap-3">
            <img src="/assets/kelpro-logo.png" alt="Kelpro Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            <span className="text-2xl font-heading font-bold tracking-tight text-foreground uppercase">
              KELPRO <span className="text-[#60A5FA]">AUTO SPARES</span>
            </span>
          </div>

          <div className="flex flex-col gap-4 text-xs text-muted-foreground leading-relaxed">
            <p className="text-sm">
              A brand of Kapoor Auto Spares. Wholesale auto parts supplier operating from Kashmere Gate, Delhi since 1996. B2B only — retailers, distributors and wholesalers welcome.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted shrink-0" />
                <span className="text-sm">Shop 296, Krishna Gali, Kashmere Gate, Delhi 110006</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-muted shrink-0" />
                <span className="text-sm">+91 9311264684 | +91 9810264684 | +91 7011649892</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-muted shrink-0" />
                <span className="text-sm">kaskapoor@gmail.com | kelproautospares@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-wrap gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-muted-foreground font-bold text-xs tracking-widest uppercase mb-2">Products</h4>
            <Link to="/?tab=engmount#catalogue" className="text-muted hover:text-foreground text-sm transition-colors">Engine Mountings</Link>
            <Link to="/?tab=pumps#catalogue" className="text-muted hover:text-foreground text-sm transition-colors">Fuel Pump Motors</Link>
            <Link to="/?tab=water#catalogue" className="text-muted hover:text-foreground text-sm transition-colors">Water Pumps</Link>
            <Link to="/?tab=strut#catalogue" className="text-muted hover:text-foreground text-sm transition-colors">Strut Mounts</Link>
            <Link to="/?tab=strut#catalogue" className="text-muted hover:text-foreground text-sm transition-colors">Bushing Kits</Link>
            <Link to="/?tab=calliper#catalogue" className="text-muted hover:text-foreground text-sm transition-colors">Calliper Pin Kits</Link>
            <Link to="/?tab=tailgate#catalogue" className="text-muted hover:text-foreground text-sm transition-colors">Tailgate Struts</Link>
            <Link to="/?tab=wipers#catalogue" className="text-muted hover:text-foreground text-sm transition-colors">Wiper Blades</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-muted-foreground font-bold text-xs tracking-widest uppercase mb-2">Company</h4>
            <Link to="/#products" className="text-muted hover:text-foreground text-sm transition-colors">About Us</Link>
            <Link to="/#markets" className="text-muted hover:text-foreground text-sm transition-colors">Markets</Link>
            <Link to="/#contact" className="text-muted hover:text-foreground text-sm transition-colors">Contact</Link>
            <a href="/Kelpro Catalogue 2026.pdf" download className="text-muted hover:text-foreground text-sm transition-colors">Download Catalogue</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1512px] mx-auto border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <p>
          © 2026 Kelpro Auto Spares (Kapoor Auto Spares). B2B Wholesale Only. All prices shown are MRP — partner prices available on registration.
        </p>
        <p className="shrink-0">
          Kashmere Gate, Delhi, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
