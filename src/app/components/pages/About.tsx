import { motion } from "motion/react";
import { Target, Eye, Heart, Award } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const team = [
    {
      name: "Isabella Chen",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Interior Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      name: "Sophia Williams",
      role: "Design Consultant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      name: "David Park",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters. We approach each project with meticulous attention to detail and unwavering commitment to excellence."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "We see beyond the present, creating spaces that evolve with you while maintaining timeless appeal and sophistication."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for design drives everything we do. We pour creativity and dedication into every project, big or small."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We set the highest standards for ourselves, consistently delivering results that exceed expectations and inspire."
    }
  ];

  const milestones = [
    { year: "2009", event: "Luxe Interiors Founded" },
    { year: "2012", event: "First International Project" },
    { year: "2015", event: "Awarded Best Residential Design" },
    { year: "2018", event: "Expanded to Commercial Sector" },
    { year: "2021", event: "500+ Projects Completed" },
    { year: "2025", event: "Industry Excellence Recognition" }
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
            <p className="text-accent tracking-widest uppercase text-sm mb-4">Who We Are</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              About Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Creating exceptional interiors for over 15 years, one remarkable space at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent tracking-widest uppercase text-sm mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Passion Meets Purpose
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2009, Luxe Interiors began with a simple yet powerful vision: to transform spaces into extraordinary experiences. What started as a boutique design studio has grown into a celebrated name in luxury interior design, renowned for creating spaces that blend sophistication with soul.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our founder, Isabella Chen, recognized that true luxury lies not in opulence alone, but in the thoughtful curation of elements that reflect the unique story of each client. This philosophy remains at the heart of everything we do.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to have completed over 500 projects spanning residential estates, commercial spaces, and hospitality venues. Each project is a testament to our commitment to excellence, creativity, and the transformative power of exceptional design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Design studio"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-accent/30 -z-10 hidden lg:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-widest uppercase text-sm mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  {value.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-widest uppercase text-sm mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Milestones
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start mb-12 last:mb-0 relative"
              >
                <div className="flex-shrink-0 text-right w-24">
                  <span className="text-3xl text-accent" style={{ fontFamily: "var(--font-serif)" }}>
                    {milestone.year}
                  </span>
                </div>
                <div className="relative flex-shrink-0 pt-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-border"></div>
                  )}
                </div>
                <div className="pt-1">
                  <p className="text-lg">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-widest uppercase text-sm mb-4">Our Team</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Meet the Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A talented team of designers, architects, and project managers dedicated to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                  {member.name}
                </h3>
                <p className="text-sm text-accent tracking-wider uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Ready to Work Together?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create something extraordinary for your space
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-primary tracking-widest uppercase text-sm hover:bg-accent/90 transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
