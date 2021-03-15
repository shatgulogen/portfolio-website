import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shatgul | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi. I am',
  name: 'Shatgul Ogen',
  subtitle: 'Aspiring Software Engineer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am an experienced programmer in Java and Python with strong fundamentals in algorithms, data structure, and object-oriented programming. I have strong knowledge in math, physics, statistics with excellent verbal/written communication skills and presentation skills.',
  paragraphTwo: 'I am interested in working in Software Development and Machine Learning. I love creating powerful and responsive web applications for millions of people around the world. I have done a few projects in Machine Learning (Deep Learning) in the past.',
  paragraphThree: ' I am a highly self-motivated individual and I strongly believe in life-long learning. I am currently looking for a new opportunity to be part of an innovative team of problem-solvers.',
  resume: 'http://www.shatgul.com/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Modern Responsive Website Built from Scratch - FrontEnd',
    info: 'Created a responsive website by designing the wireframe and set up the basic structure using HTML5. For front-end development, Bootstrap framework was used for handling the responsiveness. The style of the website was handled by CSS3 and animations were added using jQuery.',
    info2: '',
    url: 'http://www.shatgul.com/solo/',
    repo: 'https://github.com/shatgulogen', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
      img: 'project.jpg',
    title: 'Face Detection Full Stack Project',
    info: 'Created a face detection Web app using React.js for front-end and Clarifai image recognition API for facial detection of images submitted by url. Secure sign-in and registration capabilities along with call to Clarifai API are handled on node.js server with Express framework, knex query builder and PostgreSQL relational database. This Web app also keeps track of the count of detected faces for each user and displays the tota count on the dashboard.',
    info2: '',
    url: 'http://www.shatgul.com/facedetection/',
    repo: 'https://github.com/shatgulogen', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
