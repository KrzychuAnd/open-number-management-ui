import { Permission } from './../permission/permission';
export class Role {
    name: string;
    descr: string;
    permissions: Permission[] = new Array<Permission>();
}
