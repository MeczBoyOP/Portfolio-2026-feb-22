import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";
import { ProjectsModel } from "../components/Scene3D";

function ProjectCard({ project, index }) {
    const [hovered, setHovered] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="project-card glass"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                borderColor: hovered ? project.color + "44" : "var(--border-glass)",
                boxShadow: hovered ? `0 20px 60px ${project.color}22, 0 0 0 1px ${project.color}33` : "none",
                cursor: "pointer",
            }}
        >
            {/* Card header with color accent */}
            <div
                style={{
                    height: "6px",
                    background: `linear-gradient(90deg, ${project.color}, var(--neon-purple))`,
                    boxShadow: `0 0 20px ${project.color}80`,
                }}
            />

            <div style={{ padding: "1.5rem" }}>
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div
                        style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "12px",
                            background: project.color + "18",
                            border: `1px solid ${project.color}44`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.4rem",
                        }}
                    >
                        {project.id === 1 ? "🧠" : project.id === 2 ? "💎" : project.id === 3 ? "🌍" : project.id === 4 ? "🎨" : project.id === 5 ? "⚡" : "🎵"}
                    </div>
                    {project.featured && (
                        <span
                            style={{
                                padding: "3px 10px",
                                borderRadius: "100px",
                                background: project.color + "18",
                                border: `1px solid ${project.color}40`,
                                color: project.color,
                                fontSize: "0.7rem",
                                fontFamily: "var(--font-mono)",
                                letterSpacing: "0.05em",
                            }}
                        >
                            ⭐ FEATURED
                        </span>
                    )}
                </div>

                <h3
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: hovered ? project.color : "var(--text-primary)",
                        marginBottom: "0.5rem",
                        transition: "color 0.3s ease",
                        textShadow: hovered ? `0 0 20px ${project.color}` : "none",
                    }}
                >
                    {project.title}
                </h3>

                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {project.description}
                </p>

                {/* Tech */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            style={{
                                padding: "3px 10px",
                                borderRadius: "100px",
                                background: project.color + "12",
                                border: `1px solid ${project.color}30`,
                                color: project.color,
                                fontSize: "0.72rem",
                                fontFamily: "var(--font-mono)",
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 14px",
                            borderRadius: "8px",
                            border: `1px solid ${project.color}40`,
                            color: project.color,
                            fontSize: "0.78rem",
                            fontFamily: "var(--font-mono)",
                            textDecoration: "none",
                            background: project.color + "0a",
                            transition: "all 0.3s ease",
                        }}
                    >
                        ⌨ Code
                    </motion.a>
                    <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 14px",
                            borderRadius: "8px",
                            border: `1px solid ${project.color}40`,
                            color: project.color,
                            fontSize: "0.78rem",
                            fontFamily: "var(--font-mono)",
                            textDecoration: "none",
                            background: project.color + "0a",
                            transition: "all 0.3s ease",
                        }}
                    >
                        ↗ Live Demo
                    </motion.a>
                </div>
            </div>

            {/* Animated hover overlay */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: `radial-gradient(circle at 50% 50%, ${project.color}08, transparent 70%)`,
                            pointerEvents: "none",
                        }}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const [filter, setFilter] = useState("all");
    const featured = portfolioData.projects.filter(p => p.featured);
    const all = portfolioData.projects;

    const displayed = filter === "featured" ? featured : all;

    return (
        <section id="projects" style={{ position: "relative", padding: "8rem 2rem", background: "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)", zIndex: 5 }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--neon-green)", letterSpacing: "0.3em", display: "block", marginBottom: "0.5rem" }}
                        >
              // 04. projects
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="section-title gradient-text"
                        >
                            FEATURED WORK
                        </motion.h2>
                    </div>

                    <div className="filter-tabs" style={{ display: "flex", gap: "0.5rem" }}>
                        {["all", "featured"].map((f) => (
                            <motion.button
                                key={f}
                                onClick={() => setFilter(f)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    padding: "8px 20px",
                                    borderRadius: "8px",
                                    border: `1px solid ${filter === f ? "var(--neon-green)" : "var(--border-glass)"}`,
                                    background: filter === f ? "rgba(57,255,20,0.12)" : "transparent",
                                    color: filter === f ? "var(--neon-green)" : "var(--text-muted)",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.8rem",
                                    cursor: "pointer",
                                    letterSpacing: "0.05em",
                                    boxShadow: filter === f ? "0 0 15px rgba(57,255,20,0.2)" : "none",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {f.toUpperCase()}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Projects grid + 3D */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "3rem", alignItems: "start" }} className="projects-layout">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                                gap: "1.5rem",
                            }}
                        >
                            {displayed.map((project, i) => (
                                <ProjectCard key={project.id} project={project} index={i} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* 3D Side Widget */}
                    <div className="projects-3d-side" style={{ position: "sticky", top: "100px" }}>
                        <div style={{ height: "350px" }}>
                            <ProjectsModel style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div
                            className="glass"
                            style={{
                                padding: "1.25rem",
                                borderRadius: "16px",
                                marginTop: "1.5rem",
                                borderColor: "rgba(57,255,20,0.15)",
                                textAlign: "center",
                            }}
                        >
                            <div style={{ fontFamily: "var(--font-mono)", color: "var(--neon-green)", fontSize: "0.8rem", marginBottom: "0.5rem", letterSpacing: "0.1em" }}>
                                GITHUB STATS
                            </div>
                            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                                <div>⚛️ 2+ Years React</div>
                                <div>📱 React Native Apps</div>
                                <div>📦 10+ Projects</div>
                                <div>🔗 20+ APIs Integrated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
