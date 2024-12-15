_English version available below_

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
- Formulário para sugestões de mensagens 
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

Adoraria contribuições com mais frases para os feriados! Pode ficar à vontade para abrir um pull request alterando o [JSON que informa os feriados](https://github.com/IgStefano/proximo-feriado/blob/main/src/data/holidays.json), ou simplesmente [preenchendo o formulário no site](https://feriado.igstefano.net/sugestoes).

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Feito com ❤️ por [Igor Stefano](https://linkedin.com/in/igor-stefano).

---

# What's the Next Holiday? 🎉

Some time ago, a few small websites made a big splash among developers. I personally came across [Should I Deploy Today](https://shouldideploy.today/) and its Brazilian counterpart, [Devo Deployar](https://devodeployar.dev/). These are single-page sites with the sole mission of delivering a little humor.

I started wondering if it would be feasible to create something similar but with slightly more useful information. That’s how *What’s the Next Holiday* was born, a site with the extremely specific purpose of answering the question in its name, with a touch of humor through witty sentences that vary between holidays.

## 🚀 Technologies Used  

This project was developed using the following technologies:  

- [Astro](https://astro.build/)  
- [React](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  

> A quick side note: The stack was chosen simply because it’s what I like and am used to working with. Generally speaking, I wouldn’t say any option here is necessarily better or worse for a project this simple. For example, [Devo Deployar was written in Vue](https://github.com/medeirotech/devodeployar), while [Should I Deploy Today uses Next.js](https://github.com/baires/shouldideploy/). The most important thing in this case was picking something and moving forward.  

Currently, the project does not include tests because it’s small and not expected to grow much (but if I were to add tests, I’d definitely use [Vitest](https://vitest.dev/) today).  

## 💻 What Does It Do?  

- Displays the next Brazilian national holiday with custom messages for each holiday  
- Messages that change on click or when the page is refreshed  
- A form for suggesting new messages  
- Includes dark mode!  

## 🎯 How to Use It Locally  

1. Clone the repository:  

```bash
git clone https://github.com/igstefano/proximo-feriado.git
```  

2. Install dependencies:  

```bash
bun install
```  

3. Run the project locally:  

```bash
bun astro dev
```  

The project will be available at `http://localhost:4321`.  

## 🤝 Contributing  

I’d love contributions with more phrases for the holidays! Feel free to open a pull request to update the [JSON that contains the holiday data](https://github.com/IgStefano/proximo-feriado/blob/main/src/data/holidays.json) or simply [filling out the form in the site](https://feriado.igstefano.net/sugestoes).  

## 📝 License  

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.  

Made with ❤️ by [Igor Stefano](https://linkedin.com/in/igor-stefano).  
