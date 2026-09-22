// ---------------------------------------------------------------
// All personal content lives here. Edit this file to update the site.
// ---------------------------------------------------------------

export const PROFILE = {
  name: 'Anjali S Prabhu',
  first: 'Anjali',
  particleText: 'ANJALI',
  initials: 'ASP',
  location: 'Udupi, Karnataka',
  email: 'anjali.s.prabhu18@gmail.com',
  phone: '+91-7619511275',
  whatsapp: 'https://wa.me/917619511275',
  linkedin: 'https://www.linkedin.com/in/anjali-s-prabhu',
  github: 'https://github.com/Anjali-S-Prabhu',
  resume: '/Anjali_S_Prabhu_Resume.pdf',
  // Drop a photo at public/profile.jpg and it will show automatically.
  photo: '/profile.jpg',
  eyebrow: 'AI / ML Engineering Student & Full-Stack Builder',
  roles: ['AI/ML Engineer', 'GenAI Builder', 'Full-Stack Developer', 'Computer Vision Dev'],
  bio: "Hi, I'm Anjali, an Artificial Intelligence and Machine Learning student with hands-on experience building AI-powered applications, machine learning systems, computer vision, NLP and full-stack solutions. I work with Python, FastAPI, Flask, React, databases and LLM integrations, and I like shipping real-world projects.",
};

// Certificates & credentials — each entry ships with the site.
// thumb = preview image, file = original certificate PDF (opens in a new tab).
export const CERTIFICATES = [
  {
    id: 'sepm-coursera',
    name: 'Software Engineering: Software Design and Project Management',
    issuer: 'Coursera · The Hong Kong University of Science and Technology',
    date: 'Sep 2025',
    thumb: '/certificates/sepm-coursera-1.jpg',
    file: '/certificates/sepm-coursera.pdf',
  },
  {
    id: 'cloud-computing-nptel',
    name: 'Cloud Computing (Elite, 66%)',
    issuer: 'NPTEL · IIT Kharagpur',
    date: 'Jul–Oct 2025',
    thumb: '/certificates/cloud-computing-nptel-1.jpg',
    file: '/certificates/cloud-computing-nptel.pdf',
  },
  {
    id: 'google-cloud-genai-leader',
    name: 'Google Cloud Career Launchpad — Generative AI Leader Track',
    issuer: 'Google Cloud',
    date: 'Sep 2025',
    thumb: '/certificates/google-cloud-genai-leader-track-1.jpg',
    file: '/certificates/google-cloud-genai-leader-track.pdf',
  },
  {
    id: 'prompt-design-vertex-ai',
    name: 'Prompt Design in Vertex AI (Skill Badge)',
    issuer: 'Google Cloud',
    date: 'Sep 2025',
    thumb: '/certificates/google-cloud-badge-01.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'gen-ai-agents',
    name: 'Gen AI Agents: Transform Your Organization',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    thumb: '/certificates/google-cloud-badge-02.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'gen-ai-apps',
    name: 'Gen AI Apps: Transform Your Work',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    thumb: '/certificates/google-cloud-badge-03.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'gen-ai-navigate',
    name: 'Gen AI: Navigate the Landscape',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    thumb: '/certificates/google-cloud-badge-04.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'gen-ai-foundational',
    name: 'Gen AI: Unlock Foundational Concepts',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    thumb: '/certificates/google-cloud-badge-05.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'gen-ai-beyond-chatbot',
    name: 'Gen AI: Beyond the Chatbot',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    thumb: '/certificates/google-cloud-badge-06.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'responsible-ai-principles',
    name: 'Responsible AI: Applying AI Principles with Google Cloud',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    thumb: '/certificates/google-cloud-badge-07.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'intro-responsible-ai',
    name: 'Introduction to Responsible AI',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    thumb: '/certificates/google-cloud-badge-08.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'intro-llms',
    name: 'Introduction to Large Language Models',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    thumb: '/certificates/google-cloud-badge-09.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'intro-generative-ai',
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: 'Jul 2025',
    thumb: '/certificates/google-cloud-badge-10.jpg',
    file: '/certificates/google-cloud-badges.pdf',
  },
  {
    id: 'build-guardrails-ai',
    name: 'Build Guardrails for Your AI with Open Source',
    issuer: 'Cognitive Class (IBM Developer Skills Network)',
    date: 'Nov 2024',
    thumb: '/certificates/build-guardrails-ai-cognitiveclass-1.jpg',
    file: '/certificates/build-guardrails-ai-cognitiveclass.pdf',
  },
  {
    id: 'art-of-prompt-engineering',
    name: 'The Art of Prompt Engineering',
    issuer: 'Cognitive Class (IBM Developer Skills Network)',
    date: 'Nov 2024',
    thumb: '/certificates/art-of-prompt-engineering-cognitiveclass-1.jpg',
    file: '/certificates/art-of-prompt-engineering-cognitiveclass.pdf',
  },
  {
    id: 'prompt-engineering-everyone',
    name: 'Prompt Engineering for Everyone',
    issuer: 'Cognitive Class (IBM Developer Skills Network)',
    date: 'Sep 2024',
    thumb: '/certificates/prompt-engineering-cognitiveclass-1.jpg',
    file: '/certificates/prompt-engineering-cognitiveclass.pdf',
  },
  {
    id: 'dsa-infosys',
    name: 'Data Structures and Algorithms',
    issuer: 'Infosys Springboard',
    date: 'Oct 2024',
    thumb: '/certificates/dsa-infosys-springboard-1.jpg',
    file: '/certificates/dsa-infosys-springboard.pdf',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Hospital Information Assistant',
    category: 'FastAPI · RAG · React',
    year: '2026',
    desc:
      'A production-grade hospital information system with patient management, appointments, file uploads and JWT/OAuth2 auth. An AI chatbot built on LangChain and Groq Llama-3 answers hospital queries through a RAG pipeline using FastEmbed and Qdrant. Fully containerized with Docker Compose, with a React + TypeScript frontend and AWS S3 storage.',
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'LangChain', 'Groq Llama-3', 'Qdrant', 'AWS S3', 'Docker', 'React', 'TypeScript'],
    gradient: 'from-yellow-400/25 via-amber-600/10 to-zinc-900',
    glyph: 'RAG',
    link: null,
  },
  {
    id: 2,
    title: 'Real-Time Sign Language Detection',
    category: 'Computer Vision · OpenCV',
    year: '2026',
    desc:
      'A webcam-based system that recognises hand gestures in real time and converts them into readable text to support accessible communication. Uses image preprocessing, hand landmark detection and gesture classification, tuned for detection accuracy and real-time performance.',
    stack: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing', 'Hand Landmarks', 'Gesture Classification'],
    gradient: 'from-sky-400/20 via-indigo-600/10 to-zinc-900',
    glyph: 'CV',
    link: null,
  },
];

