import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const dotRef = useRef();
    const ringRef = useRef();

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let raf;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX - 5 + "px";
            dot.style.top = mouseY - 5 + "px";
        };

        const animate = () => {
            ringX += (mouseX - ringX - 20) * 0.12;
            ringY += (mouseY - ringY - 20) * 0.12;
            ring.style.left = ringX + "px";
            ring.style.top = ringY + "px";
            raf = requestAnimationFrame(animate);
        };

        const onMouseEnterLink = () => {
            ring.style.width = "60px";
            ring.style.height = "60px";
            ring.style.borderColor = "var(--neon-purple)";
            dot.style.background = "var(--neon-purple)";
        };
        const onMouseLeaveLink = () => {
            ring.style.width = "40px";
            ring.style.height = "40px";
            ring.style.borderColor = "var(--neon-cyan)";
            dot.style.background = "var(--neon-cyan)";
        };

        const links = document.querySelectorAll("a, button, [data-cursor]");
        links.forEach(l => {
            l.addEventListener("mouseenter", onMouseEnterLink);
            l.addEventListener("mouseleave", onMouseLeaveLink);
        });

        window.addEventListener("mousemove", onMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}
