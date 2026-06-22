export const profile = {
  name: 'Surya Prakash Bharti',
  photo: `${import.meta.env.BASE_URL}profile.jpeg`,
  role: 'Creative Developer',
  tagline: 'I build interfaces that feel like places, not pages.',
  location: 'Gorakhpur, India',
  email: 'bhartisuryaprakash7@gmail.com',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  social: [
    { label: 'GitHub', href: 'https://github.com/bhartisuryaprakash7-crypto', handle: '@SuryaPrakash' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/surya-prakash-bharti-43a93b3a1/', handle: '/insuryaprakash' },
  ]
}

export const navItems = [
  { id: 'intro', label: 'Index' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'Projects' },
   { id: 'contact', label: 'Contact' },
  { id: 'collaboration', label: 'Team' }
 
]

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    note: 'Daily tools',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript(ES6+)', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind Css', level: 72 }
    ]
  },
  {
    id: 'design',
    title: '3D & Interactive Web',
    note: 'Daily tools',
    skills: [
      { name: 'Three.js', level: 90 },
      { name: 'React Three Fiber', level: 80 },
      { name: 'Framer Motion', level: 86 },
      { name: 'WebGL', level: 83 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    note: 'What holds it up',
    skills: [
      { name: 'Node.js', level: 84 },
      { name: 'Express,js', level: 76 },
      { name: 'MongoDB', level: 70 },
      { name: 'MySql', level: 68 }
    ]
  }
]

export const projects = [
  {
    id: 'p1',
    index: 'A',
    title: 'Login & Registration Page',
    year: '2025',
    description:
      'A simple Login and Registration Page built to practice frontend development concepts. The project includes basic login and signup forms with a clean and responsive user interface. It focuses on form design, user input handling, and creating a smooth user experience.',
    role: 'Developer',
    stack: ['React', 'HTML', 'CSS', 'Vite'],
    color: '#c9a227',
    links: { live: 'https://bhartisuryaprakash7-crypto.github.io/login-page/', code: 'https://github.com/bhartisuryaprakash7-crypto/login-page' }
  },
  {
    id: 'p2',
    index: 'B',
    title: 'React Props Demonstration App',
    year: '2024',
    description:
      'React Props Demonstration App is a simple React.js application designed to demonstrate the concept of Props (Properties) in React. The project showcases how data can be passed from parent components to child components, enabling reusable and dynamic UI components. It helps beginners understand component communication, data flow, and component reusability in React. The application uses basic React concepts and provides a clear example of how props are used in real-world React development',
    role: 'Developer',
    stack: ['HTML', 'CSS', 'React', 'Vite'],
    color: '#c33823',
    links: { live: 'https://reactjs-alpha-ruby.vercel.app', code: 'https://github.com/bhartisuryaprakash7-crypto/Reactjs' }
  },
]

export const collaborations = [
  {
    id: 'c1',
    project: 'EventSphere — Event Management Platform',
    team: '4 developers, 1-week sprint',
    contribution:
      'Contributed to the development of a full-stack event management platform by collaborating with teammates on frontend, backend, and database integration. Participated in feature planning, implementation, testing, and deployment to ensure timely project delivery',
    outcomes: ['Developed responsive user interfaces using React.js', 'Collaborated through Git & GitHub for version control', 'Assisted in MongoDB database design and implementation']
  }
]