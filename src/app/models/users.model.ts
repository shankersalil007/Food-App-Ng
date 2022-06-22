export class users {
  id: number;
  fname: string;
  lname?: string;
  email: string;
  phone?: number;
  password: string;
  address?: Address[];
  payment?: Payment[];

  constructor(id: number, fname: string, email: string, password: string) {
    this.id = id;
    this.fname = fname;
    this.email = email;
    this.password = password;
  }
}

export interface Address {
  houseno: number;
  city: string;
  state: string;
  landmark: string;
}

export interface Payment {
  cred: number;
  month: number;
  year: number;
  cvv: number;
}
