export interface Task {
    id: number;
    description: string;
    status : String;
    sprint_id: number ;
    assigned_user_id: number;
    updatedAt: string;
    createdAt: string;
  }