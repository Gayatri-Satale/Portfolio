// Local Type Definition for a single education entry
interface Education {
  id: string;
  courseName: string;
  description: string;
  startDate: string;
  endDate?: string | null;
  institutionName: string;
  institutionLink?: string | null;
  logo?: string | null;
  type: 'education';
  order?: number; // optional, used for sorting
}

const STATIC_EDUCATION: Education[] = [
  {
    "id": "4",
    "courseName": "Master of Computer Applications (MCA)",
    "description": "Currently pursuing my Master's degree to deepen my expertise in advanced software engineering, system architecture, and modern web development. Focusing on building robust, scalable frontend web applications and integrating Generative AI solutions using Large Language Models.",
    "endDate": null,
    "institutionLink": "https://parikrama.edu.in/",
    "institutionName": "Parikrama Group of Institutions, Kashti",
    "logo": "https://www.google.com/s2/favicons?domain=parikrama.edu.in&sz=128",
    "order": 1,
    "startDate": "2025-09-01",
    "type": "education"
  },
  {
    "id": "3",
    "courseName": "Bachelor of Computer Applications (BCA)",
    "description": "Graduated with a strong foundation in computer science, software development, and programming principles. Mastered frontend web development, particularly the React ecosystem, and applied these skills to build dynamic, responsive web applications. Also explored Agentic & Generative AI to create intelligent digital solutions.",
    "endDate": "2024-05-31",
    "institutionLink": "https://newartscollege.ac.in/",
    "institutionName": "New Arts, Commerce and Science College, Ahmednagar",
    "logo": "https://www.google.com/s2/favicons?domain=newartscollege.ac.in&sz=128",
    "order": 2,
    "startDate": "2021-09-01",
    "type": "education"
  },
  {
    "id": "2",
    "courseName": "HSC(XII)",
    "description": "Completed my higher secondary education, establishing a solid foundation in core academic subjects.",
    "endDate": "2021-03-31",
    "institutionLink": "https://rayatshikshan.edu/",
    "institutionName": "Radhabai Kale Mahila Mahavidyalaya",
    "logo": "https://www.google.com/s2/favicons?domain=rayatshikshan.edu&sz=128",
    "order": 3,
    "startDate": "2020-06-01",
    "type": "education"
  },
  {
    "id": "1",
    "courseName": "SSC(X)",
    "description": "I completed my class 10 education at SBVNG School.",
    "endDate": "2019-05-31",
    "institutionLink": "https://schools.org.in/ahmadnagar/27260412001/bhairavnath-vidyalaya-nimgoan-gangarda.html",
    "institutionName": "SBVNG School",
    "logo": "https://schools.org.in/assets/images/favicon.png",
    "order": 4,
    "startDate": "2018-06-01",
    "type": "education"
  }
];

export const getEducationHistory = async (): Promise<any[]> => {
  return Promise.resolve(STATIC_EDUCATION);
};
