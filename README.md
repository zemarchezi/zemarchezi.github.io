# josemarchezi.com

Site pessoal — portfólio de pesquisa em clima espacial e repositório de aulas/materiais de curso.

Construído com [Astro](https://astro.build), publicado no GitHub Pages a partir deste repositório
(`zemarchezi.github.io`), com deploy automático via GitHub Actions a cada push em `main`. O domínio
`josemarchezi.com` está configurado via `public/CNAME` e aponta para o GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Disciplinas

Cada disciplina é um arquivo Markdown em `src/content/courses/`. Ver `src/content.config.ts` para o schema.

## Contato

O formulário em `/contato/` usa [Web3Forms](https://web3forms.com). É necessário substituir o valor de
`access_key` em `src/pages/contato/index.astro` por uma chave gerada em web3forms.com.
