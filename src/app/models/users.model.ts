export class users {
  id: number;
  fname: string;
  lname: string;
  email: string;
  phone: number;
  password: string;
  address: string;
  payment: string;

  constructor(id: number, fname: string, lname: string, email: string, phone: number, password: string, address: string, payment: string)
  {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.address = address;
    this.payment = payment;
  }
}
