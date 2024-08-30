# SurfCode Configuração do Ambiente de Desenvolvimento

Este documento fornece instruções para configurar o ambiente de desenvolvimento para garantir consistência no código entre todos os desenvolvedores. Seguindo essas diretrizes, você garantirá que o código seja formatado e verificado automaticamente.

# 0.1 **Como iniciar o projeto**

### 1. Ao clonar o repositório execute o comando abaixo para instalar as dependencias

```
   $ npm install
```

### 2. Para configurar o husky devemos executar

```
   $ npm run prepare
```

### 3. Para formatar o código de acordo com regas de eslint e prettier de forma manual devemos executar

```
   $ npm run check
```

### 4. Para iniciar o projeto devemos executar

```
   $ npm run dev
```

# 0.2 Bibliotecas do projeto

### Dependências do Projeto

Este projeto utiliza várias bibliotecas e pacotes para funcionalidades específicas. Abaixo está uma breve descrição de cada dependência listada:

-   **`@fortawesome/fontawesome-svg-core`**: Núcleo da biblioteca Font Awesome, que fornece o suporte para ícones em SVG. Versão: `^6.6.0`.

-   **`@fortawesome/free-solid-svg-icons`**: Pacote de ícones sólidos gratuitos da Font Awesome para uso com o núcleo Font Awesome. Versão: `^6.6.0`.

-   **`@fortawesome/react-fontawesome`**: Biblioteca para integração de ícones Font Awesome com React. Versão: `^0.2.2`.

-   **`@radix-ui/react-slot`**: Componente para a criação de slots de composição em React, permitindo a criação de layouts flexíveis e reutilizáveis. Versão: `^1.1.0`.

-   **`axios`**: Biblioteca para fazer requisições HTTP a partir do navegador e do Node.js, facilitando o trabalho com APIs. Versão: `^1.7.5`.

-   **`class-variance-authority`**: Utilitário para gerenciar variantes de classes CSS de forma eficiente e flexível. Versão: `^0.7.0`.

-   **`clsx`**: Biblioteca pequena e eficiente para concatenar classes CSS condicionalmente. Versão: `^2.1.1`.

-   **`lucide-react`**: Biblioteca de ícones SVG para React, fornecendo uma coleção de ícones personalizáveis. Versão: `^0.436.0`.

-   **`next`**: Framework para React que facilita o desenvolvimento de aplicações e sites com renderização do lado do servidor (SSR) e geração de sites estáticos. Versão: `14.2.6`.

-   **`react`**: Biblioteca para construir interfaces de usuário em JavaScript. Versão: `^18`.

-   **`react-dom`**: Biblioteca para manipulação do DOM em React, permitindo a renderização de componentes React no DOM. Versão: `^18`.

-   **`tailwind-merge`**: Utilitário para mesclar classes Tailwind CSS de forma eficiente, garantindo a aplicação correta de estilos. Versão: `^2.5.2`.

-   **`tailwindcss-animate`**: Plugin para adicionar animações baseadas em Tailwind CSS, facilitando a inclusão de animações nos estilos. Versão: `^1.0.7`.

### Resumo

Essas dependências são utilizadas para adicionar funcionalidades ao projeto, como gerenciamento de ícones, requisições HTTP, manipulação de classes CSS, e construção de interfaces de usuário. A combinação dessas bibliotecas e frameworks ajuda a criar uma aplicação rica e interativa com uma base sólida de estilos e componentes.

# 0.3 **Instrução de formatação e estido de código**

### **1. Configuração do Prettier**

O Prettier é uma ferramenta de formatação de código que garante uma formatação consistente. Para configurar o Prettier:

1.  **Arquivo `.prettierrc` na raiz do projeto com o seguinte conteúdo:**

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

Este arquivo `.prettierrc` define as regras de formatação de código que são aplicadas automaticamente em todo o projeto. Abaixo está a explicação de cada uma das configurações:

