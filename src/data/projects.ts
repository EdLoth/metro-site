import allProjects, { ProjetoEngenharia } from "@/projects";


export const getProjectById = (id: string): ProjetoEngenharia | undefined => {
  return allProjects.find((project) => project.id === id);
};
