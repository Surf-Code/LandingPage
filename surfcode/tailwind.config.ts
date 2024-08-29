import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0056d2', // Cor principal (azul)
                secondary: '#ff6f61', // Cor secundária (laranja)
                background: '#f8f9fa', // Cor de fundo (cinza claro)
                text: '#333333', // Cor do texto (cinza escuro)
                border: '#e0e0e0', // Cor da borda (cinza claro)
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'], // Fonte principal
                serif: ['Merriweather', 'serif'], // Fonte secundária (opcional)
            },
        },
    },
    plugins: [],
};

export default config;
