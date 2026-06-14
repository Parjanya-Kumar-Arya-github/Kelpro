import { CheckSquare, Layers, Globe, Phone, Lock } from 'lucide-react';

const FeaturesBanner = () => {
  const features = [
    { icon: <CheckSquare className="w-5 h-5" />, text: "OEM-Grade Quality" },
    { icon: <Layers className="w-5 h-5" />, text: "Pan-India Distribution" },
    { icon: <Globe className="w-5 h-5" />, text: "Africa Export Ready" },
    { icon: <Phone className="w-5 h-5" />, text: "WhatsApp-First Support" },
    { icon: <Lock className="w-5 h-5" />, text: "GST Compliant & IEC Registered" },
  ];

  return (
    <div className="w-full py-5 border-t border-b border-border bg-[#0a0a0a]">
      <div className="w-full max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-between min-w-max gap-8 lg:gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-foreground/90 font-medium text-sm whitespace-nowrap">
              <span className="text-[#60A5FA]">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
