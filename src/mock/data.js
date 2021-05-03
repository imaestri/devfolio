import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Imaestri | Devfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, meu nome é',
  name: 'Isaque Maestri',
  subtitle: 'e eu sou um desenvolvedor front-end.',
  cta: 'SOBRE MIM',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Formado em análise e desenvolvimento de sistemas em 2018/2, trabalho atualmente como analista de sistemas ERP.',
  paragraphTwo: 'Tenho desenvolvido skills em desenvolvimento web de forma autodidata usando stacks javascript como: React, Node.',
  paragraphThree: 'Também HTML5, CSS3, Sass, Styled Components, versionamento de código com GIT, entre outros frameworks.Tenho como hobby: jogos de FPS, fifa, séries, filmes, futebol, NFL, cerveja, café(muito café), tatuagens e dogs.',
  resume: 'https://drive.google.com/file/d/1JFz5Wj9z8uFY5Mkj-Sz-2kTgY6whR7eI/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [ 
  {
    id: nanoid(),
    img: 't&t.jpg',
    title: 'Track & Trace Ventana Serra do Brasil(Projeto interno e privado)',
    info: 'Front-end desenvolvido em REACT. API criada com NODE Js e EXPRESS, banco relacional(SQL SERVER) usando queryBuilder(KnexJs).',
    info2: 'O escopo inicial abrange o desenvolvimento de uma aplicação WEB para acompanhamento da carga. Sendo importação aérea ou marítima.',
    url: 'http://tracktraceventanaserra.com.br/'
   
  },
  {
    id: nanoid(),
    img: 'natours.png',
    title: 'Natours project',
    info: 'Projeto sendo desenvolvido para estudo de CSS avançado com SASS. ',
    info2: 'Natours é uma landing page, onde você consegue verificar disponibilidade de passeios e aventuras. ',
    url: 'https://natours-project-study.netlify.app/',
    repo: 'https://github.com/imaestri/natours-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dice-game.png',
    title: 'Dice Game',
    info: 'Projeto criado para estudo de manipulação da DOM com Javascript puro.',
    info2: '',
    url: 'https://dice-game-web.netlify.app/',
    repo: 'https://github.com/imaestri/dice-game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Gostaria de conversar e saber mais sobre mim? Me mande um e-mail! 😄',
  btn: 'E-mail 📧',
  email: 'isaquemaestri01@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/isaquemaestri/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/imaestri',
    },
  ],
};

