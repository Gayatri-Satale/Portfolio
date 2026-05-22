// --- Type Definitions ---
export interface Skill {
  id: string;
  name: string;
  iconKey?: string;       // key to match frontend ICON_MAP
  image?: string | null;  // optional external image URL
}

export interface SkillCategory {
  id: string;             // Document ID
  name: string;
  order?: number;         // used for sorting categories
  skills: Skill[];
}

const STATIC_SKILLS: SkillCategory[] = [
  {
    "id": "frontend",
    "name": "Frontend",
    "order": 1,
    "skills": [
      { "iconKey": "html", "id": "html", "image": "", "name": "HTML" },
      { "iconKey": "css", "id": "css", "image": "", "name": "CSS" },
      { "iconKey": "js", "id": "js", "image": "", "name": "JS" },
      { "iconKey": "react", "id": "react", "image": "", "name": "React" },
      { "iconKey": "tailwind", "id": "tailwind", "image": "", "name": "Tailwind" },
      { "iconKey": "bootstrap", "id": "bootstrap", "image": "", "name": "Bootstrap" }
    ]
  },
  {
    "id": "genai",
    "name": "Agentic & Generative AI",
    "order": 5,
    "skills": [
      { "iconKey": "openai", "id": "openai", "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", "name": "OpenAI API" },
      { "iconKey": "chatgpt", "id": "chatgpt", "image": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", "name": "ChatGPT" },
      { "iconKey": "langchain", "id": "langchain", "image": "", "name": "LangChain" },
      { "iconKey": "ai-apps", "id": "ai-apps", "image": "", "name": "AI Web Apps" },
      { "iconKey": "python", "id": "python", "image": "https://cdn.iconscout.com/icon/free/png-256/free-python-3628999-3030224.png", "name": "Python" },
      { "iconKey": "fastapi", "id": "fastapi", "image": "https://cdn.iconscout.com/icon/free/png-256/free-fastapi-3521434-2944878.png", "name": "FastAPI" },
    ]
  },
  {
    "id": "database",
    "name": "Database Management",
    "order": 3,
    "skills": [
      { "iconKey": "sql", "id": "sql", "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", "name": "SQL" }
    ]
  },
  {
    "id": "others",
    "name": "Others",
    "order": 4,
    "skills": [
      { "iconKey": "git", "id": "git", "image": "", "name": "Git" },
      { "iconKey": "github", "id": "github", "image": "", "name": "GitHub" },
      { "iconKey": "excel", "id": "excel", "image": "", "name": "Excel" }
    ]
  }
];

// --- Fetch all skill categories from API ---
export const getSkillCategories = async (): Promise<SkillCategory[]> => {
  return Promise.resolve(STATIC_SKILLS);
};
