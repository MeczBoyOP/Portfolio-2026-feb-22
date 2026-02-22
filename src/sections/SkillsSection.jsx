import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";
import { SkillsModel } from "../components/Scene3D";

const CATEGORIES = ["frontend", "backend", "tools"];
const CATEGORY_LABELS = { frontend: "Frontend", backend: "Backend", tools: "Tools & DevOps" };
const CATEGORY_COLORS = { frontend: "var(--neon-cyan)", backend: "var(--neon-purple)", tools: "var(--neon-orange)" };

function SkillBar({ name, level, color, delay }) {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            style={{ marginBottom: "1.25rem" }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {name}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color }}>
                    {level}%
                </span>
            </div>
            <div className="skill-bar">
                <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
                    style={{
                        background: `linear-gradient(90deg, ${color}, var(--neon-purple))`,
                        boxShadow: `0 0 10px ${color}`,
                    }}
                />
            </div>
        </motion.div>
    );
}

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState("frontend");
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section
            id="skills"
            style={{
                position: "relative",
                padding: "8rem 2rem",
                background: "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)",
                zIndex: 5,
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--neon-purple)", letterSpacing: "0.3em" }}
                    >
            // 02. skills
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title gradient-text"
                        style={{ marginTop: "0.5rem" }}
                    >
                        TECH STACK
                    </motion.h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        alignItems: "start",
                    }}
                    className="skills-layout"
                >
                    {/* Left: Skills bars */}
                    <div ref={ref}>
                        {/* Tabs */}
                        <div
                            style={{
                                display: "flex",
                                gap: "0.5rem",
                                marginBottom: "2rem",
                                background: "var(--bg-tertiary)",
                                padding: "6px",
                                borderRadius: "12px",
                            }}
                            className="skills-tabs"
                        >
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    style={{
                                        flex: 1,
                                        padding: "0.6rem 1rem",
                                        borderRadius: "8px",
                                        border: "none",
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "0.8rem",
                                        letterSpacing: "0.05em",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        background: activeTab === cat ? CATEGORY_COLORS[cat] : "transparent",
                                        color: activeTab === cat ? "#000" : "var(--text-muted)",
                                        boxShadow: activeTab === cat ? `0 0 20px ${CATEGORY_COLORS[cat]}` : "none",
                                        fontWeight: activeTab === cat ? 700 : 400,
                                    }}
                                >
                                    {CATEGORY_LABELS[cat]}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {portfolioData.skills[activeTab].map((skill, i) => (
                                    <SkillBar
                                        key={skill.name}
                                        {...skill}
                                        color={CATEGORY_COLORS[activeTab]}
                                        delay={i * 0.08}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Tech Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            style={{ marginTop: "2rem" }}
                        >
                            <div style={{ fontFamily: "var(--font-mono)", color: "var(--neon-pink)", fontSize: "0.8rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>
                                OTHER TECHNOLOGIES //
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                {["Context API", "Memoization", "Firebase", "Expo", "Protected Routes", "JWT", "TanStack Query", "Drag & Drop", "QR Code", "Pagination"].map((tech) => (
                                    <motion.span
                                        key={tech}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        style={{
                                            padding: "4px 14px",
                                            borderRadius: "100px",
                                            background: "rgba(255,0,110,0.08)",
                                            border: "1px solid rgba(255,0,110,0.25)",
                                            color: "var(--neon-pink)",
                                            fontSize: "0.75rem",
                                            fontFamily: "var(--font-mono)",
                                            cursor: "default",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: 3D Model */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="skills-3d"
                        style={{ height: "500px", position: "relative" }}
                    >
                        <SkillsModel style={{ width: "100%", height: "100%" }} />
                        {/* Overlay label */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "1rem",
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.75rem",
                                color: "var(--text-muted)",
                                letterSpacing: "0.15em",
                                textAlign: "center",
                                pointerEvents: "none",
                            }}
                        >
                            ↻ INTERACTIVE 3D MODEL
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
