import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function StatCard({ icon, value, label }) {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{
                padding: "1.5rem",
                borderRadius: "16px",
                textAlign: "center",
                borderColor: "rgba(0,245,255,0.1)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{icon}</div>
            <div
                style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "var(--neon-cyan)",
                    textShadow: "0 0 20px var(--neon-cyan)",
                }}
            >
                {value}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginTop: "4px" }}>
                {label}
            </div>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at 50% 100%, rgba(0,245,255,0.06), transparent 70%)",
                    pointerEvents: "none",
                }}
            />
        </motion.div>
    );
}

export default function AboutSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section
            id="about"
            style={{
                position: "relative",
                padding: "8rem 2rem",
                maxWidth: "1400px",
                margin: "0 auto",
                zIndex: 5,
            }}
        >
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {/* Section Label */}
                <motion.div variants={itemVariants} style={{ textAlign: "center", marginBottom: "1rem" }}>
                    <span
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.85rem",
                            color: "var(--neon-cyan)",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                        }}
                    >
            // 01. about me
                    </span>
                </motion.div>

                <motion.h2 variants={itemVariants} className="section-title gradient-text" style={{ textAlign: "center", marginBottom: "4rem" }}>
                    WHO I AM
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        alignItems: "center",
                        marginBottom: "5rem",
                    }}
                    className="about-grid"
                >
                    {/* Left: 3D Illustration */}
                    <motion.div variants={itemVariants} style={{ position: "relative" }}>
                        {/* Avatar placeholder – neon circle */}
                        <div
                            style={{
                                width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1",
                                borderRadius: "50%",
                                background: "radial-gradient(circle at 40% 30%, rgba(0,245,255,0.2), rgba(191,0,255,0.15) 60%, transparent)",
                                border: "2px solid rgba(0,245,255,0.2)",
                                boxShadow: "0 0 60px rgba(0,245,255,0.15), 0 0 120px rgba(191,0,255,0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto",
                                position: "relative",
                                animation: "float 6s ease-in-out infinite",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "8rem",
                                    fontWeight: 900,
                                    background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                DN
                            </div>
                            {/* Orbiting dots */}
                            {["#00f5ff", "#bf00ff", "#ff006e"].map((color, i) => (
                                <div
                                    key={i}
                                    style={{
                                        position: "absolute",
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        background: color,
                                        boxShadow: `0 0 15px ${color}`,
                                        animation: `orbit ${3 + i}s linear infinite`,
                                        animationDelay: `${i * -1}s`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Code snippet card */}
                        <motion.div
                            className="glass"
                            style={{
                                position: "absolute",
                                bottom: "0",
                                right: "0",
                                padding: "1rem 1.5rem",
                                borderRadius: "12px",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.8rem",
                                lineHeight: 1.8,
                                borderColor: "rgba(0,245,255,0.15)",
                            }}
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.7 }}
                        >
                            <span style={{ color: "var(--neon-pink)" }}>const</span>{" "}
                            <span style={{ color: "var(--neon-cyan)" }}>developer</span>
                            {" = {"}
                            <br />
                            {"  "}
                            <span style={{ color: "var(--neon-purple)" }}>passion</span>: <span style={{ color: "var(--neon-green)" }}>"∞"</span>,
                            <br />
                            {"  "}
                            <span style={{ color: "var(--neon-purple)" }}>coffee</span>: <span style={{ color: "var(--neon-green)" }}>true</span>,
                            <br />
                            {"  "}
                            <span style={{ color: "var(--neon-purple)" }}>bugs</span>: <span style={{ color: "var(--neon-green)" }}>false</span>
                            <br />
                            {"}"};
                        </motion.div>
                    </motion.div>

                    {/* Right: Bio */}
                    <div>
                        <motion.p variants={itemVariants} style={{ color: "var(--text-secondary)", lineHeight: 2, marginBottom: "1.5rem", fontSize: "1rem" }}>
                            {portfolioData.personal.bio}
                        </motion.p>
                        <motion.p variants={itemVariants} style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem", fontSize: "0.95rem" }}>
                            I love building clean, performant UIs with React and React Native. Outside of work,
                            I experiment with new tools, explore open-source projects, and constantly sharpen my
                            skills — because great frontend is both science and art.
                        </motion.p>

                        {/* Info rows */}
                        {[
                            { label: "Location", value: portfolioData.personal.location },
                            { label: "Email", value: portfolioData.personal.email },
                            { label: "Phone", value: portfolioData.personal.phone },
                            { label: "Availability", value: "Open to opportunities" },
                        ].map(({ label, value }) => (
                            <motion.div
                                key={label}
                                variants={itemVariants}
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    padding: "0.75rem 0",
                                    borderBottom: "1px solid var(--border-glass)",
                                }}
                            >
                                <span style={{ fontFamily: "var(--font-mono)", color: "var(--neon-cyan)", fontSize: "0.85rem", minWidth: "120px" }}>
                                    {label}:
                                </span>
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{value}</span>
                            </motion.div>
                        ))}

                        {/* Certifications */}
                        <motion.div variants={itemVariants} style={{ marginTop: "1.5rem" }}>
                            <div style={{ fontFamily: "var(--font-mono)", color: "var(--neon-purple)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                                CERTIFICATIONS //
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                {portfolioData.certifications.map((cert) => (
                                    <span
                                        key={cert}
                                        style={{
                                            padding: "4px 12px",
                                            borderRadius: "100px",
                                            background: "rgba(191,0,255,0.1)",
                                            border: "1px solid rgba(191,0,255,0.3)",
                                            color: "var(--neon-purple)",
                                            fontSize: "0.75rem",
                                            fontFamily: "var(--font-mono)",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1.5rem",
                    }}
                    className="stats-grid"
                >
                    {portfolioData.stats.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </motion.div>

        </section>
    );
}
