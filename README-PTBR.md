<h1 align="center" style="font-weight: bold;">O OURO DOS MANTOS - E-COMMERCE DE CAMISAS DE FUTEBOL</h1>
<p align="center" style="font-weight: semibold;">
<a href="https://github.com/laysaalves/ourodosmantos-ecommerce/blob/main/README.md">Don't speak Portuguese? Click here. I also wrote this README in English!</a>
</p>

<p align="center">
  <a href="#feat">Funcionalidades</a> |
  <a href="#techs">Tecnologias usadas</a> |  
  <a href="#started">Primeiros passos</a> | 
  <a href="#routes">API Endpoints</a> |
  <a href="#contribute">Contribua</a>
</p>

<p align="center">
  <img alt="Página inicial do projeto" width="600px" src="./.github/assets/print-home.PNG" />
<p>

<h2 id="feat">Funcionalidades</h2>

| funcionalidade | status | descrição    
| ------------- | ------------- | ------------- |
| `Login com a conta do Google` | :white_large_square:  | Usando **VueFire**.  
| `Botão de detalhes do perfil do usuário` | :white_large_square:  | Usuários autenticados com a conta do Google podem ver sua imagem e nome de usuário na barra superior da aplicação web ou na barra lateral da aplicação mobile, transição criada com o **composable useBreakpoint**.
| `em breve` | :white_large_square: | em breve

<h2 id="techs">Tecnologias usadas</h2>

- [NuxtJS](https://nuxtjs.org/)
- [VueFire](https://vuefire.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [NeonDB](https://neon.tech/docs/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn-vue](https://www.shadcn-vue.com/)

<h2 id="started">Primeiros passos</h2>

Como rodar o projeto na sua máquina...

<h3>Pré-requisitos</h3>

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/)

<h3>Clonando</h3>

```bash
git clone https://github.com/laysaalves/ourodosmantos-ecommerce.git
```

<h3>Configurando o .env</h2>

Use o `.env.example` como referência para criar o seu `.env` com as suas chaves

```yaml
VUEFIRE_API_KEY={YOUR_SECRET_KEY}
```

<h3>Começando</h3>

```bash
cd ourodosmantos-ecommerce
yarn // ou seu gerenciador de pacotes preferido para instalar as dependências
```

<h2 id="routes">API Endpoints</h2>

Em breve! Apenas exemplos aqui por enquanto.
​
| rota               | descrição                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /products</kbd> | recupera informações do produto, veja [detalhes da resposta](#get-product-detail)
| <kbd>POST /authenticate</kbd> | autentica o usuário na API, veja [detalhes da requisição](#post-auth-detail)

<h3 id="get-product-detail">GET /products</h3>

**RESPOSTA**

```json
{
  "name": "Camisa Vasco da Gama Casa 23/24",
  "price": 300,
  "discountPercentage": 0,
}
```

<h3 id="post-auth-detail">POST /authenticate</h3>

**REQUISIÇÃO**

```json
{
  "username": "leonardojardim",
  "email": "leojardim@colina.com"
}
```

**RESPOSTA**

```json
{
  "token": "OfoMRHsaQwyAgVoc3OXmL1JhMVUYACGBbCTK0GBgiYitwSwjf0gVoBmkbuyy0pSk"
}
```

<h2 id="contribute">Contribua</h2>

1. `git clone https://github.com/laysaalves/ourodosmantos-ecommerce.git`
2. `git checkout -b feature/feature-name`
3. Siga o padrão de commit
4. Abra um pull request para explicar o problema resolvido ou a funcionalidade feita e se houver necessidade, acrescente a captura de tela das modificações visuais e aguarde a revisão

<h3>Documentações que podem ajudar</h3>

[Padrão de commit](https://www.conventionalcommits.org/en/v1.0.0/)
