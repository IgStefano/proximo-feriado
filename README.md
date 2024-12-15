# Qual é o Próximo Feriado? 🎉

Algum tempo atrás, alguns pequenos sites fizeram bastante barulho entre os desenvolvedores. Eu, particularmente entrei em contato com o [Should I Deploy Today](https://shouldideploy.today/) e seu equivalente tupiniquim, [Devo Deployar](https://devodeployar.dev/). Esses são sites de uma única página, que servem apenas à missão de fazer uma brincadeira.

Me peguei pensando se seria viável fazer algo bem parecido, mas com uma informação minimamente útil. E assim nasceu o Qual é o Próximo Feriado, que cumpre a função extremamente específica de responder à pergunta feita em seu nome, com uma dose de bom humor no formato de frases engraçadinhas que mudam entre feriados.

## 🚀 Das tecnologias usadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

> Um pequeno comentário à parte: A stack foi escolhida simplesmente por ser o que eu gosto e já tenho costume de usar. Em geral, não diria que qualquer opção aí seja melhor ou pior que outras escolhas para um projeto tão simples. O [Devo Deployar foi escrito em Vue](https://github.com/medeirotech/devodeployar); já o [Should I Deploy Today utiliza NextJS](https://github.com/baires/shouldideploy/). O mais importante nesse caso era escolher uma opção e seguir em frente.

Atualmente, o projeto não conta com testes, isso por ser pequeno e não ter muita perspectiva de crescer (mas se eu fosse colocar testes, hoje com certeza usaria o [Vitest](https://vitest.dev/)).

## 💻 O que faz?

- Mostra o próximo feriado nacional com mensagens para cada feriado
- Mensagens que mudam ao clique ou atualizar a página
- Tem dark mode! 

## 🎯 Como usar localmente

1. Clone o repositório:

```bash
git clone https://github.com/igstefano/proximo-feriado.git
```

2. Instale as dependências:

```bash
bun install
```

3. Rode o projeto localmente:

```bash
bun astro dev
```

O projeto estará disponível em `http://localhost:4321`

## 🤝 Contribuindo

Adoraria contribuições com mais frases para os feriados! Pode ficar à vontade para abrir um pull request alterando o [JSON que informa os feriados](https://github.com/IgStefano/proximo-feriado/blob/main/src/data/holidays.json).

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [Igor Stefano](https://linkedin.com/in/igor-stefano).
