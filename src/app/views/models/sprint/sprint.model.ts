import { User } from '../Users/User.model';
import { Task } from '../task/task.model';

export interface Sprint {
  title: string;
  members: User[];
  tasks: Task[];   
  doneStatus: boolean;
  startTime: Date;
  endTime: Date;
  backlogId: number;
}