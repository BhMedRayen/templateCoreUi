import { User } from './user.model'; 

export interface Team {
    id: number;
    team_name: string;
    scrum_master_id: number;
    created_at: string;
    updated_at: string;
    users: User[];
}