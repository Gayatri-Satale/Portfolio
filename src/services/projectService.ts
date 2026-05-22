export interface Project {
  id: string;
  name: string;
  category: { id: string; name: string };
  shortDescription: string;
  longDescription?: string;
  projectImage?: string; // Project image mapping vs image
  tags: string[];
  members: any[];
  liveLink?: string | null;
  githubLink?: string | null;
  featured?: boolean;
  startDate?: string;
  endDate?: string | null;
}

const STATIC_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "mern-genai", name: "MERN + GenAI", _id: "mern-genai" },
  { id: "webapp", name: "Web App", _id: "webapp" }
] as any;

const STATIC_PROJECTS: Project[] = [
  {
    id: "packmate",
    name: "PackMate: AI-Powered Travel Assistant",
    category: { id: "mern-genai", name: "MERN + GenAI" },
    shortDescription: "AI-driven web application to plan trips and generate optimal packing lists using Llama 3.",
    longDescription: "<h3>What is it?</h3><p>PackMate is a comprehensive, AI-driven web application designed to help travelers effortlessly plan trips, manage itineraries, and automatically generate highly optimized packing lists using Generative AI. As the Frontend and AI specialist, my role focused on building the interactive React interface and integrating the Llama 3 models for smart recommendations.</p><br/><h3>Why did we build this?</h3><p>Planning a trip can often be overwhelming. PackMate was built to eliminate the stress of manual packing lists by leveraging the intelligence of advanced Large Language Models, wrapped in a seamless and highly responsive user interface.</p><br/><h3>Tech Stack Used</h3><ul><li><strong>Frontend:</strong> React, Custom CSS</li><li><strong>Backend:</strong> Node.js, Express</li><li><strong>Database:</strong> MongoDB</li><li><strong>AI Integration:</strong> Groq API (Llama 3) for generative capabilities</li><li><strong>Authentication:</strong> JWT and bcrypt</li></ul><br/><h3>Key Features & Contributions</h3><ul><li>Developed a clean, responsive frontend architecture using React.</li><li>Integrated GenAI capabilities directly into the UI to provide real-time, categorized packing lists.</li><li>Built interactive trip management dashboards for destination, dates, and budget tracking.</li><li>Designed the client-side logic for exporting generated lists instantly to DOCX format for offline use.</li></ul>",
    projectImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["React", "Node.js", "GenAI", "MongoDB", "Express", "Python", "FastAPI", "Groq API"],
    members: [],
    liveLink: "https://packmatefrontend.vercel.app",
    githubLink: "https://github.com/Gayatri-Satale/Packmate", // Fallback generated
    featured: true,
    startDate: "2025-08-01",
    endDate: "2026-01-01"
  },
  {
    id: "swiftapi",
    name: "Swift API - Smart API Testing Tool",
    category: { id: "mern-genai", name: "MERN + GenAI" },
    shortDescription: "MERN stack tool offering simplified API testing capabilities similar to Postman, now with an AI Debugging Assistant.",
    longDescription: `<h3>Swift API – Smart API Testing and Development Tool</h3>
<p>Swift API is a web application designed to streamline API testing and development, complete with an AI-powered debugging assistant. For this project, I spearheaded the frontend architecture and the AI integrations, crafting a highly productive and intelligent workspace for developers.</p>
<p>The platform combines developer productivity tools with intelligent assistance, making API development faster and easier.</p>
<br/>
<h3>✨ Key Frontend Contributions</h3>
<ul>
<li><strong> Modern Developer Interface:</strong> Built a clean, responsive, and highly interactive frontend using React.</li>
<li><strong> Dynamic Request Management:</strong> Designed the UI for sending HTTP requests, managing headers, and configuring custom bodies.</li>
<li><strong> JSON Syntax Highlighting:</strong> Implemented pretty-formatted JSON response panels for easy debugging and readability.</li>
<li><strong> Interactive Collections UI:</strong> Developed the frontend logic to organize APIs into structured collections and track request history.</li>
</ul>
<br/>
<h3>🤖 AI-Powered API Debugging Assistant</h3>
<p>I integrated an AI debugging assistant powered by GenAI and the Groq API into the user interface. This assistant helps developers quickly understand and fix API errors during testing.</p>
<h4> AI Integration Highlights</h4>
<ul>
<li><strong> Interactive AI Help Button:</strong> Built the contextual UI triggers allowing developers to get intelligent insights when an error occurs.</li>
<li><strong> Simple Error Explanation:</strong> Designed the interface that converts complex backend error messages into developer-friendly explanations.</li>
<li><strong> Root Cause Analysis UI:</strong> Visualized the AI's suggested fixes and guidance to significantly speed up the debugging workflow.</li>
</ul>`,
    projectImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React", "GenAI", "Node.js", "MongoDB", "CSS Modules", "Express", "Python", "FastAPI", "Groq API"],
    members: [],
    liveLink: "https://swift-api-iota.vercel.app/",
    githubLink: "https://github.com/Gayatri-Satale/SwiftAPI",
    featured: true,
    startDate: "2025-12-01",
    endDate: "2026-01-01"
  }
];

export const getProjectCategories = async () => {
  return Promise.resolve(STATIC_CATEGORIES);
};

export const getRecentProjects = async () => {
  return Promise.resolve(STATIC_PROJECTS.slice(0, 3));
};

export const getProjects = async ({ page = 1, limit = 6, categoryId, name }: {
  page: number;
  limit: number;
  categoryId?: string;
  name?: string;
}) => {
  let filtered = STATIC_PROJECTS;
  if (categoryId && categoryId !== "all") {
    filtered = filtered.filter(p => p.category.id === categoryId);
  }
  if (name) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }

  // Fake pagination
  const startIndex = (page - 1) * limit;
  const paginated = filtered.slice(startIndex, startIndex + limit);

  return Promise.resolve({
    data: paginated,
    totalPages: Math.ceil(filtered.length / limit),
    currentPage: page,
    totalCount: filtered.length
  });
};

export const getProjectById = async (id: string) => {
  const project = STATIC_PROJECTS.find(p => p.id === id);
  if (!project) throw new Error("Project not found");
  return Promise.resolve(project);
};