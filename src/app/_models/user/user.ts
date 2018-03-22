import { Role } from './../role/role';
export class User {
    id: Number;
    login: String;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    roleId: Number;
    locked: String;
    rowAddedUser: string;
    rowAddedDttm: Date;
    rowUpdateUser: string;
    rowUpdateDttm: Date;
    role: Role = new Role();
}
