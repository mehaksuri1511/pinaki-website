// client/src/data/courseQuizData.js

export const quizCourses = [
  {
    id: "generative-ai",
    name: "Introduction to Generative AI",
    slug: "introduction-to-generative-ai",
  },
  {
    id: "cyber-security",
    name: "Cyber Security and Ethical Hacking",
    slug: "cyber-security-and-ethical-hacking",
  },
  {
    id: "machine-learning",
    name: "Machine Learning & Data Science",
    slug: "machine-learning",
  },
  {
    id: "digital-marketing",
    name: "Advanced Digital Marketing",
    slug: "advanced-digital-marketing",
  },
  {
    id: "full-stack",
    name: "Full Stack Development",
    slug: "full-stack-development",
  },
  {
    id: "data-scientist",
    name: "Data Scientist Global Certification",
    slug: "data-scientist-global-certification",
  },
];

export const courseQuizQuestions = [
  {
    id: 1,
    question: "What kind of work sounds most exciting to you?",

    options: [
      {
        id: "A",
        text: "Building websites and applications",
        scores: {
          "generative-ai": 3,
          "cyber-security": 2,
          "machine-learning": 4,
          "digital-marketing": 2,
          "full-stack": 10,
          "data-scientist": 3,
        },
      },
      {
        id: "B",
        text: "Creating intelligent AI-powered tools",
        scores: {
          "generative-ai": 10,
          "cyber-security": 2,
          "machine-learning": 8,
          "digital-marketing": 4,
          "full-stack": 4,
          "data-scientist": 7,
        },
      },
      {
        id: "C",
        text: "Protecting systems from cyber threats",
        scores: {
          "generative-ai": 2,
          "cyber-security": 10,
          "machine-learning": 2,
          "digital-marketing": 1,
          "full-stack": 3,
          "data-scientist": 2,
        },
      },
      {
        id: "D",
        text: "Analyzing data and finding useful patterns",
        scores: {
          "generative-ai": 5,
          "cyber-security": 2,
          "machine-learning": 9,
          "digital-marketing": 4,
          "full-stack": 2,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 2,
    question: "Which activity would you enjoy the most?",

    options: [
      {
        id: "A",
        text: "Writing code and developing applications",
        scores: {
          "generative-ai": 3,
          "cyber-security": 3,
          "machine-learning": 4,
          "digital-marketing": 1,
          "full-stack": 10,
          "data-scientist": 3,
        },
      },
      {
        id: "B",
        text: "Experimenting with AI tools and prompts",
        scores: {
          "generative-ai": 10,
          "cyber-security": 1,
          "machine-learning": 7,
          "digital-marketing": 5,
          "full-stack": 3,
          "data-scientist": 6,
        },
      },
      {
        id: "C",
        text: "Finding vulnerabilities and solving security challenges",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 2,
          "digital-marketing": 0,
          "full-stack": 3,
          "data-scientist": 1,
        },
      },
      {
        id: "D",
        text: "Working with datasets and discovering insights",
        scores: {
          "generative-ai": 4,
          "cyber-security": 2,
          "machine-learning": 9,
          "digital-marketing": 4,
          "full-stack": 2,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 3,
    question: "Which type of problem would you prefer solving?",

    options: [
      {
        id: "A",
        text: "How can I build a complete web application?",
        scores: {
          "generative-ai": 3,
          "cyber-security": 3,
          "machine-learning": 2,
          "digital-marketing": 1,
          "full-stack": 10,
          "data-scientist": 2,
        },
      },
      {
        id: "B",
        text: "How can AI automate or improve this task?",
        scores: {
          "generative-ai": 10,
          "cyber-security": 1,
          "machine-learning": 7,
          "digital-marketing": 6,
          "full-stack": 4,
          "data-scientist": 5,
        },
      },
      {
        id: "C",
        text: "How can I secure this system?",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 1,
          "digital-marketing": 0,
          "full-stack": 4,
          "data-scientist": 1,
        },
      },
      {
        id: "D",
        text: "What does this data tell us?",
        scores: {
          "generative-ai": 3,
          "cyber-security": 1,
          "machine-learning": 9,
          "digital-marketing": 5,
          "full-stack": 1,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 4,
    question: "Which technology area interests you the most?",

    options: [
      {
        id: "A",
        text: "Websites, apps and software products",
        scores: {
          "generative-ai": 3,
          "cyber-security": 3,
          "machine-learning": 3,
          "digital-marketing": 2,
          "full-stack": 10,
          "data-scientist": 2,
        },
      },
      {
        id: "B",
        text: "Artificial Intelligence and automation",
        scores: {
          "generative-ai": 10,
          "cyber-security": 2,
          "machine-learning": 8,
          "digital-marketing": 5,
          "full-stack": 4,
          "data-scientist": 6,
        },
      },
      {
        id: "C",
        text: "Networks, security and ethical hacking",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 2,
          "digital-marketing": 0,
          "full-stack": 4,
          "data-scientist": 1,
        },
      },
      {
        id: "D",
        text: "Data, statistics and predictive models",
        scores: {
          "generative-ai": 5,
          "cyber-security": 2,
          "machine-learning": 10,
          "digital-marketing": 3,
          "full-stack": 2,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 5,
    question: "Which career path sounds most attractive to you?",

    options: [
      {
        id: "A",
        text: "Software / Full Stack Developer",
        scores: {
          "generative-ai": 3,
          "cyber-security": 2,
          "machine-learning": 3,
          "digital-marketing": 1,
          "full-stack": 10,
          "data-scientist": 2,
        },
      },
      {
        id: "B",
        text: "AI / Generative AI Specialist",
        scores: {
          "generative-ai": 10,
          "cyber-security": 1,
          "machine-learning": 8,
          "digital-marketing": 5,
          "full-stack": 4,
          "data-scientist": 6,
        },
      },
      {
        id: "C",
        text: "Cyber Security Professional",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 1,
          "digital-marketing": 0,
          "full-stack": 3,
          "data-scientist": 1,
        },
      },
      {
        id: "D",
        text: "Data / Machine Learning Professional",
        scores: {
          "generative-ai": 5,
          "cyber-security": 1,
          "machine-learning": 10,
          "digital-marketing": 3,
          "full-stack": 2,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 6,
    question: "Which project would you rather build?",

    options: [
      {
        id: "A",
        text: "An e-commerce or social media application",
        scores: {
          "generative-ai": 3,
          "cyber-security": 2,
          "machine-learning": 2,
          "digital-marketing": 4,
          "full-stack": 10,
          "data-scientist": 1,
        },
      },
      {
        id: "B",
        text: "An AI chatbot or content generation tool",
        scores: {
          "generative-ai": 10,
          "cyber-security": 1,
          "machine-learning": 7,
          "digital-marketing": 6,
          "full-stack": 5,
          "data-scientist": 5,
        },
      },
      {
        id: "C",
        text: "A security monitoring system",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 3,
          "digital-marketing": 0,
          "full-stack": 4,
          "data-scientist": 2,
        },
      },
      {
        id: "D",
        text: "A prediction or recommendation system",
        scores: {
          "generative-ai": 5,
          "cyber-security": 2,
          "machine-learning": 10,
          "digital-marketing": 3,
          "full-stack": 3,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 7,
    question: "What do you enjoy most about technology?",

    options: [
      {
        id: "A",
        text: "Creating products people can directly use",
        scores: {
          "generative-ai": 3,
          "cyber-security": 2,
          "machine-learning": 3,
          "digital-marketing": 2,
          "full-stack": 10,
          "data-scientist": 2,
        },
      },
      {
        id: "B",
        text: "Exploring new AI capabilities",
        scores: {
          "generative-ai": 10,
          "cyber-security": 1,
          "machine-learning": 8,
          "digital-marketing": 5,
          "full-stack": 4,
          "data-scientist": 6,
        },
      },
      {
        id: "C",
        text: "Understanding how systems can be attacked or protected",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 2,
          "digital-marketing": 0,
          "full-stack": 3,
          "data-scientist": 1,
        },
      },
      {
        id: "D",
        text: "Discovering insights hidden inside data",
        scores: {
          "generative-ai": 4,
          "cyber-security": 1,
          "machine-learning": 9,
          "digital-marketing": 4,
          "full-stack": 2,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 8,
    question: "Which business activity interests you the most?",

    options: [
      {
        id: "A",
        text: "Building digital products and applications",
        scores: {
          "generative-ai": 3,
          "cyber-security": 2,
          "machine-learning": 2,
          "digital-marketing": 2,
          "full-stack": 10,
          "data-scientist": 2,
        },
      },
      {
        id: "B",
        text: "Using AI to improve business productivity",
        scores: {
          "generative-ai": 10,
          "cyber-security": 1,
          "machine-learning": 6,
          "digital-marketing": 6,
          "full-stack": 4,
          "data-scientist": 5,
        },
      },
      {
        id: "C",
        text: "Protecting business systems and information",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 2,
          "digital-marketing": 0,
          "full-stack": 3,
          "data-scientist": 1,
        },
      },
      {
        id: "D",
        text: "Using data to make better decisions",
        scores: {
          "generative-ai": 4,
          "cyber-security": 1,
          "machine-learning": 9,
          "digital-marketing": 5,
          "full-stack": 2,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 9,
    question: "Which skill would you most like to develop?",

    options: [
      {
        id: "A",
        text: "Frontend and backend development",
        scores: {
          "generative-ai": 3,
          "cyber-security": 3,
          "machine-learning": 2,
          "digital-marketing": 1,
          "full-stack": 10,
          "data-scientist": 2,
        },
      },
      {
        id: "B",
        text: "Prompting, LLMs and AI applications",
        scores: {
          "generative-ai": 10,
          "cyber-security": 1,
          "machine-learning": 7,
          "digital-marketing": 5,
          "full-stack": 4,
          "data-scientist": 6,
        },
      },
      {
        id: "C",
        text: "Ethical hacking and network security",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 1,
          "digital-marketing": 0,
          "full-stack": 3,
          "data-scientist": 1,
        },
      },
      {
        id: "D",
        text: "Machine learning and predictive modelling",
        scores: {
          "generative-ai": 5,
          "cyber-security": 1,
          "machine-learning": 10,
          "digital-marketing": 2,
          "full-stack": 2,
          "data-scientist": 10,
        },
      },
    ],
  },

  {
    id: 10,
    question: "What best describes your ideal technology career?",

    options: [
      {
        id: "A",
        text: "I want to build complete software products",
        scores: {
          "generative-ai": 3,
          "cyber-security": 2,
          "machine-learning": 3,
          "digital-marketing": 1,
          "full-stack": 10,
          "data-scientist": 2,
        },
      },
      {
        id: "B",
        text: "I want to work with cutting-edge AI",
        scores: {
          "generative-ai": 10,
          "cyber-security": 1,
          "machine-learning": 8,
          "digital-marketing": 5,
          "full-stack": 4,
          "data-scientist": 6,
        },
      },
      {
        id: "C",
        text: "I want to become a cybersecurity expert",
        scores: {
          "generative-ai": 1,
          "cyber-security": 10,
          "machine-learning": 1,
          "digital-marketing": 0,
          "full-stack": 3,
          "data-scientist": 1,
        },
      },
      {
        id: "D",
        text: "I want to build intelligent data-driven systems",
        scores: {
          "generative-ai": 5,
          "cyber-security": 1,
          "machine-learning": 10,
          "digital-marketing": 2,
          "full-stack": 2,
          "data-scientist": 10,
        },
      },
    ],
  },
];

export default courseQuizQuestions;