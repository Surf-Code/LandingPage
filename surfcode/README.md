# SurfCode

## Configuração do Ambiente de Desenvolvimento

Este documento fornece instruções para configurar o ambiente de desenvolvimento para garantir consistência no código entre todos os desenvolvedores. Seguindo essas diretrizes, você garantirá que o código seja formatado e verificado automaticamente.

### 1. Configuração do Prettier

O Prettier é uma ferramenta de formatação de código que garante uma formatação consistente. Para configurar o Prettier:

1.  **Crie ou atualize o arquivo `.prettierrc` na raiz do projeto com o seguinte conteúdo:**

        ```json
        {
            "singleQuote": true,
            "jsxSingleQuote": true,
            "trailingComma": "es5",
            "tabWidth": 4,
            "semi": true,
            "bracketSpacing": true
        }
        ```
