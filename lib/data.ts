export const profile = {
  name: 'Santosh Pandey',
  firstName: 'Santosh',
  lastName: 'Pandey',
  role: 'Computer Science & Cybersecurity Engineer',
  email: 'santosh.pandey0217@gmail.com',
  phone: '+977 9845903494',
  phoneHref: 'tel:+977 9845903494',
  location: 'Kathmandu, Nepal',
  availability: 'Open to Opportunities',
  university: 'SRM University–AP, Amaravati, India',
}

const searchQuery = encodeURIComponent(profile.name)

export const socials = {
  linkedin: 'https://www.linkedin.com/in/YOUR-USERNAME/',
  github: 'https://github.com/Santosh7400',
  email: `mailto:${profile.email}`,
  instagram: 'https://www.instagram.com/santosh0x1337/',
  x: '',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const

export const education = [
  {
    period: '2022 - 2026',
    title: 'B.Tech in Computer Science and Engineering',
    subtitle: '(Specialization: Cyber Security)',
    institution: 'SRM University–AP, Amaravati, India',
    detail: 'CGPA: 8.34 / 10',
    initials: 'SRM',
    logo: '/logo.png',
  },
  {
    period: '2020 - 2022',
    title: 'Higher Secondary Education (12th)',
    institution: 'Hetauda School of Management and Social Sciences',
    detail: 'Hetauda, Nepal',
    initials: 'HSMSS',
    logo: '/images/Hetauda_School_Logo.png',
  },
]

export type SkillCategory = 'Programming' | 'Web Development' | 'AI/ML & Data Science' | 'Cybersecurity' | 'Tools'

export const skillCategories: ('All' | SkillCategory)[] = [
  'All',
  'Programming',
  'Web Development',
  'AI/ML & Data Science',
  'Cybersecurity',
  'Tools',
]

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`

export type Skill = {
  name: string
  category: SkillCategory
  icon?: string
  lucide?: 'radar' | 'shark' | 'metasploit' | 'burp'
}

export const skills: Skill[] = [
  { name: 'Python', category: 'Programming', icon: devicon('python/python-original') },
  { name: 'Java', category: 'Programming', icon: devicon('java/java-original') },
  { name: 'C++', category: 'Programming', icon: devicon('cplusplus/cplusplus-original') },
  { name: 'JavaScript', category: 'Programming', icon: devicon('javascript/javascript-original') },
  { name: 'HTML5', category: 'Web Development', icon: devicon('html5/html5-original') },
  { name: 'CSS3', category: 'Web Development', icon: devicon('css3/css3-original') },
  { name: 'Django', category: 'Web Development', icon: devicon('django/django-plain') },
  { name: 'React', category: 'Web Development', icon: devicon('react/react-original') },
  { name: 'MySQL', category: 'Web Development', icon: devicon('mysql/mysql-original') },
  { name: 'OpenCV', category: 'AI/ML & Data Science', icon: devicon('opencv/opencv-original') },
  { name: 'TensorFlow', category: 'AI/ML & Data Science', icon: devicon('tensorflow/tensorflow-original') },
  { name: 'scikit-learn', category: 'AI/ML & Data Science', icon: devicon('scikitlearn/scikitlearn-original') },
  { name: 'Git', category: 'Tools', icon: devicon('git/git-original') },
  { name: 'Linux', category: 'Tools', icon: devicon('linux/linux-original') },
  { name: 'Nmap', category: 'Cybersecurity', lucide: 'radar' },
  { name: 'Wireshark', category: 'Cybersecurity', lucide: 'shark' },
  { name: 'Metasploit', category: 'Cybersecurity', lucide: 'metasploit' },
  { name: 'Burp Suite', category: 'Cybersecurity', lucide: 'burp' },
]

export const proficiencies = [
  { label: 'Problem Solving', value: 99 },
  { label: 'Web Development', value: 85 },
  { label: 'Machine Learning', value: 80 },
  { label: 'Cybersecurity', value: 80 },
  { label: 'Communication', value: 85 },
]

export const projects = [
  {
    title: 'Music Player',
    image: '/images/project-music.png',
    tags: ['Java', 'React', 'JSON Server'],
    stack: ['Java', 'React', 'JSON Server', 'HTML', 'CSS'],
    points: [
      'Designed and developed a music player application.',
      'Built with React, JSON Server, HTML, and CSS.',
      'Initiated through design thinking with a focus on a smooth listening experience.',
    ],
  },
  {
    title: 'Student Management System',
    image: '/images/project-sms.png',
    tags: ['Python', 'Django', 'MySQL'],
    stack: ['Python', 'Django', 'MySQL'],
    points: [
      'Developed a web-based system for managing student records.',
      'Implemented features like validation and a user-friendly interface.',
      'Used MySQL for reliable database management.',
    ],
  },
  {
    title: 'Speech Emotion Recognition',
    image: '/images/project-ser.png',
    tags: ['Python', 'TensorFlow', 'CNN-LSTM'],
    stack: ['Python', 'TensorFlow', 'CNN-LSTM', 'TESS Dataset'],
    points: [
      'Developed a deep learning model for classifying human emotions from speech.',
      'Used the TESS dataset for training and testing.',
      'Implemented a CNN-LSTM architecture for sequential audio features.',
    ],
  },
  {
    title: 'Real-Time Object Detection',
    image: '/images/project-yolo.png',
    tags: ['Python', 'YOLO', 'OpenCV'],
    stack: ['Python', 'YOLO', 'OpenCV'],
    points: [
      'Developed AI-powered real-time object detection.',
      'Trained for accurate detection and classification.',
      'Processes live video streams with bounding box overlays.',
    ],
  },
]

export const research = {
  title: 'Advancing Speech Emotion Recognition: A Comprehensive Evaluation on the TESS Dataset',
  venue: 'Published in IEEE Xplore',
  date: 'July 2026',
  ieeeSearch: `https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=${encodeURIComponent(
    'Advancing Speech Emotion Recognition: A Comprehensive Evaluation on the TESS Dataset',
  )}`,
  points: [
    'Conducted a research study on speech emotion recognition.',
    'Evaluated CNN-LSTM architectures for speech emotion recognition using the TESS dataset.',
    'Performed comparative analysis of classification performance across multiple emotion categories using standard evaluation metrics.',
  ],
}

export const certifications = [
  { title: 'The Joy of Computing using Python', issuer: 'NPTEL', tone: 'from-amber-400 to-orange-500' },
  { title: 'HTML5 and CSS3 Complete Course', issuer: 'Udemy', tone: 'from-violet-500 to-fuchsia-500' },
  { title: 'JavaScript for Beginners', issuer: 'Udemy', tone: 'from-violet-500 to-fuchsia-500' },
  { title: 'Pentesting Web Application', issuer: 'Infosys', tone: 'from-sky-500 to-blue-600' },
  { title: 'Cyber Security and Hacker Tactics Awareness Training', issuer: 'Infosys', tone: 'from-sky-500 to-blue-600' },
  { title: 'MongoDB Certified Associate Developer', issuer: 'MongoDB', tone: 'from-emerald-400 to-green-600' },
]

export const experience = [
  {
    role: 'Development Team Member (Intern)',
    org: 'Eagleeyetech',
    period: 'August 2024 – August 2025',
    summary: 'Dynamic Blog Website Development',
    points: [
      'Contributed to building a dynamic blog website as part of the development team.',
      'Collaborated with team members across features, reviews, and releases.',
    ],
  },
  {
    role: 'International Students Ambassador',
    org: 'Office of International Relations, SRM University–AP',
    period: 'January 2023 – January 2026',
    summary: 'Student outreach & support',
    points: [
      'Represented and supported international students at the university.',
      'Helped with university events and welcoming new students.',
    ],
  },
  {
    role: 'Independent Trader',
    org: 'Self-employed',
    period: '2022 – Present',
    summary: 'Financial markets',
    points: [
      'Analyze markets and manage positions independently.',
      'Apply disciplined risk management and data-driven decision making.',
    ],
  },
]
