import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const { name, github, linkedin, twitter } = portfolioData.personal;

    return (
        <footer
            style={{
                position: "relative",
                padding: "3rem 2rem 2rem",
                borderTop: "1px solid var(--border-glass)",
                background: "var(--bg-secondary)",
                zIndex: 5,
                overflow: "hidden",
            }}
        >
            {/* Top glow */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "400px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-purple), transparent)",
                    boxShadow: "0 0 20px var(--neon-cyan)",
                }}
            />

            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                <div
                    className="footer-inner"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "2rem",
                        marginBottom: "2rem",
                    }}
                >
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.5rem",
                            fontWeight: 900,
                            background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        {"<DN/>"}
                    </motion.div>

                    {/* Quick links */}
                    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                        {["home", "about", "skills", "experience", "projects", "contact"].map((link) => (
                            <motion.a
                                key={link}
                                href={`#${link}`}
                                onClick={(e) => { e.preventDefault(); document.querySelector(`#${link}`)?.scrollIntoView({ behavior: "smooth" }); }}
                                whileHover={{ color: "var(--neon-cyan)", y: -2 }}
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.75rem",
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {link}
                            </motion.a>
                        ))}
                    </div>

                    {/* Social */}
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        {[
                            { label: "GH", icon: <FaGithub fontSize={20} />, url: "https://github.com/MeczBoyOP", color: "var(--neon-cyan)" },
                            { label: "LI", icon: <FaLinkedin fontSize={20} />, url: "https://www.linkedin.com/in/dibyendu-nayak-161301189/", color: "var(--neon-blue)" },
                            { label: "INST", icon: <FaInstagram fontSize={20} />, url: "https://www.instagram.com/delete.zeta?igsh=M29wcmtrODRldmll", color: "var(--neon-cyan)" },
                        ].map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -3 }}
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "8px",
                                    border: `1px solid ${s.color}40`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: s.color,
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    background: s.color + "0a",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div
                    style={{
                        borderTop: "1px solid var(--border-glass)",
                        paddingTop: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        © {new Date().getFullYear()} {name}. Built with{" "}
                        <span style={{ color: "var(--neon-pink)" }}>♥</span> using React + Three.js + Framer Motion
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        Designed &amp; Developed by{" "}
                        <span style={{ color: "var(--neon-cyan)" }}>{name}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
