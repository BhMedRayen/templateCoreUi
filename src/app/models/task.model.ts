export interface Task {
    id: number;
    title: string;
    description: string;
    assignedTo: number ;
    status: boolean;
    dueDate: Date;
    sprintId: number; 
  }