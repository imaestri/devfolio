import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'IMAESTRI DEVFOLIO', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, meu nome é',
  name: 'Isaque Maestri',
  subtitle: 'e eu sou um desenvolvedor full-stack.',
  cta: 'SOBRE MIM',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1JFz5Wj9z8uFY5Mkj-Sz-2kTgY6whR7eI/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [ 
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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

