export interface AboutData {
  name: string;
  roles: string[];
  description: string;
  image: string;
  cv: string;
}

const STATIC_ABOUT: AboutData = {
  "cv": "https://drive.google.com/file/d/1ZdyOD6M0paSMOw52Lssi9DDV_J33fJtl/view?usp=sharing",
  "description": "I am a passionate Frontend Developer and GenAI Enthusiast, currently pursuing my Master of Computer Applications (MCA). With a strong foundation in React and modern UI technologies, I specialize in building seamless, user-centric web experiences. Driven by the possibilities of Artificial Intelligence, I am actively integrating Agentic and Generative AI—using tools like the OpenAI API, Python, and LangChain—to create intelligent digital solutions. Whether I'm designing responsive interfaces or working with data in SQL, I thrive on turning complex problems into elegant, impactful products.",
  "image": "",
  "name": "Satale Gayatri K",
  "roles": [
    "Frontend Developer",
    "Problem Solver",
    "React Developer",
    "GenAI Enthusiast"
  ]
};

export const getAboutData = async (): Promise<AboutData> => {
  return Promise.resolve(STATIC_ABOUT);
};
