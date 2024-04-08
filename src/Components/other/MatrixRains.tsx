import { Box } from '@mui/material';
import React, { useRef, useEffect, useState, ReactNode } from 'react';

const MatrixRain = ({ children }: { children: ReactNode }) => {
    const canvasRef = useRef(null);
    const [showSite, setShowSite] = useState<boolean>(false);
    const speedRef = useRef(1);


    useEffect(() => {
        const canvas: any = canvasRef.current;
        if (!canvas) {
            return;
        }

        const context = canvas.getContext('2d');
        let animationFrameId: number;
        let frameCount = 0; // Frame counter to control speed

        // Set canvas dimensions
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasDimensions();

        // Matrix characters
        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const cyrillic = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        const greek = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const hebrew = 'אבגדהוזחטיכלמנסעפצקרשת';
        const georgian = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ';
        const devanagari = 'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह';
        const alphabet = katakana + latin + nums + cyrillic + greek + devanagari + georgian + hebrew;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const rainDrops: any[] = Array.from({ length: columns }).fill(1);

        // The drawing function
        const draw = () => {
            if (frameCount % speedRef.current === 0) { // Update only every 'speed' frames
                context.fillStyle = 'rgba(0, 0, 0, 0.05)';
                context.fillRect(0, 0, canvas.width, canvas.height);

                context.fillStyle = '#0F0';
                context.font = `${fontSize}px monospace`;

                for (let i = 0; i < rainDrops.length; i++) {
                    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        rainDrops[i] = 0;
                    }
                    rainDrops[i]++;
                }
            }
            frameCount++;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        // Handle window resize
        const handleResize = () => {
            setCanvasDimensions();
        };
        window.addEventListener('resize', handleResize);

        setTimeout(() => {
            setShowSite(true);
        }, 80);
        setTimeout(() => {
            speedRef.current = 2.5;
        }, 1000);
        // Clean up the canvas on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <Box position="relative" width="100%" height="100vh">
            <Box width="100%" height="100%" position="fixed" sx={{opacity: 0.55}}>
                <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
            </Box>

            <Box position="absolute" top={0} left={0} right={0} bottom={0} style={{
                transition: 'opacity 1.5s',
                opacity: showSite ? 1 : 0, // Fades in when showSite is true
                pointerEvents: 'auto'
            }}>
                <Box style={{ pointerEvents: 'auto' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );

};

export default MatrixRain;
