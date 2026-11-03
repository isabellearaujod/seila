# <img src="./my-app/src/img/logo-dev-mode.png" width="60" alt="Logo DevMode" /> SoulUp X DevMode

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Status: Em Desenvolvimento](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)
[![GitHub](https://img.shields.io/badge/GitHub-SoulUp__DevMode-181717?style=flat&logo=github&logoColor=white)](https://github.com/isabellearaujod/SoulUp_DevMode-1TDSPY)

---

## 🔴 Índice

- [Descrição do Projeto](#-descrição-do-projeto)
- [Sobre a SoulUp](#-sobre-a-soulup)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Páginas do Site](#-páginas-do-site)
- [Imagens e Ícones](#-imagens-e-ícones)
- [Integrantes](#-integrantes)
- [Como Usar](#-como-usar)
- [Contato](#-contato)
- [Contribuições](#-contribuições)
- [Licença](#-licença)

---

## 🔴 Descrição do Projeto

O projeto consiste na integração de um avatar inteligente e interativo à plataforma SoulUp, com o objetivo de proporcionar interações personalizadas e aumentar o engajamento dos usuários.

O avatar Oli, integrado à proposta de Inteligência Artificial, acompanha missões, oferece dicas e incentiva práticas sustentáveis, transformando as ações dos usuários em Pontos ECOA.

---

## 🔴 Sobre a SoulUp

A SoulUp é uma plataforma social voltada ao engajamento positivo e à conscientização sustentável, incentivando hábitos responsáveis por meio de um sistema de recompensas.

Com foco no consumo consciente e na energia limpa, a proposta integra tecnologia, sustentabilidade e benefícios para os usuários, incluindo recursos de monetização e uma carteira digital.

---

## 🔴 Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🔴  Estrutura de Pastas

```text
my-app/
├── public/
│   └── routes.json
│
├── src/
│   ├── components/
│   │   ├── Botao/
│   │   ├── BotaoEvolucao/
│   │   ├── BotaoHome/
│   │   ├── BotaoMissao/
│   │   ├── Cabecalho/
│   │   ├── Card/
│   │   ├── CardAtividades/
│   │   ├── CardAutenticacao/
│   │   ├── CardIntegrante/
│   │   ├── CardMissoes/
│   │   ├── ChatBot/
│   │   ├── Cta/
│   │   ├── LinhaEvolucao/
│   │   ├── OliHero/
│   │   ├── RotaPrivada/
│   │   └── Rodape/
│   │
│   ├── img/
│   │   ├── avatar-oli-acenando.png
│   │   ├── avatar-oli-duvida.png
│   │   ├── avatar-oli-evolucao.png
│   │   ├── avatar-oli-principal.png
│   │   ├── logo-dev-mode.png
│   │   ├── oli-card-0.png
│   │   ├── oli-card-1.png
│   │   ├── oli-card-2.png
│   │   ├── oli-card-3.png
│   │   ├── oli-card-4.png
│   │   ├── pagina-evolucao.png
│   │   └── pagina-inicial.png
│   │
│   ├── pages/
│   │   ├── Cadastro/
│   │   ├── Carteira/
│   │   ├── Contato/
│   │   ├── DetalheResgate/
│   │   ├── Error/
│   │   ├── EvolucaoOli/
│   │   ├── EvolucaoUsuario/
│   │   ├── Faq/
│   │   ├── Home/
│   │   ├── Integrantes/
│   │   ├── Login/
│   │   ├── Missao/
│   │   ├── PainelAdministrador/
│   │   ├── Perfil/
│   │   └── Sobre/
│   │
│   ├── services/
│   │   └── api.ts
│   │
│   ├── types/
│   │   └── types.ts
│   ├── App.tsx
│   ├── base.css
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---


## 🔴 Páginas do Site

[Home](./my-app/src/pages/Home/index.tsx) |  - Página inicial que apresenta o projeto e permite o acesso às demais áreas da aplicação.

[Sobre](./my-app/src/pages/Sobre/index.tsx) |  - Objetivos do projeto e a solução desenvolvida com o avatar Oli.

[Evolução Oli](./my-app/src/pages/EvolucaoOli/index.tsx) |  - Apresenta as fases de evolução do avatar Oli conforme a interação do usuário e a realização de missões.

[Evolução do Usuário](./my-app/src/pages/EvolucaoUsuario/index.tsx) |  - Apresenta o progresso do usuário na plataforma e sua evolução por meio das ações sustentáveis.

[Missão](./my-app/src/pages/Missao/index.tsx) |  - Missões sustentáveis disponíveis e conquista de recompensas.

[Perfil](./my-app/src/pages/Perfil/index.tsx) |  - Informações do usuário e gerenciamento do perfil.

[Carteira](./my-app/src/pages/Carteira/index.tsx) |  - Área destinada à visualização da carteira digital e dos recursos relacionados às recompensas da plataforma.

[Detalhe de Resgate](./my-app/src/pages/DetalheResgate/index.tsx) |  - Apresenta os detalhes de um resgate - Demonstração.

[Painel do Administrador](./my-app/src/pages/PainelAdministrador/index.tsx) |  - Área administrativa destinada ao gerenciamento de funcionalidades da plataforma.

[Integrantes](./my-app/src/pages/Integrantes/index.tsx) |  - Apresenta os integrantes da equipe DevMode.

[FAQ](./my-app/src/pages/Faq/index.tsx) |  - Perguntas frequentes sobre o projeto, a plataforma e o Oli.

[Contato](./my-app/src/pages/Contato/index.tsx) |  - Formulário para o envio de dúvidas à equipe DevMode.

[Login](./my-app/src/pages/Login/index.tsx) |  - Autenticação dos usuários na plataforma.

[Cadastro](./my-app/src/pages/Cadastro/index.tsx) |  - Permite o cadastro de novos usuários na plataforma.

[Error](./my-app/src/pages/Error/index.tsx) |  - Página quando o usuário acessa uma rota inexistente ou ocorre um erro de navegação.


---

## 🔴 Imagens e Ícones

As imagens são:

- Logo da equipe DevMode.
- Avatar Oli em diferentes expressões e fases de evolução.
- Imagens ilustrativas utilizadas nas páginas e nos cards.
- Ícones de navegação, missões, evolução e ações da plataforma.

---

## 🔴 Integrantes

<table>
  <tr>
    <td align="center" width="33%">
      <a href="https://github.com/helo0309">
        <img src="./my-app/src/img/heloisa-costa-pereira.jpeg" width="150" alt="Heloisa Costa Pereira" />
        <br />
        <strong>Heloisa Costa Pereira</strong>
      </a>
      <br />
      RM: 572756
      <br />
      Turma: 1TDSPY
      <br /><br />
      <a href="https://www.linkedin.com/in/heloisa-costa-pereira-4a0810381/">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <br />
      <a href="https://github.com/helo0309">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://github.com/isabellearaujod">
        <img src="./my-app/src/img/isabelle-dantas-de-araujo.jpeg" width="150" alt="Isabelle Dantas de Araújo" />
        <br />
        <strong>Isabelle Dantas de Araújo</strong>
      </a>
      <br />
      RM: 570167
      <br />
      Turma: 1TDSPY
      <br /><br />
      <a href="https://www.linkedin.com/in/isabelle-dantas-araujo/">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <br />
      <a href="https://github.com/isabellearaujod">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://github.com/Yasmin5511">
        <img src="./my-app/src/img/yasmin-nunes-dos-santos.jpeg" width="150" alt="Yasmin Nunes dos Santos" />
        <br />
        <strong>Yasmin Nunes dos Santos</strong>
      </a>
      <br />
      RM: 568618
      <br />
      Turma: 1TDSPY
      <br /><br />
      <a href="https://www.linkedin.com/in/yasmin-nunes-727202186/">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <br />
      <a href="https://github.com/Yasmin5511">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </a>
    </td>
  </tr>
</table>

---

## 🔴 Como Usar

**1. Clone o repositório**

```bash
git clone https://github.com/isabellearaujod/SoulUp_DevMode-1TDSPY.git
```

**2. Acesse a pasta da aplicação**

```bash
cd SoulUp_DevMode-1TDSPY/my-app
```

**3. Instale as dependências**

```bash
npm install
```

**4. Execute o projeto**

```bash
npm run dev
```

---

### 🔴 Links do Projeto

- **Repositório GitHub:** [SoulUp X DevMode](https://github.com/isabellearaujod/SoulUp_DevMode-1TDSPY)
- **Vídeo de apresentação:** https://youtu.be/krvKeMdWC6k
- **Projeto publicado:** (https://soul-up-dev-mode-1-tdspy.vercel.app/)

---

## 🔴 Contato

Para dúvidas, sugestões ou mais informações sobre o projeto, entre em contato com a equipe DevMode pelos perfis do GitHub e LinkedIn disponibilizados na seção de integrantes.

---

## 🔴 Contribuições

Contribuições são bem-vindas! Para colaborar com o projeto, siga as orientações abaixo.

### 🔴 Pull Requests

- Descreva as alterações realizadas.
- Explique o objetivo da contribuição.
- Verifique se o código está funcionando corretamente.
- Aguarde a revisão antes de realizar o merge.

### 🔴 Padrão de Commits
 Prefixo     | Utilização                                     
 ----------- | ---------------------------------------------- 
 `feat:`     | Adição de uma nova funcionalidade.             
 `fix:`      | Correção de um erro.                           

