export class User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  photo: String;
  type: string;
  sex : String;
  confirmed : boolean;
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.lastName = data.last_name;
    this.email = data.email;
    this.photo = data.photo;
    this.type = data.type;
    this.sex = data.sex;
    this.confirmed = data.confirmed;
  }
}
