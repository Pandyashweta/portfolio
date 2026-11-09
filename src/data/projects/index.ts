import { codingProjects } from "./coding";
import { figmaProjects } from "./figma";
import type { ProjectData } from "../../types";

export { figmaProjects };
export { codingProjects, developerSubfolders } from "./coding";
export const allProjects = [...codingProjects, ...figmaProjects];