export const SKILLS = [
  { title: 'Programming', tag: 'Python & SQL', color: '#eab308', darkColor: 'bg-yellow-950/90', icon: 'Terminal', description: 'Python and SQL for data work, backend services and automation, backed by solid OOP fundamentals.' },
  { title: 'AI / ML & GenAI', tag: 'LLMs & RAG', color: '#000080', darkColor: 'bg-blue-950/90', icon: 'Sparkles', description: 'Machine learning, NLP, NumPy, Pandas, Scikit-learn, TensorFlow, LLMs, RAG pipelines and LangChain.' },
  { title: 'APIs & Development', tag: 'REST & Docker', color: '#648c11', darkColor: 'bg-emerald-950/90', icon: 'Monitor', description: 'REST APIs, Docker, Terraform and Render deployments, built and debugged in VS Code.' },
  { title: 'Cloud & DevOps', tag: 'AWS & CI/CD', color: '#ff4500', darkColor: 'bg-orange-950/90', icon: 'Cloud', description: 'AWS, Firebase, Linux, Kubernetes, Ansible, CI/CD pipelines, Git and GitHub.' },
  { title: 'CS Fundamentals', tag: 'OOPs · CN · OS', color: '#ff0000', darkColor: 'bg-red-950/90', icon: 'Cpu', description: 'Object-oriented programming, computer networks and operating systems.' },
  { title: 'Core Skills', tag: 'Team & Thinking', color: '#71717a', darkColor: 'bg-zinc-900/90', icon: 'Users', description: 'Problem solving, analytical thinking, debugging, team collaboration and clear communication.' },
];

// Cards for the scrolling "Journey" marquee
export const JOURNEY = [
  { id: 1, type: 'Education', title: 'B.E. in AI & Machine Learning', org: "Alva's Institute of Engineering & Technology, Mijar, Moodbidri", meta: '2023 – Present · CGPA 8.1', text: 'Final-year engineering student specialising in Artificial Intelligence and Machine Learning.' },
  { id: 2, type: 'Experience', title: 'Data Science Intern', org: 'Prodigy InfoTech', meta: 'Mar 2026', text: 'Preprocessed, cleaned and analysed real-world datasets, applying ML techniques to find patterns and support data-driven decisions.' },
  { id: 3, type: 'Achievement', title: 'Cognizant Technoverse Hackathon 2026', org: 'Certificate of Appreciation', meta: '2026', text: 'Recognised for problem-solving, collaboration and technical skills.' },
  { id: 4, type: 'Achievement', title: 'Karnataka State Police Datathon 2026', org: 'Nationwide innovation challenge', meta: '2026', text: 'Participated in a challenge focused on AI, data analytics and crime investigation solutions.' },
  { id: 5, type: 'Certification', title: 'Introduction to AI and Machine Learning', org: 'Infosys Springboard', meta: 'Certificate', text: 'Foundations of artificial intelligence and machine learning.' },
  { id: 6, type: 'Certification', title: 'Cloud Computing', org: 'NPTEL', meta: 'Elite Ranking', text: 'NPTEL cloud computing course, completed with Elite ranking.' },
  { id: 7, type: 'Certification', title: 'Google Cloud Data Analytics', org: 'Google Cloud Career Launchpad', meta: 'Certificate', text: 'Data analytics on Google Cloud through the Career Launchpad programme.' },
];

export const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'portfolio' },
  { label: 'Skills', id: 'skills' },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
];
