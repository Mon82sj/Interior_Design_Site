import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Award, Users, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      title: "Modern Minimalist",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Contemporary Elegance",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Luxe Living",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Refined Spaces",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Luxury interior design"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl mb-6 text-primary-foreground tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Elevate Your
              <br />
              <span className="text-accent">Living Experience</span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Where timeless elegance meets contemporary design. Crafting sophisticated interiors that inspire and captivate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/portfolio"
              className="group px-8 py-4 bg-accent text-primary-foreground tracking-widest uppercase text-sm hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Portfolio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground tracking-widest uppercase text-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-[1400px] mx-auto px-6 lg:px-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Award, number: "15+", label: "Years Experience" },
              { icon: Users, number: "500+", label: "Projects Completed" },
              { icon: Sparkles, number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-4xl md:text-5xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {stat.number}
                </h3>
                <p className="text-sm tracking-widest uppercase opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Interior design"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-accent/30 hidden lg:block"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent tracking-widest uppercase text-sm mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Crafting Spaces That Tell Your Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Luxe Interiors, we believe that every space has a story to tell. Our team of expert designers works meticulously to transform your vision into reality, creating environments that are not only beautiful but deeply personal.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 15 years of experience in luxury interior design, we've mastered the art of blending aesthetics with functionality, ensuring every detail reflects your unique style and needs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all duration-300 tracking-wider uppercase text-sm"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-widest uppercase text-sm mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of residential and commercial interior design projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-primary-foreground">
                    <p className="text-accent text-sm tracking-widest uppercase mb-2">{project.category}</p>
                    <h3 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary hover:bg-primary hover:text-primary-foreground tracking-widest uppercase text-sm transition-all duration-300"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
            Let's collaborate to create an interior that reflects your vision and exceeds your expectations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary tracking-widest uppercase text-sm hover:bg-accent/90 transition-all duration-300"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
