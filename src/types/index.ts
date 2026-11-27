export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectStory {
  challenge: string;
  approach: string;
  results: string;
}

export interface ProjectResource {
  label: string;
  url: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  url?: string;
  description: string;
  year: string;
  client: string;
  duration: string;
  role: string;
  tags: string[];
  facts: ProjectFact[];
  story: ProjectStory;
  images: string[];
  resources?: ProjectResource[];
}
