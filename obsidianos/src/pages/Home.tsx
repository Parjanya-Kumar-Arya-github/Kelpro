import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import FeaturesBanner from '../components/FeaturesBanner';
import Offerings from '../components/Offerings';
import FeaturesInteractive from '../components/FeaturesInteractive';
import TrustCards from '../components/TrustCards';
import Pricing from './Pricing';
import AiCrm from './AiCrm';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturesBanner />
      <AiCrm />
      <Offerings />
      <FeaturesInteractive />
      <TrustCards />
      <Pricing />
      <ContactUs />
    </>
  );
};

export default Home;
