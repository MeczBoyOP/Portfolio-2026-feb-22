import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../data/portfolioData";

const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = document.querySelectorAll("section[id]");
            let current = "home";
            sections.forEach(s => {
                if (window.scrollY >= s.offsetTop - 200) current = s.id;
            });
            setActive(current);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
                    background: scrolled ? "var(--bg-glass)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? "1px solid var(--border-glass)" : "none",
                    transition: "all 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={() => handleNavClick("#home")}
                    whileHover={{ scale: 1.05 }}
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.4rem",
                        fontWeight: 900,
                        background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textDecoration: "none",
                        letterSpacing: "0.1em",
                    }}
                >
                    {"<DN/>"}
                </motion.a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            className={`nav-link ${active === link.href.slice(1) ? "active" : ""}`}
                            whileHover={{ y: -2 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                {/* Theme Switcher + Mobile Menu */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    {/* Theme dots */}
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                className={`theme-btn ${theme === t.id ? "active" : ""}`}
                                title={t.label}
                                onClick={() => setTheme(t.id)}
                                style={{
                                    background: `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[1]})`,
                                    outline: "none",
                                    cursor: "pointer",
                                }}
                            />
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            background: "none",
                            border: "1px solid var(--neon-cyan)",
                            color: "var(--neon-cyan)",
                            padding: "6px 10px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                        }}
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: "280px",
                            background: "var(--bg-secondary)",
                            backdropFilter: "blur(30px)",
                            borderLeft: "1px solid var(--border-glass)",
                            zIndex: 999,
                            display: "flex",
                            flexDirection: "column",
                            padding: "5rem 2rem 2rem",
                            gap: "0.5rem",
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.08 }}
                                className={`nav-link ${active === link.href.slice(1) ? "active" : ""}`}
                                style={{ fontSize: "1.1rem", paddingBlock: "0.75rem", display: "block" }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
