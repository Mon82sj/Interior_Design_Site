import { Link } from "react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h2 className="text-2xl mb-6 tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="font-light">WALNUTPINE</span>
              <span className="font-semibold text-accent"> INTERIORS</span>
            </h2>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              Crafting sophisticated spaces that blend timeless elegance with modern functionality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-accent/30 hover:bg-accent hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-accent/30 hover:bg-accent hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 border border-accent/30 hover:bg-accent hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Portfolio", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6 text-accent">Services</h3>
            <ul className="space-y-3">
              {["Residential Design", "Commercial Spaces", "Consultation", "Project Management", "Custom Furniture"].map((service) => (
                <li key={service} className="text-sm opacity-80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6 text-accent">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Design Avenue<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone size={18} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail size={18} className="flex-shrink-0" />
                <span>hello@walnutpineinteriors.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {currentYear} Walnutpine Interiors. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
