const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Docs", "API", "Community", "Support"],
  Legal: ["Privacy", "Terms", "Security"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display text-xl font-bold text-foreground tracking-tight">
              Nova<span className="text-gradient">X</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Building the future of product technology.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 NovaX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
