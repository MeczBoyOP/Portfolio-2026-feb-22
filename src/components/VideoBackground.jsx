import { useEffect, useRef } from "react";

// Procedurally generated video background using Canvas
export default function VideoBackground() {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let raf;
        let t = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Generate animated gradient "video" effect
        function draw() {
            t += 0.005;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Animated aurora gradient
            const grd = ctx.createLinearGradient(
                Math.sin(t) * canvas.width * 0.5 + canvas.width * 0.5,
                0,
                Math.cos(t * 0.7) * canvas.width * 0.5 + canvas.width * 0.5,
                canvas.height
            );

            const alpha1 = (Math.sin(t) * 0.5 + 0.5) * 0.04 + 0.02;
            const alpha2 = (Math.cos(t * 1.3) * 0.5 + 0.5) * 0.04 + 0.02;
            const alpha3 = (Math.sin(t * 0.8) * 0.5 + 0.5) * 0.03 + 0.01;

            grd.addColorStop(0, `rgba(0, 245, 255, ${alpha1})`);
            grd.addColorStop(0.4, `rgba(191, 0, 255, ${alpha2})`);
            grd.addColorStop(0.7, `rgba(255, 0, 110, ${alpha3})`);
            grd.addColorStop(1, `rgba(57, 255, 20, ${alpha1 * 0.5})`);

            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Moving wave lines
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                const waveAlpha = 0.03 + i * 0.005;
                ctx.strokeStyle = `rgba(0, 245, 255, ${waveAlpha})`;
                ctx.lineWidth = 1;
                for (let x = 0; x <= canvas.width; x += 4) {
                    const y =
                        canvas.height * 0.5 +
                        Math.sin(x * 0.008 + t * (1 + i * 0.2)) * (50 + i * 20) +
                        Math.cos(x * 0.004 + t * 0.5) * 30;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            // Pulsing circles
            for (let i = 0; i < 3; i++) {
                const cx = canvas.width * (0.2 + i * 0.3);
                const cy = canvas.height * 0.5;
                const r = 100 + Math.sin(t * 2 + i) * 50;
                const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
                const colors = ["rgba(0,245,255,", "rgba(191,0,255,", "rgba(255,0,110,"];
                grad.addColorStop(0, colors[i] + "0.03)");
                grad.addColorStop(1, colors[i] + "0)");
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();
            }

            raf = requestAnimationFrame(draw);
        }

        draw();
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                opacity: 0.8,
            }}
        />
    );
}
