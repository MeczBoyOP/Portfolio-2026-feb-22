import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

function TimelineCard({ item, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.a
            target="_blank"
            href={item.link}
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="timeline-item"
            style={{ marginBottom: "3rem" }}
        >
            <div
                className="glass"
                style={{
                    padding: "1.75rem",
                    borderRadius: "16px",
                    borderColor: "rgba(0,245,255,0.1)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(0,245,255,0.3)";
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(0,245,255,0.08)";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(0,245,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "4px", color: "var(--text-primary)" }}>
                            {item.title}
                        </h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ color: "var(--neon-cyan)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                                {item.company}
                            </span>
                            <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>• {item.location}</span>
                        </div>
                    </div>
                    <div
                        style={{
                            padding: "4px 12px",
                            borderRadius: "100px",
                            background: "rgba(0,245,255,0.08)",
                            border: "1px solid rgba(0,245,255,0.2)",
                            color: "var(--neon-cyan)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {item.period}
                    </div>
                </div>

                <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1rem" }}>
                    {item.description}
                </p>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {item.tech.map((t) => (
                        <span
                            key={t}
                            style={{
                                padding: "3px 10px",
                                borderRadius: "100px",
                                background: "rgba(191,0,255,0.08)",
                                border: "1px solid rgba(191,0,255,0.2)",
                                color: "var(--neon-purple)",
                                fontSize: "0.72rem",
                                fontFamily: "var(--font-mono)",
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Decorative gradient */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100px",
                        height: "100%",
                        background: "linear-gradient(to left, rgba(0,245,255,0.03), transparent)",
                        pointerEvents: "none",
                    }}
                />
            </div>
        </motion.a>
    );
}

function EduCard({ item, index }) {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="glass"
            style={{
                padding: "1.5rem",
                borderRadius: "16px",
                borderColor: "rgba(191,0,255,0.15)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                }}
            >
                {item.degree}
            </div>
            <div style={{ color: "var(--neon-purple)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                {item.institution}
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontFamily: "var(--font-mono)", marginBottom: "0.75rem" }}>
                {item.period}{item.gpa ? ` • GPA: ${item.gpa}` : ""}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {item.highlights.map((h) => (
                    <span
                        key={h}
                        style={{
                            padding: "3px 10px",
                            borderRadius: "100px",
                            background: "rgba(57,255,20,0.08)",
                            border: "1px solid rgba(57,255,20,0.2)",
                            color: "var(--neon-green)",
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                        }}
                    >
                        🏆 {h}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            style={{ position: "relative", padding: "8rem 2rem", zIndex: 5 }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--neon-pink)", letterSpacing: "0.3em" }}
                    >
            // 03. experience
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title gradient-text"
                        style={{ marginTop: "0.5rem" }}
                    >
                        MY JOURNEY
                    </motion.h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        alignItems: "start",
                    }}
                    className="exp-grid"
                >
                    {/* Experience Timeline */}
                    <div>
                        <div
                            style={{
                                fontFamily: "var(--font-mono)",
                                color: "var(--neon-cyan)",
                                fontSize: "0.85rem",
                                letterSpacing: "0.2em",
                                marginBottom: "2rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <span>WORK EXPERIENCE</span>
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, var(--neon-cyan), transparent)" }} />
                        </div>
                        {portfolioData.experience.map((exp, i) => (
                            <TimelineCard key={exp.company} item={exp} index={i} />
                        ))}
                    </div>

                    {/* Education + Extras */}
                    <div>
                        <div
                            style={{
                                fontFamily: "var(--font-mono)",
                                color: "var(--neon-purple)",
                                fontSize: "0.85rem",
                                letterSpacing: "0.2em",
                                marginBottom: "2rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <span>EDUCATION</span>
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, var(--neon-purple), transparent)" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                            {portfolioData.education.map((edu, i) => (
                                <EduCard key={edu.degree} item={edu} index={i} />
                            ))}
                        </div>

                        {/* Services / What I do */}
                        <div
                            style={{
                                fontFamily: "var(--font-mono)",
                                color: "var(--neon-orange)",
                                fontSize: "0.85rem",
                                letterSpacing: "0.2em",
                                marginBottom: "1.5rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <span>WHAT I DO</span>
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, var(--neon-orange), transparent)" }} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            {[
                                { icon: "⚛️", title: "React Dev", desc: "React.js — hooks, context, component architecture" },
                                { icon: "📱", title: "React Native", desc: "Cross-platform mobile apps with Expo" },
                                { icon: "🔗", title: "REST API", desc: "Axios, TanStack Query, auth flows & CRUD" },
                                { icon: "🚀", title: "Deployment", desc: "Vercel, Netlify, Vite, performance tuning" },
                            ].map((service) => (
                                <motion.div
                                    key={service.title}
                                    whileHover={{ scale: 1.04, y: -4 }}
                                    className="glass"
                                    style={{
                                        padding: "1.25rem",
                                        borderRadius: "12px",
                                        borderColor: "rgba(255,102,0,0.15)",
                                        cursor: "default",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{service.icon}</div>
                                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700, color: "var(--neon-orange)", marginBottom: "4px" }}>
                                        {service.title}
                                    </div>
                                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{service.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
