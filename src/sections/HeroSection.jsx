import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import Hero3D from "../components/Hero3D";

const TYPING_TEXTS = portfolioData.personal.taglines;

function TypeWriter() {
    const [text, setText] = useState("");
    const [idx, setIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = TYPING_TEXTS[idx];
        let timeout;
        if (!deleting && charIdx < current.length) {
            timeout = setTimeout(() => setCharIdx(c => c + 1), 80);
        } else if (!deleting && charIdx === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => setCharIdx(c => c - 1), 40);
        } else {
            setDeleting(false);
            setIdx(i => (i + 1) % TYPING_TEXTS.length);
        }
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, idx]);

    return (
        <span>
            <span style={{ color: "var(--neon-cyan)" }}>{TYPING_TEXTS[idx].slice(0, charIdx)}</span>
            <span
                style={{
                    display: "inline-block",
                    width: "3px",
                    height: "1.1em",
                    background: "var(--neon-cyan)",
                    marginLeft: "3px",
                    verticalAlign: "text-bottom",
                    animation: "blink-caret 0.75s step-end infinite",
                }}
            />
        </span>
    );
}

export default function HeroSection() {
    const { name, email, github, linkedin } = portfolioData.personal;

    return (
        <section
            id="home"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                paddingTop: "80px",
            }}
        >
            {/* Animated gradient BG */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,245,255,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 30% 50%, rgba(191,0,255,0.06) 0%, transparent 60%)",
                    zIndex: 0,
                }}
            />

            {/* Scan line */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
                    opacity: 0.4,
                    animation: "scan-line 6s linear infinite",
                    zIndex: 1,
                }}
            />

            {/* Grid */}
            <div className="grid-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 2rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                    alignItems: "center",
                }}
                className="responsive-hero"
            >
                {/* Left: Text */}
                <div>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "6px 16px",
                            borderRadius: "100px",
                            border: "1px solid rgba(0,245,255,0.3)",
                            background: "rgba(0,245,255,0.07)",
                            marginBottom: "1.5rem",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.78rem",
                            color: "var(--neon-cyan)",
                            letterSpacing: "0.1em",
                        }}
                    >
                        <span
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "var(--neon-green)",
                                boxShadow: "0 0 10px var(--neon-green)",
                                animation: "pulse-neon 2s ease-in-out infinite",
                            }}
                        />
                        AVAILABLE FOR HIRE
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(2.5rem, 5vw, 5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "0.5rem",
                        }}
                    >
                        <span className="animate-glitch">
                            {name.split(" ")[0]}
                        </span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                backgroundSize: "200%",
                                animation: "shimmer 3s linear infinite",
                            }}
                        >
                            {name.split(" ")[1]}
                        </span>
                    </motion.h1>

                    {/* Typewriter role */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                            color: "var(--text-secondary)",
                            marginBottom: "1.5rem",
                            minHeight: "2rem",
                        }}
                    >
                        I am a <TypeWriter />
                    </motion.p>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            color: "var(--text-muted)",
                            maxWidth: "520px",
                            lineHeight: 1.8,
                            marginBottom: "2.5rem",
                            fontSize: "0.95rem",
                        }}
                    >
                        {portfolioData.personal.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="cta-buttons"
                        style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}
                    >
                        <motion.a
                            href="#projects"
                            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            className="neon-glow-btn"
                            style={{
                                padding: "0.85rem 2rem",
                                borderRadius: "8px",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.85rem",
                                letterSpacing: "0.1em",
                                textDecoration: "none",
                                cursor: "pointer",
                                display: "inline-block",
                            }}
                        >
                            VIEW PROJECTS →
                        </motion.a>
                        <motion.a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "0.85rem 2rem",
                                borderRadius: "8px",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.85rem",
                                letterSpacing: "0.1em",
                                textDecoration: "none",
                                cursor: "pointer",
                                display: "inline-block",
                                color: "var(--text-secondary)",
                                border: "1px solid var(--border-glass)",
                                background: "var(--bg-glass)",
                                backdropFilter: "blur(10px)",
                                transition: "all 0.3s ease",
                            }}
                        >
                            CONTACT ME
                        </motion.a>
                        {/* Download Resume */}
                        <motion.a
                            href="/resume.html?download=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "0.85rem 2rem",
                                borderRadius: "8px",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.85rem",
                                letterSpacing: "0.1em",
                                textDecoration: "none",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                color: "var(--neon-purple)",
                                border: "1px solid var(--neon-purple)",
                                background: "rgba(191,0,255,0.08)",
                                boxShadow: "0 0 15px rgba(191,0,255,0.2)",
                                backdropFilter: "blur(10px)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = "0 0 30px rgba(191,0,255,0.5)";
                                e.currentTarget.style.background = "rgba(191,0,255,0.18)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = "0 0 15px rgba(191,0,255,0.2)";
                                e.currentTarget.style.background = "rgba(191,0,255,0.08)";
                            }}
                        >
                            ⤓ RESUME
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
                    >
                        {portfolioData.stats.map((stat) => (
                            <div key={stat.label} style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "1.8rem",
                                        fontWeight: 900,
                                        color: "var(--neon-cyan)",
                                        textShadow: "0 0 20px var(--neon-cyan)",
                                    }}
                                >
                                    {stat.icon} {stat.value}
                                </div>
                                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginTop: "2px" }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right: 3D Canvas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ height: "600px" }}
                    className="hero-3d-canvas"
                >
                    <Hero3D style={{ width: "100%", height: "100%" }} />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.1em",
                    zIndex: 5,
                }}
            >
                SCROLL
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: "24px",
                        height: "40px",
                        borderRadius: "12px",
                        border: "1px solid rgba(0,245,255,0.4)",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "6px",
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "var(--neon-cyan)",
                            boxShadow: "0 0 6px var(--neon-cyan)",
                        }}
                    />
                </motion.div>
            </motion.div>

            <style>{`
        @media (max-width: 768px) {
          .responsive-hero { grid-template-columns: 1fr !important; }
          .hero-3d-canvas { height: 350px !important; order: -1; }
        }
      `}</style>
        </section>
    );
}
