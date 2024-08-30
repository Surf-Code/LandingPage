// src/components/WelcomeScreen.tsx
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import logo from '@/public/logoSurfCode.jpg';

const WelcomeScreen = () => {
    const [show, setShow] = useState(true);

    const fadeIn = useSpring({
        opacity: show ? 1 : 0,
        transform: show ? 'scale(1)' : 'scale(0.9)',
        config: { duration: 1000 },
    });

    const waveAnimation = useSpring({
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-20px)' },
        config: { duration: 2000 },
        loop: { reverse: true },
    });

    const iconWaveAnimation = useSpring({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
        config: { duration: 4000 },
        loop: true,
    });

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <animated.div
            style={{
                ...fadeIn,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000000',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                zIndex: 9999,
                display: show ? 'flex' : 'none',
            }}
        >
            <div className='wave-container'>
                <animated.div style={waveAnimation}>
                    <Image alt='Logo' src={logo} width={200} height={100} />
                    <p> Bem-vindo ao surfCode!</p>
                    <FontAwesomeIcon icon={faWater} color='#00bfff' size='sm' />
                </animated.div>
            </div>
            <animated.div style={iconWaveAnimation}></animated.div>
        </animated.div>
    );
};

export default WelcomeScreen;
