import { Project } from '../../models/project/project.model'; 
export interface Team {
    id: number;
    name: string;
    projects: Project[]; 

}