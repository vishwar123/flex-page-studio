import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, Fintech Corp",
    quote: "NovaX transformed our entire pipeline. The speed improvements alone justified the switch.",
  },
  {
    name: "Marcus Rivera",
    role: "Lead Engineer, ScaleUp",
    quote: "The developer experience is unmatched. We shipped 3x faster in our first quarter.",
  },
  {
    name: "Aisha Patel",
    role: "VP Product, DataFlow",
    quote: "Security and performance without compromise. Our clients trust us more because of NovaX.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display uppercase tracking-widest text-primary mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Loved by <span className="text-gradient">teams</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
