import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ffffff', // Branco (para texto e elementos de destaque)
                secondary: '#00bfff', // Azul claro (para acentos futuristas)
                background: '#000000', // Preto (para o fundo principal)
                text: '#e5e7eb', // Branco gelo (para texto em contraste com o fundo preto)
                border: '#333333', // Cinza escuro (para bordas sutis)
                highlight: '#00bfff', // Azul claro para destaque (cor de onda e elementos interativos)
            },
            fontFamily: {
                sans: ['Orbitron', 'sans-serif'], // Fonte futurista
            },
        },
    },
    plugins: [],
};

export default config;
