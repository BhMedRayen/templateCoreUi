export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isEmp: boolean;
  role: string;

  constructor(data: any) {
    this.id = data.id;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.email = data.email;
    this.isEmp = data.is_emp;
    this.role = data.role;
  }
}
