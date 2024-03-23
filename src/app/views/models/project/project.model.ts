export interface Project {
    id : number,
    title: string;
    description: string;
    technologies: string[];
    done: boolean;
    allTasks: number;
    doneTasks : number;
  }