-   **singleQuote**: `true`

    -   Utiliza aspas simples (`'`) em vez de aspas duplas (`"`) para strings em JavaScript e TypeScript. Exemplo: `'texto'` ao invés de `"texto"`.

-   **jsxSingleQuote**: `true`

    -   Utiliza aspas simples (`'`) em vez de aspas duplas (`"`) dentro de arquivos JSX. Isso é útil para manter a consistência quando você já usa aspas simples no JavaScript. Exemplo: `<Component prop='value' />` ao invés de `<Component prop="value" />`.

-   **trailingComma**: `"es5"`

    -   Adiciona uma vírgula no final de listas ou objetos, conforme permitido no ES5 (arrays, objetos, etc.). Exemplo:
        ```javascript
        const obj = {
            chave1: 'valor1',
            chave2: 'valor2', // vírgula permitida
        };
        ```

-   **tabWidth**: `4`

    -   Define a largura do tab (ou indentação) como 4 espaços. Isso afeta a aparência da indentação do código. Exemplo:
        ```javascript
        function exemplo() {
            console.log('Indentado com 4 espaços');
        }
        ```

-   **semi**: `true`

    -   Adiciona ponto e vírgula (`;`) ao final de cada linha. Isso segue a prática tradicional de encerramento de declarações em JavaScript. Exemplo:
        ```javascript
        const nome = 'John';
        ```

-   **bracketSpacing**: `true`
    -   Adiciona um espaço entre chaves e o conteúdo de objetos literais. Exemplo: `{ chave: 'valor' }` ao invés de `{chave: 'valor'}`.

Essas configurações ajudam a manter o código consistente e legível, conforme as convenções adotadas pelo time de desenvolvimento.

### **2. Configuração do Eslint**

Este projeto utiliza um arquivo `eslint.config.mjs` para garantir a qualidade e consistência do código. Abaixo, está a descrição das configurações e regras aplicadas:

#### Configurações Importadas

-   **globals**: Define variáveis globais do ambiente de navegador, como `window` e `document`.
-   **pluginJs**: Aplica as configurações recomendadas para JavaScript padrão.
-   **tseslint**: Aplica as configurações recomendadas para TypeScript.
-   **pluginReact**: Aplica as configurações recomendadas para projetos React.
-   **prettierConfig**: Integra as regras do Prettier ao ESLint, evitando conflitos de formatação.

#### Regras Personalizadas

-   **`react/react-in-jsx-scope`: `off`**  
    Desativa a exigência de importação do React em arquivos JSX, desnecessário a partir do React 17+.

-   **`eqeqeq`: `error`**  
    Obriga o uso de `===` e `!==` em vez de `==` e `!=`, prevenindo bugs relacionados à igualdade fraca.

-   **`no-unused-vars`: `error`**  
    Gera um erro para variáveis declaradas, mas não utilizadas, ajudando a manter o código limpo.

-   **`arrow-parens`: `error`, `always`**  
    Exige o uso de parênteses em torno dos argumentos de funções arrow, melhorando a clareza do código.

-   **`prefer-const`: `error`**  
    Sugere o uso de `const` para variáveis que não são reatribuídas, incentivando práticas de código mais seguras.

-   **`camelcase`: `error`**  
    Exige o uso de `camelCase` para nomes de variáveis, garantindo consistência na nomenclatura.

#### Resumo

As configurações do ESLint neste projeto são projetadas para garantir que o código seja consistente e siga as melhores práticas recomendadas para JavaScript, TypeScript e React. Combinadas com as regras do Prettier, essas configurações ajudam a manter um código limpo, bem formatado e livre de erros comuns.

### **3. Extensões**

Para que o eslint e o prettier funcionem de fato em tempo real para o desenvolvedor conseguir ver ao salvar o código é necessário instalar as seguintes extensões:

-   **Eslint**: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
-   **Prettier-code-formater**: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### **4. Tailwind**

