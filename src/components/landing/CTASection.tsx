import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-border overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-card" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center py-20 px-6">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to <span className="text-gradient">get started</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Join thousands of teams already building the future with NovaX.
              Start your free trial today — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base">
                Start Free Trial <ArrowRight className="ml-1" size={18} />
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base">
                Talk to Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
