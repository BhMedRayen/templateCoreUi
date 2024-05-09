// backlog.model.ts

export class Backlog {
  backlog: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  id: number;

  constructor(data: any) {
    this.backlog = data.backlog;
    this.description = data.description;
    this.updatedAt = data.updated_at;
    this.createdAt = data.created_at;
    this.id = data.id;
  }
}