Este projeto utiliza o Tailwind CSS para estilização, com as configurações definidas no arquivo de configuração `tailwind.config.ts`. Abaixo está a descrição das principais configurações utilizadas:

#### Conteúdo

A propriedade `content` especifica os arquivos onde o Tailwind deve procurar por classes CSS utilizadas, garantindo que apenas os estilos necessários sejam incluídos na produção.

-   **`./src/pages/**/\*.{js,ts,jsx,tsx,mdx}`**  
Inclui todos os arquivos JavaScript, TypeScript, JSX, TSX e MDX na pasta `src/pages` e suas subpastas.

-   **`./components/**/\*.{js,ts,jsx,tsx,mdx}`**  
Inclui todos os arquivos JavaScript, TypeScript, JSX, TSX e MDX na pasta `components` e suas subpastas.

#### Tema

A seção `theme` permite estender e personalizar o tema padrão do Tailwind. Aqui estão as principais customizações:

#### Cores

-   **`primary`**: `#0056d2`  
    ![#0056d2](https://via.placeholder.com/15/0056d2/000000?text=+) Cor principal do projeto, utilizada para botões, links e elementos de destaque. (Azul)

-   **`secondary`**: `#ff6f61`  
    ![#ff6f61](https://via.placeholder.com/15/ff6f61/000000?text=+) Cor secundária do projeto, utilizada para destacar elementos complementares. (Laranja)

-   **`background`**: `#f8f9fa`  
    ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/000000?text=+) Cor de fundo padrão das páginas e componentes. (Cinza claro)

-   **`text`**: `#333333`  
    ![#333333](https://via.placeholder.com/15/333333/000000?text=+) Cor principal do texto. (Cinza escuro)

-   **`border`**: `#e0e0e0`  
    ![#e0e0e0](https://via.placeholder.com/15/e0e0e0/000000?text=+) Cor padrão para bordas de elementos. (Cinza claro)

#### Fontes

-   **`sans`**: `['Roboto', 'sans-serif']`  
    Fonte principal do projeto, usada na maioria dos textos.

-   **`serif`**: `['Merriweather', 'serif']`  
    Fonte secundária, opcional, para uso em textos que precisam de um estilo mais clássico.

#### Resumo

A configuração do Tailwind CSS neste projeto está focada em manter um design consistente e responsivo, utilizando uma paleta de cores personalizada e fontes específicas. As configurações de conteúdo garantem que apenas os estilos necessários sejam incluídos, otimizando o desempenho do site.

### **5. HUSKY**

Este projeto utiliza o [Husky](https://typicode.github.io/husky/) para automatizar a formatação de código antes de cada commit, garantindo que o código esteja sempre formatado corretamente e siga as regras definidas no projeto.

#### Scripts Configurados

#### `prepare`

O script `prepare` é utilizado para configurar o Husky no projeto. Isso é necessário para ativar os hooks de git fornecidos pelo Husky.

-   `"prepare": "husky"`

#### `check`

O script `check` executa a formatação do código e corrige problemas de estilo antes de cada commit. Ele faz isso rodando duas ferramentas:

-   **Prettier**: Formata todo o código de acordo com as regras definidas no arquivo `.prettierrc`.
-   **ESLint**: Verifica e corrige automaticamente erros de linting conforme as regras definidas no arquivo de configuração do ESLint.

-   `"check": "prettier . --write && eslint --fix ."`

#### Como Funciona

1. **Antes de Comitar**: Toda vez que você tentar fazer um commit, o Husky vai automaticamente executar o script `check`. Isso garante que o código esteja formatado e que qualquer erro de estilo seja corrigido.

2. **Execução Manual**: Você pode executar o script de verificação manualmente usando o comando `npm run check`.

3. **Adicionando Mudanças**: Após a formatação e correções, as mudanças são automaticamente adicionadas ao commit com o comando `git add .`

#### Resumo

Com essa configuração, você garante que todo o código commitado esteja conforme as regras de formatação e estilo estabelecidas no projeto. Isso não só melhora a consistência do código, mas também reduz o tempo gasto em revisões de código focadas em estilo.

### **6. TypeScript**

Este projeto utiliza TypeScript com configurações personalizadas para garantir a compatibilidade com o Next.js e melhorar o fluxo de trabalho de desenvolvimento. Abaixo está uma descrição detalhada das configurações presentes no arquivo `tsconfig.json`.

#### Configurações do TypeScript

#### `compilerOptions`

-   **`lib`**: Define as bibliotecas de tipos incluídas no projeto.

    -   **`dom`**: Tipos para APIs DOM.
    -   **`dom.iterable`**: Tipos para APIs DOM iteráveis.
    -   **`esnext`**: Tipos para recursos ECMAScript mais recentes.

-   **`allowJs`**: Permite o uso de arquivos JavaScript dentro do projeto TypeScript.

-   **`skipLibCheck`**: Ignora a verificação de tipos em arquivos de declaração de tipo (`.d.ts`) para acelerar a compilação.

-   **`strict`**: Ativa a verificação rigorosa de tipos, incluindo várias opções que ajudam a detectar erros e melhorar a segurança do código.

-   **`noEmit`**: Impede que o TypeScript gere arquivos de saída, útil quando a compilação é feita por outra ferramenta.

-   **`esModuleInterop`**: Habilita a interoperabilidade entre módulos CommonJS e ES6, facilitando a importação de módulos CommonJS.

-   **`module`**: Define o sistema de módulos como `"esnext"`, que suporta módulos ES6 modernos.

-   **`moduleResolution`**: Configura a resolução de módulos para ser compatível com ferramentas de bundling, como Webpack e Vite, usando `"bundler"`.

-   **`resolveJsonModule`**: Permite a importação de arquivos JSON como módulos TypeScript.

-   **`isolatedModules`**: Garante que cada arquivo seja tratado como um módulo isolado, útil para ferramentas como Babel.

-   **`jsx`**: Define a configuração JSX como `"preserve"`, permitindo que o JSX seja mantido e processado por outras ferramentas, como Babel.

-   **`incremental`**: Habilita a compilação incremental para melhorar o desempenho da compilação ao salvar o estado entre compilações.

-   **`plugins`**: Configura plugins para TypeScript. O plugin `"next"` é usado para suporte ao Next.js.

-   **`paths`**: Configura aliases para caminhos de módulos. O alias `"@/*"` mapeia para `"./*"`, permitindo o uso de `@/` como atalho para a raiz do projeto.

#### `include`

Especifica quais arquivos e diretórios devem ser incluídos na compilação do TypeScript:

-   **`"next-env.d.ts"`**: Inclui o arquivo de declarações do Next.js.
-   **`"**/\*.ts"`**: Inclui todos os arquivos TypeScript (`.ts`).
-   **`"**/\*.tsx"`**: Inclui todos os arquivos TypeScript JSX (`.tsx`).
-   **`"**/\*.spec.ts"`**: Inclui todos os arquivos de teste TypeScript (`.spec.ts`).
-   **`"**/\*.spec.tsx"`**: Inclui todos os arquivos de teste TypeScript JSX (`.spec.tsx`).

#### `exclude`

Especifica quais arquivos e diretórios devem ser excluídos da compilação do TypeScript:

-   **`"node_modules"`**: Exclui a pasta `node_modules`, que contém dependências que não precisam ser verificadas.

#### Resumo

O arquivo `tsconfig.json` está configurado para otimizar o desenvolvimento com TypeScript e Next.js, garantindo suporte a módulos modernos e interoperabilidade com CommonJS. A configuração inclui verificações rigorosas de tipos e a capacidade de importar arquivos JSON como módulos. A opção `noEmit` indica que a compilação final é gerenciada por outra ferramenta, enquanto o uso de plugins e aliases melhora a integração e a produtividade no desenvolvimento.
