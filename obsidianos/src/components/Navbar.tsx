import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; to?: string; dropdown?: any[] }[] = [
    { name: 'Products', to: "#products" },
    { name: 'Catalogue', to: "#catalogue" },
    { name: 'Tiers', to: '#pricing' },
    { name: 'Markets', to: "#markets" },
    { name: 'Contact', to: "#contact" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    if (targetId && targetId.startsWith('#')) {
      const element = document.querySelector(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-background/40 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-background/10 backdrop-blur-md border-b border-transparent'}`}>
      <div className="mx-auto max-w-[1512px] px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer z-50">
          <img src="/assets/kelpro-logo.png" alt="Kelpro Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          <span className="text-xl font-heading font-medium tracking-tight">KELPRO <span className='text-[#F7E7CE] font-bold'>AUTO</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.to ? (
                <Link
                  to={link.to}
                  onClick={(e) => handleScrollTo(e, link.to)}
                  className="flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors py-8"
                >
                  {link.name}
                </Link>
              ) : (
                <button className="flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors py-8">
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                </button>
              )}

            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <button onClick={() => { window.location.href = "#contact"; }} className="px-5 h-10 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors">
            Get started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-card border-b border-border shadow-2xl p-6 lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-3">
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="font-medium text-lg border-b border-border/50 pb-2 block"
                      onClick={(e) => handleScrollTo(e, link.to)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div className="font-medium text-lg border-b border-border/50 pb-2">{link.name}</div>
                  )}
                  {link.dropdown && (
                    <div className="flex flex-col gap-4 pl-4">
                      {link.dropdown.map(item => (
                        'to' in item && item.to ? (
                          <Link to={item.to} key={item.title} onClick={() => setIsOpen(false)}>
                            <h4 className="text-foreground font-medium">{item.title}</h4>
                            <p className="text-sm text-muted mt-1">{item.desc}</p>
                          </Link>
                        ) : (
                          <div key={item.title}>
                            <h4 className="text-foreground font-medium">{item.title}</h4>
                            <p className="text-sm text-muted mt-1">{item.desc}</p>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => { window.location.href = "#contact"; setIsOpen(false); }} className="w-full mt-4 py-3 rounded-full border border-border font-medium hover:bg-secondary transition-colors">
                Become a Partner
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
