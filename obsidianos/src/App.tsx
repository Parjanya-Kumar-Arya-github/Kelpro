import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import AiCrm from './pages/AiCrm';
import Admin from './pages/Admin';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to handle the load event
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if the document is already fully loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      // Wait for the window load event (all images, scripts, CSS loaded)
      window.addEventListener('load', handleLoad);
      
      // Fallback: remove loader after 5 seconds just in case some resources hang
      const timeoutId = setTimeout(() => setIsLoading(false), 5000);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  useEffect(() => {
    if (isLoading) return; // Prevent scrolling while loading screen is active

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location, isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-r-2 border-white/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <img src="/assets/kelpro-logo.png" alt="Kelpro" className="w-8 h-8 object-contain" />
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
              className="mt-6 text-xs tracking-[0.4em] text-foreground/60 uppercase font-light"
            >
              Loading
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-primary-foreground ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/what-we-offer/ai-crm-for-financial-advisors" element={<AiCrm />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
