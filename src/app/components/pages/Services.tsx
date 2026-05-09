import { motion } from "motion/react";
import { Home, Building2, Lightbulb, Ruler, PenTool, Sofa } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Transform your home into a personalized sanctuary with our comprehensive residential design services. From concept to completion, we craft spaces that reflect your lifestyle and aspirations.",
      features: ["Space Planning", "Custom Furniture", "Material Selection", "Lighting Design"]
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Elevate your business environment with sophisticated commercial interiors that inspire productivity and leave lasting impressions on clients and employees alike.",
      features: ["Office Design", "Retail Spaces", "Hospitality", "Brand Integration"]
    },
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description: "Expert guidance to refine your vision and navigate design decisions. Our consultations provide clarity, creative direction, and actionable insights for your project.",
      features: ["Concept Development", "Style Direction", "Budget Planning", "Vendor Recommendations"]
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimize functionality and flow with strategic space planning. We analyze your needs to create layouts that maximize potential and enhance daily living.",
      features: ["Floor Plans", "Traffic Flow", "Furniture Layout", "3D Visualization"]
    },
    {
      icon: PenTool,
      title: "Custom Design",
      description: "Bespoke solutions tailored to your unique requirements. From custom millwork to one-of-a-kind furniture pieces, we bring your most distinctive ideas to life.",
      features: ["Custom Furniture", "Millwork Design", "Unique Fixtures", "Artisan Collaboration"]
    },
    {
      icon: Sofa,
      title: "Styling & Finishing",
      description: "The perfect finishing touches that complete your space. Our styling services curate furnishings, art, and accessories that bring cohesion and character to every room.",
      features: ["Furniture Selection", "Art Curation", "Accessory Styling", "Final Touches"]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your vision, lifestyle, and functional needs through in-depth consultation."
    },
    {
      number: "02",
      title: "Concept",
      description: "Our team develops a comprehensive design concept with mood boards, sketches, and material palettes."
    },
    {
      number: "03",
      title: "Development",
      description: "Detailed plans, 3D renderings, and specifications bring the concept to life with precision."
    },
    {
      number: "04",
      title: "Execution",
      description: "We oversee every detail of implementation, coordinating with craftsmen and vendors for flawless results."
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent tracking-widest uppercase text-sm mb-4">What We Do</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive interior design solutions tailored to transform your spaces into extraordinary environments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <service.icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-widest uppercase text-sm mb-4">How We Work</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Our Design Process
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              A seamless journey from initial concept to final installation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-7xl font-light opacity-20 mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  {step.number}
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {step.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[1px] bg-accent/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent tracking-widest uppercase text-sm mb-4">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Excellence in Every Detail
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our commitment to quality, creativity, and client satisfaction sets us apart in the world of luxury interior design.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Personalized Approach", desc: "Every project is unique, and so is our approach. We listen, collaborate, and create spaces that truly reflect you." },
                  { title: "Expert Craftmanship", desc: "We partner with the finest artisans and craftsmen to ensure impeccable quality in every element." },
                  { title: "Timeless Design", desc: "Our designs transcend trends, creating spaces that remain elegant and relevant for years to come." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square bg-accent/10 border border-accent/20"></div>
                  <div className="aspect-[3/4] bg-accent/10 border border-accent/20"></div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="aspect-[3/4] bg-accent/10 border border-accent/20"></div>
                  <div className="aspect-square bg-accent/10 border border-accent/20"></div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-accent/20 -z-10 hidden lg:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Let's Begin Your Design Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schedule a consultation to discuss your project and discover how we can bring your vision to life
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-accent text-primary-foreground tracking-widest uppercase text-sm hover:bg-accent/90 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
