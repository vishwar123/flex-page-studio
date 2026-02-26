import { motion } from "framer-motion";

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10x", label: "Faster Processing" },
  { value: "200+", label: "Global Nodes" },
  { value: "50M+", label: "API Calls Daily" },
];

const ProductHighlights = () => {
  return (
    <section id="product" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-display uppercase tracking-widest text-primary mb-3">Why NovaX</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Power meets <span className="text-gradient">simplicity</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              We've stripped away complexity so you can focus on what matters.
              Every interaction is designed to feel effortless while delivering
              uncompromising performance under the hood.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
              {/* Decorative grid */}
              <div className="absolute inset-8 grid grid-cols-4 grid-rows-4 gap-3">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: i % 5 === 0 ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.2)",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
