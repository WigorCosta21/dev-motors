Ótimo, agora com todas as partes do seu código, posso criar um README completo para a sua aplicação. Aqui está:

---

# DevMotors - Sua Oficina Especializada

## Descrição

DevMotors é uma aplicação web para uma oficina especializada em carros localizada em São Paulo. A aplicação permite aos usuários conhecerem mais sobre a oficina, seus serviços oferecidos, informações de contato e visualizar posts sobre diversos tópicos relacionados a manutenção automotiva. Desenvolvido através do curso FullStack do Sujeito Programador.

## Tecnologias Utilizadas

- React.js
- Next.js
- Next.js Navigation
- Lucide React
- SCSS

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Instale as dependências:

   ```bash
   cd DevMotors
   npm install
   ```

3. Execute a aplicação:

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Página Inicial**: Apresenta informações sobre a oficina, seus serviços e formas de contato.
- **Posts**: Os usuários podem visualizar posts sobre diversos tópicos relacionados a manutenção automotiva.
- **Navegação**: Navegação entre páginas é suave e rápida, utilizando o Next.js Navigation.
- **Página de Erro Personalizada**: Uma página de erro personalizada é exibida caso o usuário tente acessar uma página que não existe.

## Principais Componentes

- **Hero**: Componente responsável por exibir o título, botão de ação e imagem de banner.
- **Container**: Componente utilizado para envolver o conteúdo das páginas, fornecendo um layout consistente.
- **Header**: Cabeçalho fixo exibido em todas as páginas, permitindo a navegação entre as diferentes seções da aplicação.
- **SubMenu**: Componente que exibe um submenu de páginas disponíveis, utilizado na página principal.
- **Content**: Componente responsável por renderizar o conteúdo de um post específico.
- **Error**: Componente que exibe uma mensagem de erro quando uma página não é encontrada.
- **LoadingPost**: Componente de carregamento exibido enquanto o conteúdo do post está sendo carregado.

## API

A aplicação consome uma API do CMS Cosmicjs para obter dados dinâmicos, como informações sobre a oficina, serviços oferecidos, e posts. Alguns endpoints importantes são:

- **getDataHome**: Obtém os dados da página inicial da oficina.
- **getSubMenu**: Obtém os dados do submenu de páginas disponíveis.
- **getItemBySlug**: Obtém os dados de um post específico com base em seu slug.

## Metadados Dinâmicos

A aplicação gera metadados dinâmicos para cada página com base nos dados obtidos da API. Isso inclui título, descrição, palavras-chave e imagens para OpenGraph.
