import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../data/portfolioData";
import { ContactModel } from "../components/Scene3D";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const SOCIAL_LINKS = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/MeczBoyOP", color: "var(--neon-cyan)" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/dibyendu-nayak-161301189/", color: "var(--neon-blue)" },
    { icon: <IoMail />, label: "Email", url: "mailto:dipnayak99@gmail.com", color: "var(--neon-pink)" },
];

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        await new Promise(r => setTimeout(r, 1800));
        setSending(false);
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    const inputStyle = {
        width: "100%",
        padding: "0.85rem 1rem",
        borderRadius: "10px",
        border: "1px solid var(--border-glass)",
        background: "var(--bg-tertiary)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.9rem",
        outline: "none",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxSizing: "border-box",
    };

    const labelStyle = {
        fontFamily: "var(--font-mono)",
        fontSize: "0.78rem",
        color: "var(--neon-cyan)",
        letterSpacing: "0.1em",
        display: "block",
        marginBottom: "6px",
    };

    return (
        <section
            id="contact"
            style={{ position: "relative", padding: "8rem 2rem", zIndex: 5, overflow: "hidden" }}
        >
            {/* BG Glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,102,0,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--neon-orange)", letterSpacing: "0.3em", display: "block", marginBottom: "0.5rem" }}
                    >
            // 05. contact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title gradient-text"
                    >
                        LET'S CONNECT
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: "var(--text-muted)", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0", lineHeight: 1.8 }}
                    >
                        Have a project in mind? Let's build something amazing together.
                        I'm always open to discussing new opportunities.
                    </motion.p>
                </div>

                <div
                    ref={ref}
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}
                    className="contact-grid"
                >
                    {/* Left: Info + 3D */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* 3D Model */}
                        <div className="contact-3d" style={{ height: "280px", marginBottom: "2rem" }}>
                            <ContactModel style={{ width: "100%", height: "100%" }} />
                        </div>

                        {/* Contact Info */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                            {[
                                { icon: "📍", label: "Location", value: portfolioData.personal.location },
                                { icon: "📧", label: "Email", value: portfolioData.personal.email },
                                { icon: "📞", label: "Phone", value: portfolioData.personal.phone },
                            ].map((item) => (
                                <motion.div
                                    key={item.label}
                                    whileHover={{ x: 6 }}
                                    className="glass"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1rem 1.25rem",
                                        borderRadius: "12px",
                                        borderColor: "rgba(255,102,0,0.15)",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                                    <div>
                                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--neon-orange)", letterSpacing: "0.1em", marginBottom: "2px" }}>
                                            {item.label}
                                        </div>
                                        <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <div style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontSize: "0.78rem", letterSpacing: "0.15em", marginBottom: "1rem" }}>
                                FIND ME ON //
                            </div>
                            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                                {SOCIAL_LINKS.map((s) => (
                                    <motion.a
                                        key={s.label}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            padding: "8px 16px",
                                            borderRadius: "10px",
                                            border: `1px solid ${s.color}40`,
                                            color: s.color,
                                            fontSize: "0.83rem",
                                            fontFamily: "var(--font-mono)",
                                            textDecoration: "none",
                                            background: s.color + "0a",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        {s.icon} {s.label}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass"
                        style={{ padding: "2rem", borderRadius: "20px", borderColor: "rgba(255,102,0,0.15)" }}
                    >
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--neon-orange)" }}>
                            SEND A MESSAGE
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <div>
                                    <label style={labelStyle}>NAME *</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })}
                                        placeholder="Your name"
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = "var(--neon-orange)"; e.target.style.boxShadow = "0 0 15px rgba(255,102,0,0.15)"; }}
                                        onBlur={e => { e.target.style.borderColor = "var(--border-glass)"; e.target.style.boxShadow = "none"; }}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>EMAIL *</label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        placeholder="hello@email.com"
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = "var(--neon-orange)"; e.target.style.boxShadow = "0 0 15px rgba(255,102,0,0.15)"; }}
                                        onBlur={e => { e.target.style.borderColor = "var(--border-glass)"; e.target.style.boxShadow = "none"; }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={labelStyle}>SUBJECT *</label>
                                <input
                                    type="text"
                                    required
                                    value={form.subject}
                                    onChange={e => setForm({ ...form, subject: e.target.value })}
                                    placeholder="Project Collaboration"
                                    style={inputStyle}
                                    onFocus={e => { e.target.style.borderColor = "var(--neon-orange)"; e.target.style.boxShadow = "0 0 15px rgba(255,102,0,0.15)"; }}
                                    onBlur={e => { e.target.style.borderColor = "var(--border-glass)"; e.target.style.boxShadow = "none"; }}
                                />
                            </div>

                            <div>
                                <label style={labelStyle}>MESSAGE *</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    placeholder="Tell me about your project..."
                                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                                    onFocus={e => { e.target.style.borderColor = "var(--neon-orange)"; e.target.style.boxShadow = "0 0 15px rgba(255,102,0,0.15)"; }}
                                    onBlur={e => { e.target.style.borderColor = "var(--border-glass)"; e.target.style.boxShadow = "none"; }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={sending || sent}
                                whileHover={{ scale: sending || sent ? 1 : 1.03, y: sending || sent ? 0 : -2 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    padding: "1rem 2rem",
                                    borderRadius: "10px",
                                    border: `1px solid ${sent ? "var(--neon-green)" : "var(--neon-orange)"}`,
                                    background: sent ? "rgba(57,255,20,0.15)" : sending ? "rgba(255,102,0,0.3)" : "rgba(255,102,0,0.12)",
                                    color: sent ? "var(--neon-green)" : "var(--neon-orange)",
                                    fontFamily: "var(--font-display)",
                                    fontSize: "0.9rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.1em",
                                    cursor: sending || sent ? "default" : "pointer",
                                    boxShadow: `0 0 ${sent ? "20px rgba(57,255,20,0.3)" : "15px rgba(255,102,0,0.15)"}`,
                                    transition: "all 0.4s ease",
                                }}
                            >
                                {sending ? (
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                                        <span style={{
                                            width: "14px", height: "14px", border: "2px solid var(--neon-orange)",
                                            borderTopColor: "transparent", borderRadius: "50%",
                                            animation: "rotate-slow 0.8s linear infinite",
                                            display: "inline-block"
                                        }} />
                                        SENDING...
                                    </span>
                                ) : sent ? "✓ MESSAGE SENT!" : "SEND MESSAGE →"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
