import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            eqeqeq: 'error', // Exige o uso de `===` e `!==` em vez de `==` e `!=`
            'no-unused-vars': ['error'], // Emite um aviso para variáveis não utilizadas
            'arrow-parens': ['error', 'always'], // Exige parênteses em torno dos argumentos das arrow functions
            'prefer-const': 'error', // Sugere o uso de `const` para variáveis não reatribuídas
            camelcase: 'error', // Exige o uso de camelCase para variáveis
        },
    },
    prettierConfig,
];
