export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'PRATHISH S',
  title: 'Full Stack Developer',
  subtitle: 'Aspiring Software Developer passionate about building scalable web applications and solving real-world problems.',
  about: `I am a B.Tech Information Technology student at Kongu Engineering College with a strong interest in Full Stack Development. Skilled in React, Java, Python, MongoDB, and MySQL, I am passionate about building impactful software solutions. I combine a strong problem-solving mindset with hackathon experience to build scalable digital applications.`,
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/prathish-s007',
    linkedin: 'https://www.linkedin.com/in/prathish-s-418729375/',
    email: 'prathishs286@gmail.com',
  }
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', level: 'Expert' },
      { name: 'CSS', level: 'Expert' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React JS', level: 'Advanced' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Expert' },
    ]
  },
  {
    category: 'Languages',
    items: [
      { name: 'Java', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'C', level: 'Intermediate' },
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Postman', level: 'Advanced' },
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: 'MEDONOVA Hackathon',
    description: 'Secured the 1st Prize for developing an automated Campaign Management System which tracks and schedules email targets.',
    date: 'Oct 2025',
    tag: 'Hackathon'
  },
  {
    id: 2,
    title: 'College Hackathon',
    description: 'Secured the 2nd Place for building an interactive College Chatbot aiding students with admission timelines and directories.',
    date: 'Feb 2025',
    tag: 'Hackathon'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Smart Tourism Assistant',
    description: 'An AI-driven interactive travel assistant that recommends tourist spots, predicts peak visitor times, and provides customized travel itineraries using telemetry feeds.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Tailwind CSS'],
    features: [
      'Real-time personalized spot recommendations',
      'Visitor peak hours prediction & traffic forecasts',
      'Dynamic travel route mapping & weather alerts'
    ],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: 'https://github.com/prathish-s007/Smart-Tourism-Assistant',
    featured: false
  },
  {
    id: 2,
    title: 'Gamified Environmental Education Platform',
    description: 'An interactive web platform that teaches environmental sustainability through gamification, quizzes, challenges, achievements, and educational activities for students.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Gamification'],
    features: [
      'Interactive eco-quizzes & daily sustainability challenges',
      'Dynamic progression tracker with achievement badges',
      'Educational modules covering carbon footprint and recycling'
    ],
    category: 'Frontend',
    liveUrl: 'https://incomparable-tulumba-75bdb0.netlify.app/',
    githubUrl: 'https://github.com/prathish-s007/Gamified-environmental-education-platform',
    featured: false
  },
  {
    id: 3,
    title: 'Global Poverty Trend Analysis',
    description: 'A Streamlit-based web application for analyzing and visualizing global poverty trends using interactive charts, country comparisons, and data-driven insights',
    tags: ['Python', 'Streamlit', 'Data Analysis', 'Plotly', 'Pandas'],
    features: [
      'Interactive global charts and trend visualizations',
      'Multi-country comparison views for regional analysis',
      'Key performance indicators and poverty threshold trackers'
    ],
    category: 'Data Analysis',
    liveUrl: 'https://prathish-s007-global-poverty-trend-analysi-streamlit-app-pwju6m.streamlit.app/',
    githubUrl: 'https://github.com/prathish-s007/Global-Poverty-Trend-Analysis',
    featured: false
  }
];
