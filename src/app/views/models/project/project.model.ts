import { Backlog } from '../backlog/backlog.model';


export interface Project {
    id : number,
    title: string;
    description: string;
    technologies: string[];
    done: boolean;
    backlog?: Backlog;
  }