import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import AiCrm from './pages/AiCrm';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
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
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-primary-foreground">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/what-we-offer/ai-crm-for-financial-advisors" element={<AiCrm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
