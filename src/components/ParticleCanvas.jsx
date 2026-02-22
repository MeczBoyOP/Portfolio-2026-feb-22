import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const particles = Array.from({ length: 120 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 0.5,
            alpha: Math.random() * 0.6 + 0.2,
            color: ["#00f5ff", "#bf00ff", "#ff006e", "#39ff14", "#4d79ff"][
                Math.floor(Math.random() * 5)
            ],
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.01,
        }));

        const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += p.pulseSpeed;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const pulseFactor = 0.5 + 0.5 * Math.sin(p.pulse);
                const alpha = p.alpha * pulseFactor;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle =
                    p.color +
                    Math.floor(alpha * 255)
                        .toString(16)
                        .padStart(2, "0");
                ctx.fill();

                // glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                const grad = ctx.createRadialGradient(
                    p.x, p.y, 0, p.x, p.y, p.size * 3
                );
                grad.addColorStop(0, p.color + "33");
                grad.addColorStop(1, "transparent");
                ctx.fillStyle = grad;
                ctx.fill();
            });

            // connection lines
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach((b) => {
                    const dx = a.x - b.x,
                        dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        const alpha = Math.floor((1 - dist / 100) * 40)
                            .toString(16)
                            .padStart(2, "0");
                        ctx.strokeStyle = `#00f5ff${alpha}`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });

                // mouse repulsion
                const mdx = a.x - mouse.x,
                    mdy = a.y - mouse.y;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (mdist < 120) {
                    a.vx += (mdx / mdist) * 0.08;
                    a.vy += (mdy / mdist) * 0.08;
                    const speed = Math.sqrt(a.vx * a.vx + a.vy * a.vy);
                    if (speed > 1.5) { a.vx *= 0.9; a.vy *= 0.9; }
                }
            });

            animId = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="particles-canvas"
            style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
        />
    );
}
