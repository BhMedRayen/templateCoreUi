import { User } from '../Users/User.model';
import { Task } from '../task/task.model';

export interface Sprint {
  id:number
  title: string;
  membersId: number[];
  tasksId: number[];   
  doneStatus: boolean;
  startTime: Date;
  endTime: Date;
  backlogId: number;
}