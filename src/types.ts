export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  techStack: string[];
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Stats {
  projects: number;
  clients: number;
  experience: number;
  satisfaction: number;
}