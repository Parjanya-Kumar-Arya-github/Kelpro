import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import catalogueDataRaw from '../data/catalogueData.json';

type Tab = { id: string; label: string };
type Row = { type?: string; label?: string; cells?: string[] };
type CategoryData = { id: string; headers: string[]; rows: Row[]; footer: string | null };

const catalogue = catalogueDataRaw as { tabs: Tab[]; catalogueData: CategoryData[] };

const FeaturesInteractive = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(catalogue.tabs[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && catalogue.tabs.find(t => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [location.search]);

  const currentData = catalogue.catalogueData.find(c => c.id === activeTab);

  return (
    <section className="relative w-full py-24 md:py-32 bg-background" id="catalogue">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      <div className="max-w-[1512px] mx-auto px-6 md:px-10">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/80 text-sm font-medium text-foreground border border-white/5 mb-6"
          >
            Price Lists
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-small md:text-display-default text-foreground mb-6"
          >
            PRODUCT CATALOGUE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-body-default md:text-body-large text-muted max-w-2xl"
          >
            Retail MRP prices shown. Partner wholesale prices available after registration. <motion.a
              href="/Kelpro Catalogue 2026.pdf"
              download="Kelpro Catalogue 2026.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="inline-flex shrink-0 mt-5 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-lg font-medium bg-[#F7E7CE] text-black hover:bg-[#F7E7CE]/90 h-14 px-8 transition-colors"
            >
              Download Catalogue
            </motion.a>
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex flex-nowrap w-full overflow-hidden gap-1 md:gap-2 pb-4 mb-8 justify-between items-center border-b border-border/50">
          {catalogue.tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-0 truncate px-2 lg:px-6 py-2.5 rounded-full text-[10px] md:text-xs lg:text-sm font-medium transition-all ${activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary text-muted-foreground hover:text-foreground border border-border/50 hover:border-border'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Dropdown */}
        <div className="md:hidden w-full mb-8 relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full p-4 rounded-2xl bg-secondary/50 text-foreground border border-border/50 focus:border-[#F7E7CE] outline-none font-medium text-sm flex justify-between items-center shadow-md transition-colors"
          >
            <span>{catalogue.tabs.find(t => t.id === activeTab)?.label}</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col"
              >
                {catalogue.tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${activeTab === tab.id ? 'bg-[#F7E7CE]/10 text-[#F7E7CE]' : 'hover:bg-secondary/50 text-muted-foreground'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Table Panel */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="w-full">
                {currentData && (
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-secondary/90 backdrop-blur-sm">
                      <tr className="border-b border-border">
                        {currentData.headers.map((header, idx) => (
                          <th key={idx} className={`py-4 px-6 font-medium text-muted-foreground text-sm uppercase tracking-wider ${header.includes('MRP') || header.includes('Price') || header.includes('Rate') ? 'text-right' : ''}`}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50 text-foreground">
                      {currentData.rows.map((row, idx) => {
                        if (row.type === 'brand-row') {
                          return (
                            <tr key={idx} className="bg-secondary/30">
                              <td colSpan={currentData.headers.length} className="py-3 px-6 font-bold text-xs tracking-widest uppercase text-muted-foreground">
                                {row.label}
                              </td>
                            </tr>
                          );
                        }

                        return (
                          <tr key={idx} className="hover:bg-secondary/20 transition-colors group">
                            {row.cells?.map((cell, cellIdx) => {
                              const isMoney = cell.includes('₹');
                              const isFirst = cellIdx === 0;
                              return (
                                <td key={cellIdx} className={`py-3.5 px-6 ${isFirst ? 'font-medium text-[#60A5FA]' : 'text-muted-foreground group-hover:text-foreground transition-colors'} ${isMoney ? 'text-right font-semibold text-foreground' : ''}`}>
                                  {cell}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
              {currentData?.footer && (
                <div className="bg-secondary/30 p-4 border-t border-border/50 text-xs text-muted-foreground text-center">
                  {currentData.footer}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default FeaturesInteractive;
