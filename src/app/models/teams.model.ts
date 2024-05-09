import {Project} from "./project.model";

export interface Team {
    id: number;
    name: string;
    projects: Project[];
}
