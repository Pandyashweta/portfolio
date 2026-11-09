export interface ProjectTheme {
  bg: string;
  text: string;
  textMuted?: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  dotColor: string;
}

export interface ProjectFact {
  label: string;
  value: string;
  color?: string;
  rotation?: string;
  tapeSide?: "left" | "right";
}

export interface ProjectStory {
  challenge?: string;
  approach?: string;
  results?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  subfolder?: string;
  image: string;
  aspectClass: string;
  spanClass?: string;
  url?: string;
  description?: string;
  year?: string;
  scope?: string;
  client?: string;
  duration?: string;
  role?: string;
  aboutText?: string;
  tags?: string[];
  facts?: ProjectFact[];
  story?: ProjectStory;
  theme?: ProjectTheme;
  images?: string[];
  resources?: {
    label: string;
    url: string;
    description?: string;
  }[];
}
