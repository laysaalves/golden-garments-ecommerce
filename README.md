<h1 align="center" style="font-weight: bold;">O OURO DOS MANTOS - SOCCER T-SHIRTS E-COMMERCE</h1>
<p align="center" style="font-weight: semibold;">
<a href="https://github.com/laysaalves/ourodosmantos-ecommerce/blob/main/README-PTBR.md">Não lê em Inglês? Clique aqui. Eu também fiz esse README em Português!</a>
</p>

<p align="center">
  <a href="#feat">Features</a> |
  <a href="#techs">Used technologies</a> |  
  <a href="#started">Getting Started</a> | 
  <a href="#routes">API Endpoints</a> |
  <a href="#contribute">Contribute</a>
</p>

<p align="center">
  <img alt="project home page" width="600px" src="./.github/assets/print-home.PNG" />
<p>

<h2 id="feat">Features</h2>

| feature | status | description    
| ------------- | ------------- | ------------- |
| `Login with Google Account` | :white_large_square:  | Using **VueFire**.  
| `Profile details button` | :white_large_square:  | Users authenticated with Google Account can see their image and username in the topBar of web app or sideBar of mobile app, a transition created with the **composable useBreakpoint**.
| `soon` | :white_large_square: | soon

<h2 id="techs">Used technologies</h2>

- [NuxtJS](https://nuxtjs.org/)
- [VueFire](https://vuefire.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [NeonDB](https://neon.tech/docs/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn-vue](https://www.shadcn-vue.com/)

<h2 id="started">Getting started</h2>

How to run the project locally...

<h3>Prerequisites</h3>

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/)

<h3>Cloning</h3>

```bash
git clone https://github.com/laysaalves/ourodosmantos-ecommerce.git
```

<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env` with your keys

```yaml
VUEFIRE_API_KEY={YOUR_SECRET_KEY}
```

<h3>Starting</h3>

```bash
cd ourodosmantos-ecommerce
yarn // or your preferred package manager to install dependencies
```

<h2 id="routes">API Endpoints</h2>

Soon! Only boilerplate for now.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /products</kbd> | retrieves product info see [response details](#get-product-detail)
| <kbd>POST /authenticate</kbd> | authenticate user into the api see [request details](#post-auth-detail)

<h3 id="get-product-detail">GET /products</h3>

**RESPONSE**

```json
{
  "name": "Camisa Vasco da Gama Casa 23/24",
  "price": 300,
  "discountPercentage": 0,
}
```

<h3 id="post-auth-detail">POST /authenticate</h3>

**REQUEST**

```json
{
  "username": "leonardojardim",
  "email": "leojardim@colina.com"
}
```

**RESPONSE**

```json
{
  "token": "OfoMRHsaQwyAgVoc3OXmL1JhMVUYACGBbCTK0GBgiYitwSwjf0gVoBmkbuyy0pSk"
}
```

<h2 id="contribute">Contribute</h2>

1. `git clone https://github.com/laysaalves/ourodosmantos-ecommerce.git`
2. `git checkout -b feature/feature-name`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

<h3>Documentations that might help</h3>

[Commit pattern](https://www.conventionalcommits.org/en/v1.0.0/)
