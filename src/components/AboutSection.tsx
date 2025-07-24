const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Openmind is a makerspace designed to unlock student creativity and make innovation 
            accessible in Kasaragod. We enable hands-on learning, connect students to real-world 
            founders, and help them launch impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;