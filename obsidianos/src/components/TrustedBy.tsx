const TrustedBy = () => {
  const stats = [
    { value: "28", suffix: "+", label: "YEARS IN TRADE" },
    { value: "10", suffix: "+", label: "PRODUCT LINES" },
    { value: "5", suffix: "+", label: "MARKETS" },
    { value: "B2B", suffix: "", label: "WHOLESALE ONLY" }
  ];

  return (

    <section className="w-full py-16 md:py-24 border-t border-border bg-background flex justify-center">
      <div className="w-full max-w-6xl px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8">

        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground mb-2 md:mb-3 tracking-tighter">
              {stat.value}
              {stat.suffix && <span className="text-[#60A5FA]">{stat.suffix}</span>}
            </div>
            <div className="text-muted uppercase text-xs md:text-sm tracking-widest font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
