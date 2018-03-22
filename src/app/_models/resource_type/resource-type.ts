import { Authority } from './../authority/authority';
export class ResourceType {
    id: Number;
    name: string;
    descr: string;
    length: number;
    prefix: number;
    reservationTime: number;
    rowAddedUser: string;
    rowAddedDttm: Date;
    rowUpdatedUser: string;
    rowUpdatedDttm: Date;
    authorities: Authority[] = new Array<Authority>();
}
