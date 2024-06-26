import {Backlog} from "./backlog.model";
import { Task } from "./task.model";

export class Project {
  id: number;
  projectname: string;
  description: string;
  technologies: string[];
  productOwnerId: number;
  updatedAt: string;
  createdAt: string;
  backlogId: number;
  backlog: Backlog;
 


  constructor(data: any) {
    this.id = data.id;
    this.projectname = data.projectname;
    this.description = data.description;
    this.technologies = JSON.parse(data.technologies);
    this.productOwnerId = data.product_owner_id;
    this.updatedAt = data.updated_at;
    this.createdAt = data.created_at;
    this.backlogId = data.backlog_id;
    this.backlog = new Backlog(data.backlog);
  }
}
