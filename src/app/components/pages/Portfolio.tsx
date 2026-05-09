import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Hospitality"];

  const projects = [
    {
      title: "Modern Minimalist Villa",
      category: "Residential",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2025"
    },
    {
      title: "Contemporary Fireplace Lounge",
      category: "Residential",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2025"
    },
    {
      title: "Luxe Living Suite",
      category: "Residential",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2024"
    },
    {
      title: "Executive Dining Space",
      category: "Commercial",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2024"
    },
    {
      title: "Elegant Residence",
      category: "Residential",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1672927936377-97d1be3976cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2024"
    },
    {
      title: "Refined Corporate Space",
      category: "Commercial",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2024"
    },
    {
      title: "Coastal Retreat",
      category: "Residential",
      location: "Malibu, CA",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2023"
    },
    {
      title: "Urban Luxury Living",
      category: "Residential",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1687180497716-5872969e5125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2023"
    },
    {
      title: "Serene Living Room",
      category: "Residential",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2023"
    },
    {
      title: "Contemporary Lounge",
      category: "Hospitality",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      year: "2023"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
            <p className="text-accent tracking-widest uppercase text-sm mb-4">Our Work</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A curated collection of our most distinguished interior design projects across residential, commercial, and hospitality spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 tracking-widest uppercase text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-accent text-primary-foreground"
                    : "border border-border hover:border-accent"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4">
                  <div className="aspect-[3/4] overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-accent text-xs tracking-widest uppercase mb-1">{project.category}</p>
                      <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-80">{project.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                  <span className="text-sm text-accent">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
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
              Have a Project in Mind?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create something extraordinary together
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-primary tracking-widest uppercase text-sm hover:bg-accent/90 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
