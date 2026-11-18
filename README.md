# Laboratório COMNET — Portal Institucional (Astro + GitHub Pages)

Portal web oficial do **COMNET (Computer Networks Laboratory)** do Departamento de Ciência da Computação (CIC) da Universidade de Brasília (UnB).

Construído com [Astro.build](https://astro.build), [Tailwind CSS](https://tailwindcss.com) e hospedado via [GitHub Pages](https://pages.github.com).

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js**: v18.17+ ou v20+

### Instalação e Execução
```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento local
npm run dev

# 3. Compilar para produção (gera pasta dist/)
npm run build

# 4. Pré-visualizar o build de produção localmente
npm run preview
```

O servidor local estará disponível em `http://localhost:4321/comnet_site/` (ou `http://localhost:4321/`).

---

## 📝 Como Atualizar Conteúdo em Markdown

Todo o conteúdo acadêmico é baseado em arquivos Markdown com Frontmatter tipado:

- **Professores / Membros:**
  Basta criar ou editar arquivos em `src/content/professores/<nome-do-professor>.md`.
- **Projetos de Pesquisa:**
  Adicione arquivos `.md` em `src/content/projetos/<slug-do-projeto>.md`.
- **Alunos Ativos e Egressos:**
  Os dados estruturados de alunos estão no arquivo `src/data/alunos.json`.
- **Imagens do Laboratório:**
  Coloque novas fotos em `public/images/`.

---

## 🌐 Deploy Contínuo no GitHub Pages

Este repositório possui um workflow automatizado em `.github/workflows/deploy.yml`:
1. Faça o commit e push das alterações para o branch `main`.
2. A GitHub Action compilará o Astro e publicará o site automaticamente no GitHub Pages.
3. No painel do repositório no GitHub, em **Settings > Pages**, certifique-se de que a fonte (**Source**) está definida como **GitHub Actions**.

---

## 🏛️ Identidade Visual UnB
- **Azul UnB:** `#003366`
- **Verde UnB:** `#006633`
- **Verde Esmeralda/Accent:** `#00A389`
- **Slate Escuro:** `#0A2540`

