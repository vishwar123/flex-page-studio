import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Layers, Gauge, Globe } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-millisecond response times powered by cutting-edge architecture." },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption with zero-knowledge protocols built in." },
  { icon: Cpu, title: "AI Powered", desc: "Intelligent automation that learns and adapts to your workflow." },
  { icon: Layers, title: "Modular Design", desc: "Plug-and-play components that scale with your business." },
  { icon: Gauge, title: "Real-time Analytics", desc: "Live dashboards with actionable insights at a glance." },
  { icon: Globe, title: "Global CDN", desc: "Deploy anywhere with edge computing across 200+ locations." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display uppercase tracking-widest text-primary mb-3">Features</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient">performance</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:glow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
