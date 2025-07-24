import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This space helped me turn my project into a real product!",
      author: "Arya",
      role: "Student Innovator"
    },
    {
      quote: "Brilliant minds and real ideas — it's Kasaragod's innovation hub.",
      author: "Jaseel",
      role: "Founder"
    }
  ];

  return (
    <section className="py-20 px-4 bg-soft-grey">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover fade-in-up border-none shadow-card" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">— {testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;